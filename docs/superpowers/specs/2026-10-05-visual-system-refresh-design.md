# Visual System Refresh Design

## Intent

Give Camp Haven a more distinctive, editorial outdoor identity while preserving the existing localized content, booking flow, responsive behavior, and forest/ivory palette. The change covers typography, gallery composition, the benefits section, and the homepage hero.

## Typography

Replace the current Inter/Manrope pairing with Be Vietnam Pro from `next/font/google`. It becomes the single project font for headings and body copy, keeping Vietnamese diacritics clear and reducing visual inconsistency between components.

The existing fluid root scale remains in place. Heading weights use 700–800; supporting text uses 400–500. Existing section title `clamp()` sizing remains the primary large-screen control.

## Gallery

Replace the fixed five-item mosaic with a six-image editorial collage. The new local campsite assets complete the previously empty lower-right area. Each tile receives an explicit grid span and object position so tents stay visible rather than being cropped at the focal point.

On mobile the collage reduces to two columns with fixed row heights; desktop uses four columns with balanced large and small tiles.

## Benefits

Keep the content and icon set, but set the benefits panel over a local campsite image. A warm ivory overlay protects legibility, while translucent white cards and thin borders preserve the current lightweight feel. The first benefit remains featured; the rest use a consistent responsive card grid.

## Hero

Replace the single banner image with a CSS collage containing three existing local campsite images: one dominant wide image and two supporting images. A forest-to-transparent overlay sits above the collage to retain contrast for hero text, navigation, and booking controls. The collage collapses to one dominant image on small screens for performance and clarity.

## Constraints

- Reuse existing local assets only; no new dependencies or external image URLs.
- Keep all user-facing copy and localization keys unchanged.
- Preserve `next/image` optimization and the current mobile booking behavior.
- Do not alter login removal, favicon behavior, or booking semantics.

## Verification

- Extend the existing static localization check to assert the new font, hero collage, gallery item count, and benefits background treatment.
- Run `node scripts/check-localization.mjs`, `npm run build`, and `git diff --check`.
