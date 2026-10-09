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

## A Warm Welcome — 9 October 2026

Replaced long clipping reveals and flying/spinning gallery entrances with 400ms one-time section entrances and an opacity-only reveal for added photos. Hero heading, image and actions render immediately. Mobile galleries use an ordinary grid even while collapsed. No animation dependency or continuous scroll handler was added.

Verified in the in-app browser: homepage gallery at 320px, Enter/Space expansion, repeated toggling, collapse, retained button focus, six collapsed / 24 expanded photos, and no horizontal overflow. Desktop expansion at 1440px also preserves focus and viewport width. Captured the 390px mobile album. No console errors observed. Typecheck, lint, production build and all 11 regression tests passed.

Reduced-motion CSS and preference listener were inspected; OS preference switching, real-phone frame rates and throttled performance were not measured in this pass. Menu opening is 220ms; closing is immediate to avoid delaying focus and hidden-state updates. The separately referenced WEBSITE_ANIMATION_GUIDELINES.md was not supplied or found.
