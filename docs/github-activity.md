# GitHub activity — rolling 12 months

The owner requested a rolling 12-month view on 21 October 2026 after enabling anonymised private contributions on the public GitHub profile. This supersedes the static 708-contribution calendar-year snapshot. The historical JSON remains as an archive and is not used as a fallback.

## Data and privacy

The server fetches `https://github.com/users/raeynwa/contributions`, the calendar fragment used by the public GitHub profile. Only its rolling-year total, per-day dates/counts, and GitHub intensity levels are retained. No token, signed-in session, repository metadata, client financial documents, or private source code is accessed. Returned HTML is never embedded into the portfolio.

The observed public response contains **998 contributions across 368 dated cells, 19 October 2025–21 October 2026**. The window follows GitHub's displayed rolling-year graph, including its week alignment, rather than imposing a separate 365-cell calculation. The UI reads “contributions in the last 12 months” and shows the exact source date range. Every count and colour level comes from GitHub, with the established red palette applied to those levels. Mobile displays the same dates in four consecutive week groups.

GitHub documents that publicised private contributions expose daily counts without repository details: [profile contributions reference](https://docs.github.com/en/account-and-profile/reference/profile-contributions-reference).

## Refresh and failures

`fetch` and the homepage use a 3,600-second revalidation interval. Next.js refreshes on demand after the cache expires; this is not a background cron and does not promise instantaneous parity with every GitHub update. See [Next.js fetch caching](https://nextjs.org/docs/app/api-reference/functions/fetch). The upstream calendar itself can also lag GitHub activity.

The source is GitHub's public HTML fragment, not a versioned API contract. The parser validates the heading, exact sum of daily counts, date validity/continuity, full-year coverage, and levels 0–4. Network failures, HTTP errors, missing/changed markup, and inconsistent totals return an explicit unavailable state with the GitHub profile link. There is no fallback to fabricated cells or the old snapshot. Requests have an eight-second timeout.

## Verification

- `npm run test:github`: exact counts with comma formatting, attribute order and row order, leap day, inconsistent totals, missing daily tooltips, invalid dates/levels, duplicate dates, network errors, rate limiting, and unexpected responses.
- The parser was also run against a real public response captured locally: all 368 counts sum to the reported 998.
- No dependency was added. Test execution uses Node.js 22's TypeScript stripping; application compilation remains managed by Next.js.
- Build and responsive/integration evidence are stored locally under `output/github-activity/`.
- Final production build passed with Next.js lint/type checks, no new client JavaScript, and a verified 3,600-second homepage revalidation interval in the prerender manifest.
- All 368 rendered dates, counts, and intensity levels were compared against the captured public response and matched exactly. Browser checks at 320, 375, 768, and 1280 px showed the rolling total and no horizontal overflow.
