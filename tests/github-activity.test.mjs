import assert from 'node:assert/strict';
import test from 'node:test';
import {getGitHubActivity, parseGitHubActivity} from '../src/lib/github-activity.ts';

function calendarFixture() {
  const cells = [], tooltips = [];
  for (let index = 0; index < 366; index++) {
    const date = new Date(Date.UTC(2023, 9, 21) + index * 86_400_000).toISOString().slice(0, 10);
    const count = index === 0 ? 1234 : index === 365 ? 1 : 0;
    cells.unshift(`<td data-level='${count > 1 ? 4 : count}' id='day-${index}' data-date='${date}'></td>`);
    tooltips.push(`<tool-tip for='day-${index}'>${count === 0 ? 'No' : count.toLocaleString('en')} ${count === 1 ? 'contribution' : 'contributions'} on a date.</tool-tip>`);
  }
  return `<h2 id="js-contribution-activity-description">1,235\n contributions\n in the last year</h2>${cells.join('')}${tooltips.join('')}`;
}

test('reads exact counts, preserves source intensity, and sorts dates across a leap year', () => {
  const activity = parseGitHubActivity(calendarFixture());
  assert.equal(activity.total, 1235);
  assert.equal(activity.days.length, 366);
  assert.deepEqual(activity.days[0], {date: '2023-10-21', count: 1234, level: 4});
  assert.deepEqual(activity.days.at(-1), {date: '2024-10-20', count: 1, level: 1});
  assert.equal(activity.days.find(day => day.date === '2024-02-29').count, 0);
});

test('rejects changed markup, missing tooltips, invalid levels, and inconsistent totals', () => {
  const html = calendarFixture();
  for (const invalid of [
    '<html>Sign in or try again later</html>',
    html.replace('1,235\n', '1,236\n'),
    html.replace(/<tool-tip for='day-0'>[\s\S]*?<\/tool-tip>/, ''),
    html.replace("data-level='4'", "data-level='9'"),
    html.replace("data-date='2024-02-29'", "data-date='2024-02-30'"),
    html.replace("data-date='2024-02-29'", "data-date='2024-02-28'"),
  ]) assert.throws(() => parseGitHubActivity(invalid));
});

test('fetches only the public calendar with an hourly cache and no credentials', async () => {
  const originalFetch = globalThis.fetch;
  try {
    globalThis.fetch = async (url, options) => {
      assert.equal(url, 'https://github.com/users/raeynwa/contributions');
      assert.equal(options.next.revalidate, 3600);
      assert.equal(options.headers.Authorization, undefined);
      return new Response(calendarFixture(), {status: 200});
    };
    assert.equal((await getGitHubActivity()).total, 1235);
  } finally {globalThis.fetch = originalFetch;}
});

test('fails gracefully on network errors, rate limiting, and invalid responses', async () => {
  const originalFetch = globalThis.fetch;
  try {
    for (const response of [
      async () => {throw new Error('Network unavailable');},
      async () => new Response('', {status: 429}),
      async () => new Response('<html>Unexpected GitHub response</html>'),
    ]) {
      globalThis.fetch = response;
      assert.equal(await getGitHubActivity(), null);
    }
  } finally {globalThis.fetch = originalFetch;}
});
