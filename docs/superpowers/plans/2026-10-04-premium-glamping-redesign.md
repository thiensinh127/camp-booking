# Premium Glamping Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deliver a premium, responsive glamping UI across the existing Camp Booking experience without changing booking or login business logic.

**Architecture:** Replace scattered section-specific styling with a small shared presentation layer and global semantic tokens. Preserve current route files and interactive primitives; the homepage remains a composed sequence of the redesigned sections while each existing section route remains importable.

**Tech Stack:** Next.js 15, React 18, TypeScript, Tailwind CSS, `next/image`, `next/font`, Radix UI primitives, Lucide icons.

**Spec:** `docs/superpowers/specs/2026-10-04-premium-glamping-redesign-design.md`

## Global Constraints

- Preserve current routes, booking state/date picker/select behaviour, login modal behaviour, and existing local data flow.
- Use the semantic palette and Manrope + Inter typography specified in the spec.
- Use licensed Unsplash image URLs through `next/image`; priority-load only the hero image.
- Keep touch targets at least 44px, use semantic HTML, visible focus states, descriptive alt text, and respect `prefers-reduced-motion`.
- Do not add backend/API, checkout, CMS, authentication, analytics, or a new animation library.
- Verify production build, key interactions, responsive surfaces, and mobile/desktop Lighthouse findings.

## Review Focus

- Long translated navigation labels must neither overflow the desktop bar nor break the mobile drawer.
- A narrow 320px viewport must keep the booking form controls usable and avoid horizontal page overflow.
- Calendar popovers and select menus must remain operable above the floating form and sticky header.
- Remote images must render without Next Image host errors and must reserve layout space before loading.
- Reduced-motion users must not receive entrance/hover movement that prevents comfortable use.

---

## File Structure

- `app/layout.tsx`: loads new font families and updates page metadata.
- `app/globals.css`: global semantic CSS variables, typography, layout helpers, and motion/focus rules.
- `tailwind.config.ts`: semantic Tailwind color/font/radius mappings.
- `next.config.ts`: remote image allowlist.
- `components/site/*`: new small presentational units shared by homepage sections.
- `components/header/*`: responsive sticky navigation and hero content.
- `components/booking-form/BookingForm.tsx`: restyled, responsive existing booking controls.
- `app/about/*`, `app/activity/page.tsx`, `app/booking/*`, `app/news/*`, `app/gallery/page.tsx`: redesigned content sections retaining their exports.
- `components/footer/Footer.tsx`: redesigned footer and final conversion CTA.
- `app/page.tsx`: compositional spacing and source-order adjustments only.

### Task 1: Establish the visual system and image configuration

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`
- Modify: `tailwind.config.ts`
- Modify: `next.config.ts`

**Interfaces:**
- Produces: global Tailwind utilities and CSS custom properties consumed by all later components.

- [ ] **Step 1: Add a minimal static verification checklist for global UI constraints**

Record checks for the exact forest/ivory tokens, `Manrope`/`Inter` font variables, reduced-motion override, visible focus styling, and an Unsplash remote-image configuration.

- [ ] **Step 2: Run the checks to confirm the legacy files do not yet satisfy them**

Run: `npm run build`
Expected: the build may pass, but the static review identifies missing typography, semantic token, and remote image configuration requirements.

- [ ] **Step 3: Implement theme and image configuration**

Load Manrope and Inter via `next/font`, replace legacy color variables with the exact semantic palette, add container/section/motion helpers, map Tailwind semantic colors/fonts/radii, and allow only the selected Unsplash hostname in Next image config.

- [ ] **Step 4: Run the production build**

Run: `npm run build`
Expected: PASS with the font and image configuration accepted.

- [ ] **Step 5: Commit the visual foundation**

```bash
git add app/layout.tsx app/globals.css tailwind.config.ts next.config.ts
git commit -m "feat: add premium visual foundation"
```

### Task 2: Rebuild hero, navigation, and booking search presentation

**Files:**
- Modify: `components/header/Navigation.tsx`
- Modify: `components/header/NavigationContent.tsx`
- Modify: `components/OverLay.tsx`
- Modify: `components/booking-form/BookingForm.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: the visual utilities from Task 1 and existing `BookingForm`, `LoginModal`, Radix calendar/select interfaces.
- Produces: a responsive hero/search region used directly by `app/page.tsx`.

- [ ] **Step 1: Add interaction checks for existing header and booking controls**

Cover menu open/close, anchor navigation, scroll-state styling, date selection, guest/stay select availability, and the 320px stacked form layout in a manual smoke checklist or the project’s available test harness.

- [ ] **Step 2: Run the checks against the current UI**

Run: `npm run build` and inspect the existing home screen at 320px and 1280px.
Expected: legacy layout does not meet sticky translucent header, semantic hero, or responsive widget criteria.

- [ ] **Step 3: Implement the hero/search visual redesign without altering state handling**

Keep the current form state and component primitives. Replace fixed percentages/legacy overlay with a full-bleed hero, responsive content frame, cinematic gradient, sticky scroll transition, accessible mobile drawer, and a horizontal/two-column/stacked booking widget.

- [ ] **Step 4: Verify interaction and responsive smoke checks**

Run: `npm run build`; manually verify nav, modal, selects and calendar in desktop/mobile.
Expected: PASS and all existing interactions remain reachable.

- [ ] **Step 5: Commit hero and booking UI**

```bash
git add app/page.tsx components/header components/OverLay.tsx components/booking-form/BookingForm.tsx
git commit -m "feat: redesign hero navigation and booking search"
```

### Task 3: Build reusable content presentation primitives

