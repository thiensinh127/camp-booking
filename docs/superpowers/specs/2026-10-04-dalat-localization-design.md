# Da Lat Localization and Responsive Search Redesign

## Goal

Localize the premium glamping site for Da Lat, with Vietnamese as default and English optional. Improve the header and booking search across desktop and mobile without altering booking or login logic.

## Scope

- Preserve current routes, form controls, booking state, and login behavior.
- Add lightweight Vietnamese/English dictionaries with client-side persistence in `localStorage`; do not add a translation library or locale routes.
- Replace visible homepage copy, metadata, and images with Da Lat-specific messaging: pine forest, Tuyen Lam Lake, mist, highland trails, coffee, and cool evenings.
- Desktop gets a clear ivory header, nav, language control, login, and booking CTA.
- Mobile gets a compact header with fixed logo, language control, booking CTA, and accessible full-screen drawer.
- Desktop search remains inline. Mobile uses a 52px summary trigger that opens a bottom sheet containing the existing calendar/select controls and action.

## Interaction and Accessibility

- Vietnamese renders before hydration; selected locale applies after hydration and updates document language.
- The drawer supports Escape, keyboard navigation, scrollable long labels, and is absent from the tab order when closed.
- The mobile search sheet does not overlap following content; booking defaults remain one guest and tent site.
- Preserve touch targets of 44px or more, visible focus states, contrast, and reduced-motion support.

## Validation

- Verify language switching and persistence, header/drawer keyboard behavior, desktop and 320px mobile search, and existing date/select controls.
- Run production build and desktop/mobile Lighthouse against a clean production server.

## Out of Scope

- URL locale prefixes, backend translation, inventory search, maps, payment, CMS, and new routes.
