# Raey — personal portfolio

An English professional showcase built with Next.js App Router, React, and TypeScript. The approved Technical / Racing Red design uses a black background, original application screenshots, detailed case studies, and a quiet invitation to collaborate.

## Development

```powershell
npm ci
npm run dev
```

The default development URL is `http://localhost:1000`. To build and preview independently from a running development server:

```powershell
$env:PORTFOLIO_BUILD_DIR = '.next-review'
npm run build
npm run start -- --hostname 127.0.0.1 --port 3187
```

Keep the same `PORTFOLIO_BUILD_DIR` value for build and start. Ordinary builds use `.next` when the variable is absent.

## Pages and content

- `/`: introduction, four selected projects, professional background, GitHub contributions, contact, and CV download.
- `/work/tando`, `/work/labbkpi`, `/work/parents`, `/work/hermes`: statically generated case studies with keyboard-accessible image galleries and native screenshot dialogs.
- `/api/download`: retains the original download endpoint and redirects to the supplied 2026 CV. The PDF response includes an attachment filename.
- `src/lib/profile.ts`: identity, contact details, Tando narrative, project types, and project ordering.
- `src/lib/case-studies.json`: approved content for labbkpi, Parents Info, and Tim AI Hermes.
- `src/lib/github-activity.ts`: public GitHub rolling-year calendar, validated daily counts/intensity, and hourly server caching. `src/lib/contributions.json` is a historical snapshot and is no longer rendered.
- `src/lib/site.ts`: confirmed portfolio origin `https://raeynwa.my.id`, shared social metadata, and image reference.
- `/robots.txt`, `/sitemap.xml`, `/opengraph-image`: crawl configuration, public content URLs, and the original black/red social preview.
- `public/projects/showcase/`: 22 WebP derivatives of original application captures. Tando, labbkpi, and Parents Info show fictional data; Hermes shows permitted real local data.
- `src/app/fonts/`: self-hosted Google Fonts, OFL licenses, and source provenance. Builds and visitors do not need Google font servers.

The latest supplied CV is `public/cv/CV_Raey_Maulana_Yunus_2026.pdf`. The original PDF remains unchanged in `output/pdf/`.

## Review stages

Stages 1–4 are complete locally on `codex/profile-redesign`, verified on 21 October 2026: detailed case-study design, application implementation, confirmed live project links, and final local release review. Public demo environments are a separate project scope; Tando and labbkpi currently show **Demo in preparation**. The portfolio has not been deployed by this work.

See `docs/stage-4-release-review.md` for the final results, deployment handoff, and limitations. Production dependency audit reports zero findings; the full audit retains five entries in one development-only lint dependency chain with no patched braces release identified. Earlier stage reports and content decisions remain in `docs/`. No impact metrics, freelance contact URLs, or public repository claims have been invented.

The GitHub section now uses **contributions in the last 12 months**, matching GitHub's public rolling-year calendar. It includes anonymised private activity when the owner has enabled that setting on GitHub. Data revalidates on demand after one hour; no token or repository access is required. See `docs/github-activity.md`. Run `npm run test:github` on Node.js 22 for parser and failure-handling checks.