**Files:**
- Create: `components/site/SectionHeading.tsx`
- Create: `components/site/FeatureMeta.tsx`
- Create: `components/site/Reveal.tsx`

**Interfaces:**
- Consumes: semantic token classes from Task 1.
- Produces: `SectionHeading`, `FeatureMeta`, and `Reveal` props consumed by Tasks 4–6.

- [ ] **Step 1: Define component-rendering checks**

Check that `SectionHeading` renders an optional eyebrow, heading, and supporting text; `FeatureMeta` renders icon/text accessibly; and `Reveal` disables movement under reduced motion.

- [ ] **Step 2: Run the checks before implementation**

Run the project’s applicable UI/static test command, or inspect a temporary component render route if no test runner exists.
Expected: FAIL because these components do not exist.

- [ ] **Step 3: Implement focused reusable presentational components**

Use typed props with semantic elements; do not put section-specific data or business state into shared files.

- [ ] **Step 4: Verify component checks and production build**

Run: `npm run build`
Expected: PASS.

- [ ] **Step 5: Commit shared presentation primitives**

```bash
git add components/site
git commit -m "feat: add shared glamping section primitives"
```

### Task 4: Redesign accommodation, activities, and featured stays

**Files:**
- Modify: `app/about/page.tsx`
- Modify: `app/about/Accommodation.tsx`
- Modify: `app/about/Feature.tsx`
- Modify: `app/activity/page.tsx`
- Modify: `app/booking/page.tsx`
- Modify: `app/booking/BookingCard.tsx`

**Interfaces:**
- Consumes: Task 3 presentation components and current local arrays.
- Produces: redesigned category, activity, and accommodation section exports for the homepage and existing imports.

- [ ] **Step 1: Add data/rendering checks for the three content sections**

Check four accommodation categories, six activities, and featured stay cards with image, capacity, rating, metadata, price and CTA; confirm card imagery retains a fixed aspect ratio.

- [ ] **Step 2: Run checks before implementation**

Run the applicable UI/static check and inspect current sections.
Expected: FAIL against the new content/metadata and layout expectations.

- [ ] **Step 3: Implement image-led premium content sections**

Replace placeholder copy/data and repeated screenshot imagery with meaningful outdoor content and approved remote photography. Keep local component exports and card data flow stable; build editorial grid/card layouts with responsive collapse rules.

- [ ] **Step 4: Verify all content sections at mobile/tablet/desktop widths**

Run: `npm run build`; inspect 320px, 768px, and 1280px widths.
Expected: PASS with no clipped card metadata or horizontal page overflow.

- [ ] **Step 5: Commit stay and activity sections**

```bash
git add app/about app/activity app/booking
git commit -m "feat: redesign stays and activity sections"
```

### Task 5: Redesign proof, journal, gallery, final CTA, and footer

**Files:**
- Create: `components/site/Benefits.tsx`
- Create: `components/site/Testimonials.tsx`
- Create: `components/site/FinalCta.tsx`
- Modify: `app/news/page.tsx`
- Modify: `app/news/CardArticle.tsx`
- Modify: `app/gallery/page.tsx`
- Modify: `components/footer/Footer.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: Task 3 presentation primitives.
- Produces: homepage sections added by `app/page.tsx`; keeps `News`, `Gallery`, and `Footer` defaults compatible with existing imports.

- [ ] **Step 1: Add section composition checks**

Check benefit grid content, three testimonial cards, image-backed final CTA, journal metadata, unique gallery images, and footer navigation/newsletter controls.

- [ ] **Step 2: Run checks before implementation**

Run the applicable UI/static check and inspect homepage source order.
Expected: FAIL because the proof and CTA sections are absent and current journal/gallery/footer layouts do not meet the specification.

- [ ] **Step 3: Implement remaining homepage storytelling sections**

Create static presentational benefits/testimonials/final CTA components, insert them in the documented homepage order, replace journal/gallery visual treatment, and build a dark four-column responsive footer. Do not attach network effects to newsletter submit.

- [ ] **Step 4: Verify homepage structure and footer mobile behavior**

Run: `npm run build`; manually inspect anchor order, gallery touch treatment, footer at 320px, and keyboard focus movement.
Expected: PASS.

- [ ] **Step 5: Commit conversion and content finish**

```bash
git add app/page.tsx app/news app/gallery components/site components/footer/Footer.tsx
git commit -m "feat: complete premium homepage content"
```

### Task 6: Production QA and Lighthouse remediation

**Files:**
- Modify: only files identified by audit findings from Tasks 1–5.
- Create: `docs/lighthouse/2026-10-04-premium-glamping.md`

**Interfaces:**
- Consumes: the complete rendered application from Tasks 1–5.
- Produces: recorded mobile/desktop Lighthouse results and narrowly scoped fixes.

- [ ] **Step 1: Build and start the production app**

Run: `npm run build && npm run start`
Expected: production server starts without Next/Image runtime errors.

- [ ] **Step 2: Capture baseline final Lighthouse reports**

Run Lighthouse against the production homepage for mobile and desktop, saving category scores and actionable diagnostics.
Expected: both reports complete; note LCP, CLS, accessibility, best-practice, and SEO findings.

- [ ] **Step 3: Apply only evidence-backed remediation**

Address identified image dimensions/priorities, unused client work, contrast, labeling, heading order, link naming, or similar actionable issues without altering the app’s business logic.

- [ ] **Step 4: Rebuild and rerun Lighthouse**

Run: `npm run build`, then repeat the mobile and desktop audit.
Expected: no new regression; documented results show the implemented improvements.

- [ ] **Step 5: Record QA results and commit**

```bash
git add docs/lighthouse app components
git commit -m "perf: verify premium glamping experience"
```
