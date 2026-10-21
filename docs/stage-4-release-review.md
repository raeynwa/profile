# Stage 4 — final local release review

Completed on 21 October 2026 on `codex/profile-redesign`. The owner approved stage 3 and confirmed `https://raeynwa.my.id` as the public portfolio origin. This review prepares the local application for deployment; it does not deploy or replace the currently published site.

## Changes from the review

- Added a fixed, owner-confirmed origin in `src/lib/site.ts`, with a canonical URL for the homepage and each case study. Canonicals do not depend on request headers.
- Added `/sitemap.xml` for the five public content routes and `/robots.txt` referencing that sitemap. The download API is excluded from crawling. Unknown pages return 404 with `noindex` metadata.
- Added an original 1200 × 630 black/red Open Graph image at `/opengraph-image`, generated at build time. Open Graph and Twitter metadata carry the correct title, description, image, and public URL on every content route. An integration check caught missing image inheritance on case studies; explicit shared image metadata fixed it.
- Made each main content region focusable for the existing keyboard skip link.
- Added `nosniff`, `strict-origin-when-cross-origin`, and `DENY` frame headers; disabled the framework identification header. These are baseline response settings, not a substitute for a security assessment.
- Applied a targeted compatible override from Next.js's PostCSS 8.4.31 to 8.5.31 and a compatible audit fix updating brace-expansion 1.1.12 to 1.1.21. Next.js and eslint-config-next remain at 15.5.28. No forced major upgrade or downgrade was applied.
- Ignored the temporary `tmp/` directory. Source captures and review reports remain local artifacts under `output/`; they are not application routes or public assets.

## Verified result

| Area | Result |
| --- | --- |
| Final production build | Passed, including Next.js lint and TypeScript validation; five content routes remain prerendered; first-load JS 131 kB. |
| Main and case-study routes | All five return 200. One H1 and one main region on each; English document language. |
| Missing routes | Unknown top-level and case-study paths return 404 with noindex. |
| Internal links and anchors | All emitted content destinations and fragment targets resolve to the intended routes/sections. |
| Assets | All 37 distinct image, script, stylesheet, and icon URLs found in the generated pages returned 200. |
| Metadata | Correct production canonical, Open Graph URL/title/image, and Twitter large-image card on all five routes. Sitemap contains exactly those routes. |
| Share image | PNG response, 1200 × 630; rendered and visually inspected. |
| CV | Download endpoint resolves to the latest PDF with attachment headers; 79,971 bytes; SHA-256 `336967b1791b55138be5d90fe2f891430bba26de825e64ba3b645cdfa9ecf8e3` matches the original supplied PDF. |
| Live project destinations | Three confirmed URLs, new-tab protections, access notes, and disabled demo states are preserved. Hermes has no public live link. |
| Responsive layout | 25 browser checks: homepage and four case studies at actual widths 320, 375, 768, 1024, and 1440 CSS px. No horizontal document overflow. |
| Gallery | All 15 tabs exercised; correct visible/selected panel; Home key selects and focuses the first tab in each project. |
| Screenshot dialog | Opens with an accessible label, focus inside, and background scroll locked. Escape closes it, restores scroll, and returns focus to the opener. |
| Keyboard/mobile navigation | Skip link focuses main content; menu opens/closes with Escape; Work navigation reaches `#selected-work` and closes the menu. |
| Browser logs | No captured error or warning logs in the final review tab. |
| Diff whitespace | `git diff --check` passed; only Windows LF/CRLF notices. |

Evidence lives in `output/portfolio-design/stage-4/`: `http-verification.json`, `responsive-verification.json`, `interaction-verification.json`, the two audit JSON reports, desktop/mobile screenshots, and `social-preview.png`. The integration script `verify-release.py` performs read-only requests against the local production preview and compares the downloaded CV to its supplied source. Temporary viewport overrides were reset.

## Dependency audit and remaining limitation

`npm audit --omit=dev` reports **0 vulnerabilities** after the patches. This is an audit result at the time of checking, not a guarantee against undiscovered vulnerabilities.

The full audit reports **5 high-severity package entries** from one unresolved development-tool chain:

`eslint-config-next → @next/eslint-plugin-next → fast-glob → micromatch → braces@3.0.3`

The upstream issue concerns stack exhaustion from deeply nested brace patterns. The registry's current braces release is still 3.0.3, with no patched release identified. npm proposes downgrading eslint-config-next to 14.2.35 through `--force`; that breaking change was not applied. This chain is used by lint tooling and is absent from the production-only audit. Keep build/lint inputs trusted, monitor the upstream patch, and re-audit before the actual deployment. The full audit is deliberately not described as clean.

References: [braces advisory](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm), [PostCSS advisory](https://github.com/advisories/GHSA-fxqj-rqcc-2cmp), [Next.js metadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata), [Next.js robots conventions](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots).

## Handoff

The local review remains available at `http://127.0.0.1:3187/`. The user's port 1000 development server was not stopped. Work remains on `codex/profile-redesign`; no commit, push, merge, or production deployment was performed.

For deployment, install the committed lockfile with `npm ci`, run `npm run build`, and serve with `npm run start` in the chosen hosting environment. Use the same `PORTFOLIO_BUILD_DIR` for build and start if overriding it; ordinary production builds use `.next`. Configure the hosting platform/reverse proxy for the confirmed HTTPS domain, then verify the public routes, canonical URLs, share image, headers, and CV on that deployment. The local `127.0.0.1` review binding is not a hosting configuration.

Public demo environments remain a separate project scope. This review did not test physical devices, other browser engines, a screen reader, authenticated client applications, delivered email/WhatsApp messages, search indexing, or real social-platform caches. It does not claim WCAG certification, a penetration test, a Lighthouse score, or measured conversion improvements.
