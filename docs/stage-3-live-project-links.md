# Stage 3 — live project destinations

Completed locally on 21 October 2026 on `codex/profile-redesign`, following the owner's confirmation of the three public URLs.

## Destinations and presentation

| Case study | Destination | Access note |
| --- | --- | --- |
| Tando | https://tando.raeynwa.my.id | Public product overview; used privately, with no public registration. |
| labbkpi | https://labbkpi.id | Login page; an authorised account is required. |
| Al Ma’soem Parents Info | https://api.almasoem.com | Portal for parents of enrolled students; an authorised parent account is required. |
| Tim AI Hermes | No public destination | Local Docker system; no live button is rendered. |

`Visit live project` appears below each case study's role/technology/context facts, as a restrained red text link with an external-link icon. Links open in a new tab with `noopener noreferrer` and an accessible name announcing the new tab. The existing disabled `Demo in preparation` buttons remain on Tando and labbkpi; these links do not provide a public application demo.

## Verification

- Production build passed, including Next.js lint and TypeScript validation. All four case studies remain statically generated.
- Browser inspection confirmed the three rendered destination URLs, access notes, and disabled demo states. Hermes renders neither a live link nor a demo button.
- Clicking labbkpi's live link opened a separate browser tab at its login page; the portfolio remained open.
- All three public destinations were opened without signing in. Tando showed its product overview, labbkpi redirected to `/login?redirect=%2F`, and Parents Info showed a maintenance page at the time of this check. The Parents Info note describes account eligibility without promising a specific immediate page. No temporary maintenance claim is hardcoded into the portfolio.
- At a 320px viewport, the three affected case studies each measured 305px client width and 305px scroll width, with no horizontal overflow. Temporary viewport overrides were reset after checking.
- Final review tab had no captured browser warnings/errors. Screenshot: `output/portfolio-design/stage-3/labbkpi-live-link.png`.
- Local review server: `http://127.0.0.1:3187/work/labbkpi`. No production publication or changes to the linked applications were made.

The browser reached the live destinations even though the separate web-fetch tool could not retrieve them. This stage verifies the public entry pages and the portfolio links, not authenticated application behaviour.

Stage 4 (final release verification) remains pending the owner's visual review. Demo infrastructure remains a separate scope.
