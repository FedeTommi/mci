# Mobile UX and visual polish decisions

This document records the decisions agreed during the two mobile-polish passes and the subsequent menu corrections. It records design intent, not a glossary or an architecture decision record. Where an earlier choice changed, the final choice below takes precedence.

## 1. Scope and visual identity

- Focus on visual polish rather than new visitor journeys or features.
- Preserve existing content, wording, functionality, routes, fonts, and overall visual identity.
- Adjust font sizes, insufficient color contrast, spacing, alignment, image proportions, and responsive layouts where needed.
- Improve the existing design rather than introduce a redesign, new dependencies, or a new layout framework.
- Audit before choosing changes, and agree on the scope before implementation.
- Inspect the whole site, including shared components, rather than fixing only the homepage.
- Include mobile portrait, mobile landscape, narrow desktop, and wide desktop. A narrow desktop window is not automatically a mobile device.
- The reported physical-device problems occurred on an iPhone 11 Pro in Safari and Chrome; Chromium responsive emulation alone is not sufficient to dismiss those reports.

## 2. Full-bleed layout and safe areas

- Full-bleed background colors and images must reach the screen edges, including in iPhone landscape.
- Text, navigation, and controls must remain clear of the notch and other unsafe areas.
- Enable edge-to-edge layout with `viewport-fit=cover`, preserving normal zoom behavior.
- Keep the shared centered content container and its 1280px maximum width.
- Use the **greater of the normal 24px gutter or the device safe-area inset** on each side. Do not add the two values together.
- Use the actual safe-area environment values rather than hardcoding the approximately 44px strips observed in the screenshots.
- Protect header top spacing, menu boundaries, and footer bottom content as well as horizontal content gutters.
- Do not solve physical-screen insetting by adding global body padding or widening individual sections with `100vw`.
- The observed side strips were strongly consistent with iOS automatic safe-area insetting. Earlier full-width DOM measurements in Chromium did not rule that out; physical-device verification remains a separate requirement.

## 3. Hero titles and height

- Mobile landscape must use mobile-sized titles, as portrait does, rather than reverting to desktop typography solely because the viewport is wider than 700px.
- Respond to short viewport height as well as narrow width.
- Adjust hero padding alongside typography so titles and supporting text remain readable beneath the header.
- Allow a hero to grow beyond one screen when its content needs more room. One-screen height is a preference, not a hard constraint.
- Do not clip titles or shrink them excessively to preserve a fixed viewport-height box.
- Keep full-bleed hero photographs square-edged; contained-media rounding does not apply to them.

## 4. Navigation mode and layout

### When navigation collapses

- Keep inline navigation whenever all links fit on one row inside the shared content bounds.
- Preserve content-fit-driven collapse rather than introduce a mobile-only fixed viewport breakpoint.
- When navigation collapses, use the same full-screen menu on phones and narrow desktop windows.
- Full-screen navigation replaces the earlier small, inset scrolling panel.
- Preserve the existing nine links, their wording, routes, and order. Do not add the social links that were already hidden in compact mode.

### Link arrangement

- Center menu items **horizontally only**, including their text.
- Keep the list **top-aligned below the close controls**. Do not vertically center the link group.
- Desktop compact navigation remains a single scrolling column, regardless of how narrow or short the desktop window is.
- Two columns are allowed only on touch-first devices in short landscape layouts.
- Identify touch-first capability using a coarse primary pointer and no hover, combined with short landscape dimensions, rather than browser-name or device-model detection.
- The implemented short-landscape threshold is a maximum height of 500px. Portrait and nonqualifying devices retain one column.
- Preserve DOM and keyboard order when displaying two columns.
- Retain scrolling as a fallback for short screens, safe-area constraints, and enlarged text. Do not shrink touch targets merely to fit all links without scrolling.
- Keep link targets at least 48px high and ensure the first and last links remain reachable.

### Modal behavior and lifecycle

- Treat the full-screen menu as modal navigation, not an ARIA menu widget: keep ordinary links and buttons.
- Move focus inside on opening, contain background-page focus, make the background inert, and lock background scrolling.
- Restore focus and the previous page scroll position on dismissal.
- Provide a visible, labelled close button and Escape dismissal.
- Close after navigation; clean up on resize and component teardown.
- Reuse native dialog behavior and the installed CDK scroll-lock strategy instead of implementing a custom focus trap or body-lock manager.
- Scroll locking is an explicit requirement, even where general guidance recommends progressive CSS containment alone. Preserve position and avoid scrollbar-induced layout shifts.

## 5. Circular reveal and touch dismissal

- Reveal the menu with a brief circle expanding from the actual top-right menu button position.
- The circle is an animation, not the final navigation layout. The open menu fills the rectangular screen.
- Reverse the reveal when closing normally.
- Users who prefer reduced motion get immediate opening and closing without the circular animation.
- Keep controls usable and modal cleanup dependable when an animation is interrupted or navigation occurs.
- Support a deliberate **rightward swipe** to dismiss on touch devices.
- Swiping is optional: never remove the close button, Escape, or automatic closing after navigation.
- Preserve ordinary vertical list scrolling and pinch zoom. Do not use blanket `touch-action: none`.
- Reject short, leftward, vertical, and cancelled gestures as dismissal attempts.
- Prevent accidental link activation after a recognized horizontal swipe.
- Preserve the gesture-axis policy at the actual scrolling ancestor as well as the dialog.
- Browser/operating-system edge gestures are not guaranteed to be interceptable; device verification is still necessary.

