# Da Lat Localization QA

Date: 2026-10-05

## Verified

- `node scripts/check-localization.mjs` passes: each homepage section uses the shared locale dictionary and booking defaults are localized.
- `npm run build` passes on the production build.
- Production homepage renders Vietnamese by default (`lang="vi"`), and the language control switches the header and hero copy to English while retaining the existing booking defaults.
- The responsive hero now uses prioritized `next/image` output instead of the 2.4 MB CSS background PNG.

## Lighthouse

Lighthouse 13.5.0 was run with `npx` against `next start` on port 3002; it was not added to project dependencies.

| Profile | Performance | Accessibility | Best practices | SEO | LCP | CLS |
| --- | ---: | ---: | ---: | ---: | --- | --- |
| Mobile, before hero remediation | 75 | 100 | 96 | 100 | 16.9s | 0.01 |
| Mobile, after hero remediation | 87 | 100 | 100 | 100 | 4.0s | 0.01 |
| Desktop, after hero remediation | 99 | 95 | 100 | 100 | 0.9s | 0 |
| 320px mobile emulation | 97 | 100 | — | — | 2.6s | 0 |

The remaining manual keyboard smoke check is still required before merging.
