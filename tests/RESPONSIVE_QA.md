# Responsive verification — 8 October 2026

- Preserved all eight pages of visible copy and all 47 photographs with the existing regression tests.
- Browser viewport checks: all eight pages at 320, 390, 768, 1024 and 1440 pixels; homepage also at 375 and both sides of the 600, 620, 760, 860, 1080 and 1120 pixel breakpoints. No horizontal page overflow.
- Enlarged text: temporary export copies with root font size set to 200%, all eight pages at 320 pixels. No horizontal page overflow. This simulates enlarged relative text, not native browser zoom. Temporary copies were removed.
- Navigation: Enter opens, Escape closes and restores focus; Tab leaves the disclosure without trapping focus. Landscape menu at 844 × 390 remains scrollable and inside the viewport. Mobile menu links are at least 44 pixels tall.
- Gallery: native buttons respond to Enter and Space; focus moves to the persistent toggle after opening; expansion and gathering work, with all 47 photos available. Expansion at 320 pixels does not widen the page.
- Journey: mobile menu opens Contact successfully; existing external booking destinations remain present. No booking was submitted.
- Typecheck, ESLint, production build and all 11 regression tests pass. No browser errors observed during interaction checks.

## Remaining manual checks

Real iOS Safari and Android devices, native browser zoom, screen readers, on-screen keyboards, and throttled CPU/network conditions were not tested. Viewport emulation is not a substitute for those checks.

## Layout technique

`minmax(0, 1fr)` lets grid columns shrink below their content’s intrinsic width. Combined with wrapping and `min-width: 0` on children, long text can reflow without hiding overflow globally.
