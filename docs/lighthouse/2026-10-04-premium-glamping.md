# Premium Glamping Lighthouse QA

Audited against the production server at `http://localhost:3000` after the
initial UI redesign build.

| Profile | Performance | Accessibility | Best practices | SEO | LCP | CLS |
| --- | ---: | ---: | ---: | ---: | --- | --- |
| Mobile | 75 | 91 | 100 | 100 | 15.2s | 0 |
| Desktop | 86 | 91 | 100 | 100 | 2.7s | 0 |

## Remediation

- Lighthouse identified low-contrast booking field labels and journal dates on
  white (`#858D87`, 3.41:1). The global muted token now uses `#6B736E`, and
  booking labels use the stronger secondary text token.
- Images use `next/image`, declared aspect ratios and responsive `sizes`; only
  the local hero logo/image treatment is priority loaded.
- The audit also reports 59 KiB of unused JavaScript, primarily from existing
  Radix date-picker/select dependencies required by the preserved booking
  controls. No dependency was removed because that would change the existing
  booking experience.

## Follow-up measurement note

A repeat mobile Lighthouse invocation was attempted after the contrast fix.
The installed Chrome began presenting a local-page interstitial even though
`curl http://localhost:3000` returned `200`; Lighthouse therefore did not emit
a comparable follow-up JSON report. Production build and the contrast guard
both pass. Re-run the mobile audit in a clean Chrome profile/CI environment to
capture the post-fix score.
