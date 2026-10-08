# Mobile Responsive Website Guide

A reusable process for planning, building, and checking websites on phones, tablets, and desktops.

## 1. What responsive design means

Responsive design lets the same website adapt to the space available. Text remains readable, layouts rearrange, images fit, and people can complete tasks with touch or a keyboard.

Start with a useful layout for a narrow screen, then add columns and other layout changes when the content has enough room. This is called **mobile-first development**. Do not simply shrink a desktop page or remove important features on mobile. See [MDN's introduction](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design).

## 2. Use this guide in every project

1. Copy this file beside your project's `AGENTS.md`.
2. Add this instruction to `AGENTS.md` if you want assistants to consult it:

   > For website UI changes, read MOBILE_RESPONSIVE_GUIDE.md and apply its relevant implementation and verification guidance. Report which devices, viewport sizes, and user flows were actually tested.

3. Complete the project checklist below before implementation.
4. Apply the guide to shared components first, then check individual pages.

### Project checklist

- **Main mobile task:** [For example, read an article or submit a booking]
- **Pages and shared components:** [Navigation, forms, cards, footer, dialogs]
- **Supported browsers:** [Based on audience, analytics, and project requirements]
- **Existing styling system:** [CSS, utility classes, component library, design tokens]
- **Existing breakpoints:** [Inspect the project before introducing new ones]
- **Available test devices:** [Actual devices and browser emulators]
- **Success criteria:** [Specific flows that must work on small and large screens]

Do not introduce a new CSS framework just to make a site responsive. Adapt the existing system unless there is a clear reason to change it.

## 3. Follow this process for each website

### Step 1 — Understand the content

List each page's purpose, main action, and essential content. Use realistic titles, long names, images, error messages, and translated text where relevant. Placeholder content can hide layout problems.

### Step 2 — Arrange the narrow layout

Sketch a single-column version. Place the most useful information early. Keep the HTML reading order logical so the visual order, keyboard order, and screen-reader order make sense together.

### Step 3 — Make the layout flexible

Use Grid or Flexbox, flexible widths, wrapping, and a maximum content width. Avoid fixed widths for page sections and fixed heights for text containers. Content should determine height.

### Step 4 — Add breakpoints when content needs them

Slowly widen the viewport. Add a media query when the layout would benefit from a change, such as moving cards into two columns. Choose breakpoints based on content rather than specific phone models. Existing project breakpoints are the starting point. See [web.dev's media query guide](https://web.dev/learn/design/media-queries?hl=en).

### Step 5 — Adapt interactions

Check navigation, search, menus, forms, tables, and dialogs. Every important action must remain available without hover. Check how the on-screen keyboard affects inputs and submit buttons.

### Step 6 — Test the whole task

Complete the primary user journey on a narrow screen, fix problems, and recheck desktop. Test failure states as well as the successful path. Record actual results and any devices you could not test.

## 4. A small CSS starting point

These are examples to adapt, not a replacement stylesheet to paste over an existing design.

Ensure the document has one viewport declaration, using your framework's metadata mechanism if applicable:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Do not disable zoom with `user-scalable=no` or a restrictive maximum scale. See [MDN's viewport reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name/viewport).

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: system-ui, sans-serif;
  font-size: 1rem;
  line-height: 1.5;
}

.container {
  width: 100%;
  max-width: 72rem;
  margin-inline: auto;
  padding-inline: 1rem;
}

.cards {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1rem;
}

.cards > * {
  min-width: 0;
  overflow-wrap: anywhere;
}

img,
video {
  display: block;
  max-width: 100%;
  height: auto;
}

button,
input,
select,
textarea {
  font: inherit;
  max-width: 100%;
}

.action {
  min-height: 44px;
  min-width: 44px;
  padding: 0.65rem 1rem;
}

