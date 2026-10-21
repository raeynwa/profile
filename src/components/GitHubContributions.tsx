import type {CSSProperties} from 'react';
import snapshot from '@/lib/contributions.json';
import {contact} from '@/lib/profile';
import {Icon} from './Icons';

function Calendar({startMonth, endMonth}: {startMonth: number; endMonth: number}) {
  const day = 86400000;
  const firstDay = Date.UTC(snapshot.year, 0, 1);
  const base = firstDay - new Date(firstDay).getUTCDay() * day;
  const start = Date.UTC(snapshot.year, startMonth, 1), end = Date.UTC(snapshot.year, endMonth, 1);
  const firstWeek = Math.floor((start - base) / (7 * day)), lastWeek = Math.floor((end - 1 - base) / (7 * day));
  return <div style={{'--rp-weeks': lastWeek - firstWeek + 1} as CSSProperties}>
    <div className="rp-months">{Array.from({length: endMonth - startMonth}, (_, index) => {
      const time = Date.UTC(snapshot.year, startMonth + index, 1);
      return <span key={index} style={{'--rp-col': Math.floor((time - base) / (7 * day)) - firstWeek + 1} as CSSProperties}>{new Intl.DateTimeFormat('en', {month: 'short', timeZone: 'UTC'}).format(time)}</span>;
    })}</div>
    <div className="rp-weeks">{Array.from({length: lastWeek - firstWeek + 1}, (_, index) => <div className="rp-week" key={index}>{Array.from({length: 7}, (_, weekday) => {
      const week = firstWeek + index, time = base + (week * 7 + weekday) * day;
      return <span key={weekday} className={`rp-day ${time < start || time >= end ? 'rp-outside' : ''}`} data-level={snapshot.levels[week][weekday]}/>;
    })}</div>)}</div>
  </div>;
}
export function GitHubContributions() {
  return <section className="rp-section" id="activity"><div className="rp-github-head"><div><p className="rp-eyebrow">03 / Activity</p><h2>On GitHub</h2></div><span className="rp-count">{snapshot.total} contributions / {snapshot.year}</span></div>
    <div className="rp-calendar" role="img" aria-label={`GitHub activity from the owner-supplied snapshot of 19 October 2026: ${snapshot.total} contributions in ${snapshot.year}. Red cells show recorded activity levels, not exact daily counts.`}>
      <div className="rp-year-calendar" aria-hidden="true"><Calendar startMonth={0} endMonth={12}/></div><div className="rp-quarter-calendars" aria-hidden="true">{[0, 3, 6, 9].map(month => <Calendar key={month} startMonth={month} endMonth={month + 3}/>)}</div>
      <div className="rp-legend" aria-hidden="true"><span>Less</span>{[0, 1, 2, 3, 4].map(level => <span className="rp-day" key={level} data-level={level}/>)}<span>More</span></div>
    </div>
    <div className="rp-github-note"><p>Most of my work lives in private repositories, across my primary role and freelance projects.</p><span>Snapshot · 19 Oct 2026</span></div>
    <a className="rp-textlink" href={contact.github} target="_blank" rel="noopener noreferrer">View GitHub profile<Icon name="external"/></a>
  </section>;
}
