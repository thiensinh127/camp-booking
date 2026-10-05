# Visual System Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Give Camp Haven a coherent Vietnamese-friendly type system, complete gallery, atmospheric benefits panel, and three-image campsite hero.

**Architecture:** `app/layout.tsx` owns the font family and root metadata. Existing section components retain their localization and reuse local WebP assets. The hero stays in `components/OverLay.tsx`, changing from one image to a responsive CSS grid collage while preserving the text and booking layers above it.

**Tech Stack:** Next.js 15, React, TypeScript, Tailwind CSS, `next/font/google`, `next/image`.

**Spec:** `docs/superpowers/specs/2026-10-05-visual-system-refresh-design.md`

## Global Constraints

- Reuse existing local assets only; add no dependency or external image URL.
- Preserve Vietnamese/English content keys, `next/image` optimization, responsive booking behavior, favicon, and removed-login state.
- Use Be Vietnam Pro through `next/font/google`; retain the fluid root font scale.
- Verify with `node scripts/check-localization.mjs`, `npm run build`, and `git diff --check`.

## Review Focus

- Vietnamese diacritics remain legible at 15px mobile root size; assert the Be Vietnam Pro variable is applied to `<body>`.
- Gallery has no desktop empty cell; assert six mapped items and responsive grid classes.
- Every hero image is local and decorative; assert three `next/image` children have empty alt text.
- Hero text and booking bar stay above the collage; preserve `relative z-10` content and booking z-index.
- Benefits body copy remains readable over a background image; assert the image overlay exists before translucent cards.

---

### Task 1: Apply Be Vietnam Pro and repair icon metadata

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`
- Modify: `scripts/check-localization.mjs`

**Interfaces:**
- Produces: `--font-be-vietnam` CSS variable applied on `<body>` and used by the global body/heading rules.

- [ ] **Step 1: Write the failing static check**

Assert `app/layout.tsx` imports `Be_Vietnam_Pro`, applies `--font-be-vietnam`, and no longer points metadata at the deleted `/favicon.png`.

- [ ] **Step 2: Run the static check and verify failure**

Run: `node scripts/check-localization.mjs`

- [ ] **Step 3: Replace the Inter/Manrope setup with Be Vietnam Pro**

Use the Google font variable in `app/layout.tsx`, reference it for body and headings in `app/globals.css`, and omit stale metadata icon configuration so the `app/icon.png` convention is used.

- [ ] **Step 4: Run the static check and commit**

Run: `node scripts/check-localization.mjs`

Commit: `style: adopt Be Vietnam Pro typography`

### Task 2: Complete the gallery and add atmosphere to benefits

**Files:**
- Modify: `app/gallery/page.tsx`
- Modify: `components/site/Benefits.tsx`
- Modify: `scripts/check-localization.mjs`

**Interfaces:**
- Consumes: local `camp-haven-*.webp` assets from `public/assets`.
- Produces: six-item gallery collage and benefits panel background layer.

- [ ] **Step 1: Write failing static checks**

Assert the gallery photo list has six local images and the benefits section contains a background `Image` plus an overlay layer.

- [ ] **Step 2: Run the static check and verify failure**

Run: `node scripts/check-localization.mjs`

- [ ] **Step 3: Implement the gallery collage and benefits background**

Give all six gallery tiles intentional spans/object positions. Add `camp-haven-campsite-valley.webp` as a low-contrast, decorative benefits background with an ivory overlay before the card layer.

- [ ] **Step 4: Run the static check and commit**

Run: `node scripts/check-localization.mjs`

Commit: `style: complete gallery and enrich benefits`

### Task 3: Replace the hero banner with a three-image collage

**Files:**
- Modify: `components/OverLay.tsx`
- Modify: `scripts/check-localization.mjs`

**Interfaces:**
- Consumes: `camp-haven-tent-communal.webp`, `camp-haven-campsite-valley.webp`, and `camp-haven-tent-garden.webp`.
- Produces: decorative hero layer that preserves the existing parent absolute positioning contract.

- [ ] **Step 1: Write the failing static check**

Assert `OverLay.tsx` imports three local WebPs and renders a responsive grid with three `Image` instances.

- [ ] **Step 2: Run the static check and verify failure**

Run: `node scripts/check-localization.mjs`

- [ ] **Step 3: Implement the hero collage**

Use one large campsite image and two supporting tiles at desktop; hide supporting tiles below `md`. Keep existing forest gradients above the collage and all images decorative (`alt=""`).

- [ ] **Step 4: Run full verification and commit**

Run: `node scripts/check-localization.mjs && npm run build && git diff --check`

Commit: `style: create campsite collage hero`

### Task 4: Integrate the completed branch

**Files:**
- No code files.

- [ ] **Step 1: Verify branch and remote state**

Run: `git status --short && git branch --show-current && git remote -v`

- [ ] **Step 2: Push the feature branch**

Run: `git push -u origin feat/dalat-localization`

- [ ] **Step 3: Merge into main and push**

After confirming `main` is current, merge `feat/dalat-localization` into `main`, run the full verification again, and push `main`.
