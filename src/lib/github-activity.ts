export type ContributionDay = {date: string; count: number; level: number};
export type GitHubActivity = {total: number; days: ContributionDay[]};

const DAY = 86_400_000;

// Read only dates, counts, and intensity; never inject GitHub HTML into the page.
export function parseGitHubActivity(html: string): GitHubActivity {
  const heading = html.match(/<h2\b[^>]*id=["']js-contribution-activity-description["'][^>]*>([\s\S]*?)<\/h2>/i)?.[1].replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ');
  const reportedTotal = heading?.match(/([\d,]+)\s+contributions?\s+in the last year/i);
  if (!reportedTotal) throw new Error('Missing rolling-year contribution total');
  const total = Number(reportedTotal[1].replace(/,/g, ''));
  const attributes = (tag: string) => Object.fromEntries([...tag.matchAll(/([\w-]+)=["']([^"']*)["']/g)].map(match => [match[1], match[2]]));
  const counts = new Map<string, number>();
  for (const match of html.matchAll(/<tool-tip\b([^>]*)>([\s\S]*?)<\/tool-tip>/gi)) {
    const text = match[2].replace(/<[^>]*>/g, ' ').trim();
    const count = text.match(/^(No|[\d,]+) contributions? on\b/i);
    const target = attributes(match[1]).for;
    if (count && target) counts.set(target, count[1] === 'No' ? 0 : Number(count[1].replace(/,/g, '')));
  }
  const days: ContributionDay[] = [];
  for (const match of html.matchAll(/<td\b[^>]*>/gi)) {
    const cell = attributes(match[0]);
    if (!cell['data-date']) continue;
    const date = cell['data-date'], count = counts.get(cell.id), level = Number(cell['data-level']);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !Number.isFinite(Date.parse(date)) || new Date(date).toISOString().slice(0, 10) !== date || count === undefined || !Number.isSafeInteger(count) || count < 0 || !/^[0-4]$/.test(cell['data-level'])) throw new Error('Invalid contribution day');
    days.push({date, count, level});
  }
  days.sort((a, b) => a.date.localeCompare(b.date));
  if (days.length < 350 || days.length > 378 || !Number.isSafeInteger(total) || days.reduce((sum, day) => sum + day.count, 0) !== total) throw new Error('Incomplete contribution calendar');
  for (let index = 1; index < days.length; index++) {
    if (Date.parse(days[index].date) - Date.parse(days[index - 1].date) !== DAY) throw new Error('Non-contiguous contribution dates');
  }
  return {total, days};
}

export async function getGitHubActivity(): Promise<GitHubActivity | null> {
  try {
    const response = await fetch('https://github.com/users/raeynwa/contributions', {
      headers: {Accept: 'text/html', 'User-Agent': 'raeynwa-portfolio'},
      next: {revalidate: 3600},
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) throw new Error(`GitHub calendar HTTP ${response.status}`);
    const html = await response.text();
    if (html.length > 1_000_000) throw new Error('Unexpected calendar size');
    return parseGitHubActivity(html);
  } catch {
    // Keep the portfolio usable without presenting stale or invented activity.
    return null;
  }
}
