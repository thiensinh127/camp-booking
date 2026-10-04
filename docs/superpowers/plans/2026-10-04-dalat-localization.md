# Da Lat Localization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Localize the booking experience for Da Lat with Vietnamese default, English switching, and a compact responsive search experience.

**Architecture:** Add a small client-side locale provider and typed content dictionary, then move visible homepage copy/data to localized consumers. Rework header and booking search around existing controls; no URL locale routing or booking logic changes.

**Tech Stack:** Next.js, React, TypeScript, Tailwind, Radix primitives, `next/image`.

**Spec:** `docs/superpowers/specs/2026-10-04-dalat-localization-design.md`

## Global Constraints

- Vietnamese is default; English selection persists in `localStorage`.
- Preserve routes, existing form state/controls, one-guest and tent-site defaults, and login behavior.
- No i18n dependency, backend, CMS, locale URLs, or new booking logic.
- Ensure 44px controls, keyboard drawer/sheet behavior, contrast, reduced motion, and responsive images.

## Review Focus

- A 320px viewport must not let header, sheet, or hero copy overlap.
- Locale persistence must not cause a visible English-first flash.
- Closed drawer/sheet controls must be absent from tab navigation.
- Long Vietnamese labels must wrap or scroll without horizontal overflow.
- Date/select popovers must remain above header and filter layers.

---

### Task 1: Locale foundation and content data

**Files:**
- Create: `components/i18n/LanguageProvider.tsx`
- Create: `components/i18n/content.ts`
- Modify: `app/layout.tsx`, `app/page.tsx`

- [ ] Add a failing source/render check for Vietnamese defaults and language persistence.
- [ ] Implement `Locale`, dictionary, provider, and language trigger API with Vietnamese pre-hydration fallback.
- [ ] Run the check and `npm run build`.
- [ ] Commit `feat: add Vietnamese language foundation`.

### Task 2: Header and responsive search

**Files:**
- Modify: `components/header/Navigation.tsx`, `components/header/NavigationContent.tsx`, `components/booking-form/BookingForm.tsx`

- [ ] Add a failing check for locale trigger, accessible drawer, mobile filter summary/sheet, and retained defaults.
- [ ] Implement locale-aware desktop header, compact mobile header/drawer, and mobile search bottom sheet using current calendar/select primitives.
- [ ] Verify 320px and desktop UI plus `npm run build`.
- [ ] Commit `feat: redesign localized navigation and search`.

### Task 3: Da Lat localized homepage content

**Files:**
- Modify: homepage section modules in `app/about`, `app/activity`, `app/booking`, `app/news`, `app/gallery`, `components/site`, and `components/footer/Footer.tsx`

- [ ] Add failing content checks for Vietnamese Da Lat references and English fallback content.
- [ ] Replace generic copy/imagery metadata with dictionary-backed Da Lat content and accessible language-aware alternatives.
- [ ] Verify language toggle plus `npm run build`.
- [ ] Commit `feat: localize Da Lat guest experience`.

### Task 4: QA and delivery

**Files:**
- Modify: only audit findings; create `docs/lighthouse/2026-10-04-dalat-localization.md`

- [ ] Run production build, mobile/desktop Lighthouse, and keyboard/responsive smoke checks.
- [ ] Fix evidence-backed issues with a RED→GREEN check.
- [ ] Commit QA results, push branch, create PR to `main`, and merge only after fresh verification.