## 6. Logo and menu-button visibility

- Preserve the original logo artwork and give it an opaque light backing so it remains visible over dark photographs.
- Make menu and close controls comfortably sized and visible regardless of the hero image.
- Final button treatment: **white background with the logo's dark green `#3d4930` icon**. This supersedes the earlier green-filled button treatment.
- Reuse the existing `--white` and `--secondary` values for those colors.
- Use Material Icons for the menu and close symbols, not new custom SVG artwork.
- Menu and close controls use the same position and size through opening and closing; clicking must not produce an apparent jump.
- Keep the close-control row stationary while the navigation list scrolls. A list scrollbar must not shift the close button horizontally.
- The implemented controls are 56px square with 36px icons. Shared 68px control-row alignment matches the logo artwork plus backing and removes the measured 6px vertical mismatch.

## 7. Image/text layouts and quotations

- Stack image/text sections earlier when intermediate-width columns become unbalanced; do not keep desktop columns until 700px simply because that was the old breakpoint.
- Specifically address the problematic layouts around 850px in Pastor, Sunday, Story, and Prayer, while retaining balanced columns on wider screens.
- Treat a small image beside a very tall text column as a layout problem, not something to fix solely by adding margins.
- Do not enlarge the low-resolution pastor photograph simply to fill space.
- Preserve the homepage Sunday quotation's wording and handwritten font; adjust local mobile sizing, line height, and negative offsets to prevent ink clipping.
- Preserve the Carlo Acutis quotation and attribution; reduce or reposition decorative quotation marks so they do not squeeze the text into a narrow word stack.
- Keep the existing decorative heading/handwritten-subtitle overlap; do not remove it globally as an incidental spacing fix.

## 8. Spacing and buttons

- Rebalance specific transitions across the site rather than blanket-increasing every margin or paragraph gap.
- Add separation between Contacts' “Come raggiungerci” heading and the office/map group.
- Add breathing room between the map and “Le Messe.”
- Stack office details and the map on narrow portrait screens; both should use the available content width.
- Keep gap-aware, balanced columns where the Contacts layout remains side by side.
- Give Carlo's resource headings, media grids, and resource groups consistent separation instead of relying on touching boxes or line breaks.
- Reduce excessive stacked spacing where justified, including the homepage welcome gap, duplicate inner/section padding, and the trailing activities-to-footer gap.
- Preserve paragraph spacing and deliberate title groupings unless a specific defect calls for a change.
- Allow long calendar/story button labels to wrap with adequate height and vertical padding. Do not shorten the content or shrink global button typography to make labels fit.
- Leave empty-route bodies and unfinished gallery placeholders alone; do not populate, remove, or hide them as incidental polish.

## 9. Rounded media

- Match the card component's **30px corner radius** on contained photographs, the Story image, and maps.
- Preserve full-bleed heroes, logos, icons, and decorative backgrounds without this treatment.
- Leave unfinished gallery placeholders unchanged.
- Video rounding is an approved **separate visual experiment**, not part of the main polish commit.
- Apply video rounding in its own commit only after review, so it can be reverted independently.
- At the end of the reviewed implementation, videos remain square and the video-rounding patch remains unapplied.

## 10. Mobile overscroll

- The background exposed by overscrolling must match the footer at **both the top and the bottom** of the page.
- Use the existing footer background token, `--mat-sys-surface-container-highest`.
- Keep normal page and section surfaces visually intact; exposing the overscroll canvas must not unintentionally recolor transparent sections.
- Use a solid canvas background rather than a gradient. Since both ends use the same color, no scroll-position-dependent color switching or listener is needed.
- Actual Safari rubber-band painting must be checked on the physical device; desktop emulation does not prove it.

## 11. Validation and change control

- Check portrait and landscape mobile widths, short landscape heights, narrow mouse-driven desktop windows, and wide desktop layouts.
- Include all routes in geometry checks and inspect populated sections visually.
- Validate modal focus behavior, scroll-position restoration, route/resize/teardown cleanup, reduced motion, gesture cancellation, and accidental-link prevention.
- Check menu/close position and size throughout entry, open state, list scrolling, reverse exit, and restoration, including safe-area scenarios.
- Synthetic safe-area and touch tests are useful but must be labelled as synthetic, not physical iPhone/Safari verification.
- Run the production build and TypeScript checks; do not weaken budgets or validation to make them pass.
- No unit-test seam was agreed. Use assert-based browser self-checks for the new interaction logic without claiming test-driven development. The full test command was attempted, but the repository contained no tests.
- Review changes against both the agreed specification and repository standards.
- Leave work unstaged and uncommitted for user review; commit and push only after explicit approval. The later approval to commit and push applied to the reviewed polish, not to future changes automatically.
- Keep the video experiment independently revertible.

## 12. Implementation references

- `67c2a08` — first mobile-polish pass, including safe-area layout and initial local fixes.
- `57ad4a0` — second responsive-navigation and visual-polish pass, including final menu alignment and button corrections.
- Shared navigation: `src/app/core/layout/header/`.
- Shared hero: `src/app/shared/hero/`.
- Shared content grid, scroll locking, and canvas styling: `src/styles/app.scss`.
- Feature-specific layouts and spacing: `src/app/features/home/`, `src/app/features/contacts/`, and `src/app/features/carlo-acutis/`.

These references identify the implementation associated with the discussion; later source changes may refine it without changing the decisions above.
