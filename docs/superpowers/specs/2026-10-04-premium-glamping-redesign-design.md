# Premium Glamping Website Redesign

## Goal

Redesign the existing Camp Booking Next.js website into a modern, premium
glamping booking experience. Preserve all current routes, booking form
behaviour, login modal behaviour, local data flow, and existing dependencies.
This is a UI/UX redesign, not a product or backend rebuild.

## Scope

The homepage remains the primary marketing experience and composes the current
section modules. Existing route files remain available and retain their current
content responsibilities.

The redesigned homepage sequence is:

1. Hero with overlay navigation and a floating booking search form.
2. "Stay Your Way" accommodation categories.
3. "More Than a Stay" activity editorial split layout.
4. Featured stay cards.
5. Benefit/value grid.
6. Testimonials.
7. Journal.
8. Editorial gallery.
9. Scenic conversion CTA.
10. Premium footer.

## Design System

### Visual language

- Premium, warm, natural, minimal, adventure-led hospitality brand.
- Photography is the visual anchor; use appropriately licensed Unsplash image
  URLs through `next/image` alongside existing project images where useful.
- Avoid generic Bootstrap cards, heavy shadows, excessive borders, green
  headings, large all-caps display copy, and placeholder/Lorem Ipsum copy.

### Tokens

| Token | Value |
| --- | --- |
| Forest / primary | `#1F5D42` |
| Forest hover | `#174A34` |
| Sage / accent | `#7A9B76` |
| Warm ivory / page background | `#F7F5EE` |
| Surface | `#FFFFFF` |
| Secondary surface | `#EEF1E9` |
| Primary text | `#17201B` |
| Secondary text | `#5F6862` |
| Muted text | `#858D87` |
| Border | `#E2E6E1` |
| Warm highlight | `#D99A5B` |
| Dark section | `#12251C` |
| Success | `#2F855A` |

Typography uses `Manrope` for headings and `Inter` for body/UI. Typography
uses `clamp()` at large breakpoints, with mobile-specific sizes instead of
simply scaling desktop text down. Containers are 1280px maximum with 32px,
24px, and 16px horizontal padding for desktop, tablet, and mobile.

Spacing uses the 4/8/12/16/24/32/48/64/96 scale. Buttons and fields use
10–12px radii, cards 16–20px, and prominent imagery 20–24px.

## Components and Behaviour

### Shared UI

- Global CSS variables and Tailwind theme mappings provide semantic colors,
  font families, layout tokens, motion, focus states, and reusable `section`
  utilities.
- Existing Button/Input/Select/Popover/Calendar primitives stay in use, with
  visual styling aligned to the new system.
- Reusable visual helpers may be introduced only for repeated presentational
  patterns such as eyebrow labels, card metadata rows, primary/secondary CTAs,
  and section containers.

### Navigation and hero

- Navigation is transparent over the hero at page top. On scroll it becomes a
  sticky, translucent ivory surface with backdrop blur, dark text, a subtle
  bottom border, and compact logo treatment.
- Desktop links use an understated active underline. Mobile navigation is a
  full-screen dark drawer with accessible menu state and a visible booking CTA.
- Hero is 80–90vh on large screens, using a full-bleed camping image and a
  left/bottom cinematic gradient. It contains the approved headline, succinct
  copy, and Explore/Watch experience actions.
- The existing watch modal remains available but receives visual/accessibility
  improvements. Video is not replaced with a new service or API.

### Booking form

- Existing local check-in/check-out states, calendar popovers, selects, and
  search button are retained.
- The form becomes a floating white booking panel that overlaps the hero:
  horizontal on desktop, two columns at tablet, and vertically stacked on
  mobile. All controls retain a 44px-or-larger touch target.

### Content sections

- Accommodation categories use four image-led cards: Tent Camping, RV &
  Caravan, Glamping, and Cabins. Existing capacity counts become supporting
  information.
- Activities use a photo-first editorial split and six concise icon-led
  activities. Hover/focus feedback is subtle and limited to 150–250ms.
- Featured stays retain the current local accommodation data mechanism while
  presenting cards with badge, rating, location, capacity, bed type, amenity,
  price, and CTA.
- New value, social-proof, and scenic CTA sections are static presentation
  content; they add no API or booking flow changes.
- Journal adopts editorial cards with meaningful titles, category/date, image,
  excerpt and arrow link. Gallery becomes an asymmetric image composition on
  larger screens and a touch-friendly horizontal treatment on mobile.
- Footer becomes a dark four-column layout with brand, navigation, information,
  social links, and newsletter presentation. Newsletter remains non-networked
  unless an existing handler is present.

## Responsive and Interaction Rules

- Use CSS grid and fluid containers rather than hardcoded absolute layouts.
- Desktop cards use available three/four-column layouts; tablet collapses to
  two columns; mobile uses one column or intentional horizontal scrolling for
  image-forward collections.
- Use semantic HTML, keyboard-operable controls, visible focus treatment,
  descriptive image alt text, and `prefers-reduced-motion` support.
- Do not add a new animation library; retain only lightweight existing reveal
  behaviour where it helps, and avoid per-item dynamic Tailwind classes that
  cannot be generated reliably.

## Performance and Lighthouse

- Configure permitted remote image hosts and use `next/image` for all visual
  content. Give image boxes fixed aspect ratios and responsive `sizes` values
  to prevent layout shift.
- Priority-load only the hero/LCP image; defer below-the-fold images.
- Use `next/font` for Manrope and Inter; avoid render-blocking third-party font
  requests and eliminate unneeded client-side work.
- Build and run the production app before measurement. Measure Lighthouse on
  both mobile and desktop, then address actionable Performance, Accessibility,
  Best Practices, and SEO findings without changing business logic.
- The target is a demonstrably improved report and no clear avoidable issue;
  exact scores are not guaranteed because remote imagery and runtime network
  conditions affect the audit.

## Validation

1. Run TypeScript/Next lint or the closest project-supported static check.
2. Run a production build.
3. Manually inspect the main page and the existing route surfaces at mobile,
   tablet, and desktop widths.
4. Verify booking date selection, guest/accommodation selects, login modal,
   mobile navigation, and anchor navigation still operate.
5. Run Lighthouse mobile and desktop audits against the production server and
   remediate relevant findings.

## Out of Scope

- New backend/API services, authentication implementation, payments, inventory
  availability, a checkout flow, CMS, analytics, or new product routes.
- Changes to booking or login business logic.
