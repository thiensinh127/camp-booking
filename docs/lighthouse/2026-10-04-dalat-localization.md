# Da Lat Localization QA

Date: 2026-10-05

## Verified

- `node scripts/check-localization.mjs` passes: each homepage section uses the shared locale dictionary and booking defaults are localized.
- `npm run build` passes on the production build.
- Production homepage renders Vietnamese by default (`lang="vi"`), and the language control switches the header and hero copy to English while retaining the existing booking defaults.

## Lighthouse

Lighthouse is not installed in this repository. It was intentionally not added only for a one-off audit; run an external Lighthouse/CI audit before merging if performance scores are required.