/* Example only: move these thresholds to suit actual content. */
@media (min-width: 48rem) {
  .cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 70rem) {
  .cards {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
```

Apply `.container` to a page wrapper, `.cards` to a group of cards, and `.action` to suitable buttons or links. Set your project's colors, borders, hover states, and visible focus styles separately. `minmax(0, 1fr)` and `min-width: 0` let grid content shrink rather than force the page wider.

## 5. Component guidelines

### Text and spacing

- Keep body text comfortably readable; `1rem` is a useful starting point. Respect browser font settings.
- Use relative units for text and spacing where appropriate. Do not reduce text size to force a layout to fit.
- Allow headings, labels, and buttons to wrap. Avoid fixed heights around text.
- Keep spacing consistent with the project's design tokens. Use a constrained line length for long reading content.
- If using fluid type with `clamp()`, include relative bounds and verify that zoom still enlarges text appropriately.

### Touch and navigation

- Aim for at least **44 × 44 CSS pixels** for standalone touch controls, with separation between nearby actions. This is a practical design target; WCAG 2.2 AA's minimum target-size criterion is **24 × 24 CSS pixels**, with defined exceptions. See [WCAG 2.2](https://www.w3.org/TR/WCAG22/#target-size-minimum).
- Use actual buttons for actions and links for navigation. Give icon-only controls accessible names.
- A collapsed navigation control should expose its expanded state, work with a keyboard, and reveal usable links. Hidden navigation must not leave invisible links in the tab order.
- If navigation opens as a modal drawer, manage focus inside it, support dismissal, and restore focus to its trigger. A simple non-modal disclosure does not need a focus trap.
- Do not make essential content available only on hover or require a swipe gesture without an alternative control.

### Forms

- Start with stacked labels and fields. Use persistent labels; placeholders are not labels.
- Use appropriate input types, `autocomplete`, and `inputmode` to help browser autofill and mobile keyboards.
- Preserve entered values after errors. Associate error messages with their fields and describe how to fix them.
- Keep focused fields and submission controls reachable when the keyboard is open. Test this on a real phone.
- Prevent accidental duplicate submissions while keeping pending and failure states understandable.

### Images, video, and loading

- Provide image dimensions or a suitable aspect ratio to reserve space during loading.
- Use `srcset` and an accurate `sizes` value when serving different image resolutions. Use `<picture>` when the crop or format needs to change. See [MDN's responsive images guide](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images).
- Compress assets and serve dimensions appropriate to their display size. Making an image visually smaller with CSS does not make its download smaller.
- Lazy-load suitable off-screen images; avoid lazy-loading the important image visible immediately on arrival.
- Check cropping carefully; do not cut off faces, product details, or text within images.
- Avoid unnecessary video, animation, scripts, and fonts. Measure loading and interaction on slower network and CPU settings.

### Tables, dialogs, and sticky elements

- Keep table relationships understandable. If a table needs horizontal scrolling, contain it in a clearly identifiable, keyboard-accessible region rather than making the entire page scroll sideways.
- Keep dialogs within available width and height, with scrollable content and a reachable close control. Preserve accessible dialog behavior.
- Prefer flexible minimum heights over fixed full-screen heights. For full-height sections, consider `min-height: 100svh` for stable space or `100dvh` when following browser-bar changes is desirable; test the chosen behavior.
- Check sticky headers and bottom actions against browser bars, device safe areas, and the on-screen keyboard. Dynamic viewport units alone do not guarantee keyboard-safe behavior.
- Do not let fixed elements cover content, validation errors, or keyboard focus. Add appropriate space and safe-area padding where needed.

## 6. Find and fix horizontal overflow

If the page scrolls sideways unexpectedly:

1. Identify the element extending beyond the viewport in browser developer tools.
2. Check fixed widths, minimum widths, long unbroken text, `white-space: nowrap`, wide media, and positioned elements.
3. Check flex and grid children; `min-width: 0` is often needed for shrinking.
4. Prefer `width: 100%` to unnecessary `100vw` on ordinary page wrappers.
5. Give genuinely wide content, such as a data table, its own scroll region.
6. Recheck the affected component at other widths.

Do not apply `overflow-x: hidden` to the whole page simply to hide the defect. It can conceal content and focused controls without fixing the layout.

## 7. Test matrix and acceptance checklist

Use representative CSS viewport widths such as **320, 375, 390, 768, 1024, and 1440 pixels**, plus widths immediately around your actual breakpoints. These are test samples, not mandatory CSS breakpoints. Resize continuously between them and check short landscape screens too.

- [ ] Ordinary page content has no unintended horizontal scrolling at 320 CSS pixels.
- [ ] Text remains usable at 200% enlargement; content reflows at the equivalent of a 320 CSS pixel viewport, such as a 1280-pixel-wide desktop viewport at 400% zoom.
- [ ] Necessary two-dimensional content, such as a data table or map, is handled deliberately. See [W3C's reflow explanation](https://www.w3.org/WAI/WCAG21/Understanding/reflow).
- [ ] Navigation, forms, dialogs, and the main user journey work with touch and keyboard.
- [ ] Focus is visible and not covered by sticky elements; labels and errors are understandable.
- [ ] Long content, empty states, loading, validation failures, and network errors fit.
- [ ] Images retain correct proportions; loading does not cause avoidable layout jumps.
- [ ] Essential functionality works in both portrait and landscape where applicable.
- [ ] The keyboard does not make required inputs or actions unreachable.
- [ ] Relevant real-device checks include iOS Safari and Android Chrome when available and in scope.
- [ ] Desktop behavior remains correct after mobile changes.
- [ ] Unavailable browsers, devices, or checks are recorded as unverified.

Browser emulation helps find layout issues, but it cannot fully reproduce real mobile keyboards, browser controls, touch behavior, or device performance. These checks support accessibility; they are not a complete accessibility audit.

## 8. Prompt for your coding assistant

```text
Read AGENTS.md and MOBILE_RESPONSIVE_GUIDE.md.
Improve the mobile responsiveness of [pages/components].
The main user task is [task].

Inspect the existing layout, styling system, and breakpoints first.
Preserve the intended design and essential functionality.
Fix shared layout causes before adding page-specific overrides.
Use flexible layouts and content-driven breakpoints.
Check navigation, forms, images, long content, and failure states.
Do not hide overflow or remove features to conceal layout problems.

Test representative narrow and wide viewports, breakpoint boundaries,
keyboard navigation, and the complete user flow.
Report what changed, the actual test results, and anything unverified.
Briefly explain one responsive CSS technique used so I can learn it.
```

## 9. Build your skills through practice

1. Build a simple article page with readable text and flexible images.
2. Add a card grid that grows from one column to several.
3. Build a navigation disclosure and an accessible form.
4. Practice debugging a deliberately overflowing component without hiding it.
5. Test a complete page on a real phone and record what emulation missed.

For each exercise, predict what will happen as the viewport narrows, test your prediction, and explain the fix in your own words. Keep a short record of reusable lessons. Continue with [web.dev's responsive design course](https://web.dev/learn/design/).
