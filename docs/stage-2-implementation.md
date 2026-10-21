# Stage 2 — implementation and review

Completed 21 October 2026 on `codex/profile-redesign`. This is the local implementation of the approved Technical / Racing Red design. Live project URL buttons remain stage 3; the release review remains stage 4.

## Implemented

- Server-rendered homepage: introduction, selected work, professional background, GitHub activity, and contact.
- Four statically generated case-study routes: `/work/tando`, `/work/labbkpi`, `/work/parents`, and `/work/hermes`.
- Original application screenshots, caption/data disclosures, accessible gallery tabs, screenshot dialogs, and next-project navigation.
- Tando includes issuance, QR result, desktop/mobile verification, expired, and revoked views. Docker appears in its technology list.
- Email, WhatsApp, LinkedIn, and GitHub destinations match the confirmed contact details. Upwork/Fiverr are absent.
- GitHub uses the supplied snapshot of 708 contributions in 2026. It makes no claim about exact daily totals or public/open-source repositories.
- The supplied 2026 CV replaces the old PDF in the active download flow. `/api/download` redirects to the current PDF with an attachment filename.
- Space Grotesk, DM Sans, and IBM Plex Mono are self-hosted with OFL licenses and provenance in `src/app/fonts/`.
- Responsive black/red styles, mobile navigation, reduced-motion handling, skip navigation, and a matching icon.

## Verification

- Final production build passed on 21 October, including Next.js lint and TypeScript checks. Home and four case studies are prerendered; reported first-load JavaScript is 131 kB.
- Review build uses `.next-review`, separate from the development build directory. Verified review URL: `http://127.0.0.1:3187/`. The user's development server on port 1000 was not stopped.
- Home and all four case-study routes returned 200; an unknown project route returned 404 in the initial integration check.
- All 12 gallery tabs in labbkpi, Parents Info, and Hermes were exercised. Tando keyboard switching, QR result, screenshot opening, Escape/Close, scroll lock, and focus return were checked.
- Final social PNG assets loaded successfully in the browser. A source/extension mismatch from the first preview was corrected before the final build.
- Final mobile checks at a 320px browser width measured 305px document client width and 305px scroll width on the homepage and all four case studies: no horizontal overflow. Mobile menu open/close and Escape were checked.
- The actual browser CV download completed to the Downloads folder. The file is 79,971 bytes and its SHA-256 matches the supplied PDF exactly.
- The PDF response was 200 with `application/pdf` and `attachment; filename="CV_Raey_Maulana_Yunus_2026.pdf"`.
- The final browser tab returned no error/warning logs. `git diff --check` passed, with Windows LF/CRLF notices only.
- Final review screenshots are in `output/portfolio-design/stage-2/`.

## Build issues resolved

The restricted process environment initially prevented Turbopack's CSS worker from running. The build was run with the appropriate process permission. Google font binary requests also failed, so the same fonts were downloaded from the official Google Fonts repository and losslessly compressed to local WOFF2 files. Type checking excludes `output/` and `tmp/`, which hold separate screenshot-capture workspaces rather than portfolio application sources.

The final rebuild was delayed when automatic approval review could not run because the account usage limit had been reached. It was completed and verified on 21 October; no blocked action was bypassed.

## Scope remaining

This is ready for the owner's visual review of stage 2. It does not publish the site, provide public application demos, confirm live project destinations, or complete the final release/security audit. Earlier dependency audit findings recorded in `docs/verification.md` have not been declared resolved by this visual implementation.
