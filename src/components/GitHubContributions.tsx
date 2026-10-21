import type {CSSProperties} from 'react';
import {getGitHubActivity, type ContributionDay} from '@/lib/github-activity';
import {contact} from '@/lib/profile';
import {Icon} from './Icons';

type Week = (ContributionDay | null)[];
const DAY = 86_400_000;
const dateLabel = (date: string) => new Intl.DateTimeFormat('en', {day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC'}).format(new Date(date));

function Calendar({weeks}: {weeks: Week[]}) {
  let previousMonth = '';
  const labels = weeks.flatMap((week, index) => {
    const date = week.find(day => day !== null)?.date;
    if (!date || date.slice(0, 7) === previousMonth) return [];
    previousMonth = date.slice(0, 7);
    return index > weeks.length - 2 ? [] : [{index, label: new Intl.DateTimeFormat('en', {month: 'short', timeZone: 'UTC'}).format(new Date(date))}];
  });
  return <div style={{'--rp-weeks': weeks.length} as CSSProperties}>
    <div className="rp-months">{labels.map(({index, label}) => <span key={index} style={{'--rp-col': index + 1} as CSSProperties}>{label}</span>)}</div>
    <div className="rp-weeks">{weeks.map((week, index) => <div className="rp-week" key={index}>{week.map((day, weekday) => <span key={day?.date || weekday} className={`rp-day${day ? '' : ' rp-outside'}`} data-level={day?.level} data-date={day?.date} title={day ? `${day.count} ${day.count === 1 ? 'contribution' : 'contributions'} · ${dateLabel(day.date)}` : undefined}/>)}</div>)}</div>
  </div>;
}
export async function GitHubContributions() {
  const activity = await getGitHubActivity();
  const weeks: Week[] = [];
  if (activity) {
    const firstTime = Date.parse(activity.days[0].date);
    const base = firstTime - new Date(firstTime).getUTCDay() * DAY;
    for (const day of activity.days) {
      const offset = Math.round((Date.parse(day.date) - base) / DAY), index = Math.floor(offset / 7);
      if (!weeks[index]) weeks[index] = Array.from({length: 7}, () => null);
      weeks[index][offset % 7] = day;
    }
  }
  const first = activity?.days[0].date, last = activity?.days.at(-1)?.date;
  const range = first && last ? `${dateLabel(first)} – ${dateLabel(last)}` : '';
  const blockSize = Math.ceil(weeks.length / 4);
  return <section className="rp-section" id="activity"><div className="rp-github-head"><div><p className="rp-eyebrow">03 / Activity</p><h2>On GitHub</h2></div>{activity && <span className="rp-count">{activity.total.toLocaleString('en')} contributions in the last 12 months</span>}</div>
    {activity ? <div className="rp-calendar" role="img" aria-label={`${activity.total} GitHub contributions in the last 12 months, ${range}. Includes anonymised private contributions published on my GitHub profile. Darker to brighter red indicates increasing daily activity.`}>
      <div className="rp-year-calendar" aria-hidden="true"><Calendar weeks={weeks}/></div>
      <div className="rp-mobile-calendars" aria-hidden="true">{[0, 1, 2, 3].map(block => <Calendar key={block} weeks={weeks.slice(block * blockSize, (block + 1) * blockSize)}/>)}</div>
      <div className="rp-legend" aria-hidden="true"><span>Less</span>{[0, 1, 2, 3, 4].map(level => <span className="rp-day" key={level} data-level={level}/>)}<span>More</span></div>
    </div> : <p className="rp-activity-unavailable">GitHub activity is temporarily unavailable. You can view the latest contributions on my GitHub profile.</p>}
    <div className="rp-github-note"><p>Most of my work lives in private repositories, across my primary role and freelance projects.</p>{activity && <span>{range}<br/>Public GitHub activity · Refreshes hourly</span>}</div>
    <a className="rp-textlink" href={contact.github} target="_blank" rel="noopener noreferrer">View GitHub profile<Icon name="external"/></a>
  </section>;
}
