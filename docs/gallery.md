# Gallery publishing and checks

## Publishing

Use Node.js 24 (`.tool-versions`) and npm. Run `npm install`, then:

1. Put each original in exactly one immediate folder under `public/images/gallery/`.
   Use lowercase English group slugs and descriptive hyphenated English filenames,
   e.g. `community/shaping-dough.jpeg`. JPEG, PNG and still WebP are supported.
   Nested folders, symlinks, unrelated files and animated images are rejected.
   Never overwrite an existing original when adding or renaming a photograph.
2. Optionally edit `gallery.metadata.json`. Keys in `groups` are folder names;
   keys in `photos` are `folder/filename.ext`. This metadata is independent of
   Angular components. Example:

   ```json
   {
     "groups": { "community": { "label": "Insieme a tavola", "order": 0 } },
     "photos": {
       "community/shaping-dough.jpeg": {
         "alt": "Due donne preparano piccoli pezzi di impasto.",
         "caption": "Preparazione dell’impasto.",
         "order": 0
       }
     }
   }
   ```

   Labels, alternatives and captions should be Italian and describe only known,
   visible content. Captions are optional and appear only in the viewer. Missing
   labels/alternatives use humanized folder/filename fallbacks; supply Italian
   wording for a polished publication. Nonnegative integer `order` values come
   first (ascending); ties and unordered entries sort alphabetically by folder
   or filename, using deterministic code-point ordering. Empty folders are
   accepted but omitted from the public controls and viewer traversal. Unknown
   references, unknown fields and invalid values fail preparation with diagnostics.
3. Run `npm run build`. This discovers the collection, validates inputs, writes
   `src/app/features/gallery/gallery-data.json`, and regenerates 640×480 WebP
   thumbnail crops (without upscaling) in `public/images/gallery/_thumbnails/`.
   Originals remain byte-for-byte unchanged and are contained, not cropped, in
   the viewer. The `_thumbnails` directory is reserved generated output: never
   put originals or metadata there. It is excluded from discovery and replaced
   on each preparation. Generated data and thumbnails are ignored by Git.
4. Review the build and deploy through the existing project workflow. Adding
   photos requires rebuilding and redeploying; the browser does not enumerate
   folders or discover uploads at runtime. Verify publication rights and consent
   for identifiable people before deployment.

`npm start`, `npm run watch` and `npm test` also prepare the gallery first.
During an existing development/watch session, rerun `npm run gallery:prepare`
after filesystem or metadata changes; the generated import triggers rebuilding.
Direct `ng` commands do **not** run npm lifecycle hooks: prepare first.

## Automated checks

```sh
npm run test:gallery-assets
npm test -- --watch=false
npm run build
```

The CLI boundary tests create temporary collections and verify automatic
membership, explicit/alphabetical ordering, fallbacks, optional captions,
derivatives, determinism, source preservation, empty input and actionable
invalid-content/reference diagnostics. The gallery-page tests use a separate
26+2-photo fixture with an empty group, exercising public DOM controls, batches,
stale/repeated observer notifications, cross-group/global navigation, optional
captions, keyboard/swipe behavior, failures, empty/single-photo cases and focus
restoration. jsdom substitutes only browser dialog/observer boundaries; real
platform behavior is checked separately.

### Browser check (no new browser-test framework)

Serve `dist/mci/browser` locally with `/mci/` as the base path and SPA fallback.
Launch an installed Chromium-compatible browser with an isolated temporary
profile, e.g.:

```sh
brave-browser --headless --disable-gpu --no-sandbox \
  --user-data-dir=/tmp/mci-gallery-browser-profile \
  --remote-debugging-port=9333 about:blank
node scripts/check-gallery-browser.mjs 9333 http://localhost:4300/mci/gallery/
```

Use `--no-sandbox` only if required by the local headless environment. The check
uses Node's built-in WebSocket/CDP, not an installed browser automation package.
It checks 1440×1000 and 390×844, native modal/keyboard focus, visible focus,
Escape and focus restoration, background scroll lock, buttons, real touch
swipe input, global wrap and active-label changes, blocked-original recovery,
thumbnail requests, reserved space and overflow. Screenshots are written under
`/tmp/mci-gallery-{grid,viewer}-{width}.png`; stop only your launched processes
when done. Physical devices and screen readers still need human verification.

For real observer/network checks with more than a batch, generate a temporary
fixture **outside published photos**, build with it, then copy its assets only
into the disposable build output:

```sh
mkdir -p tmp/gallery-browser-photos/{first,second,empty}
for i in $(seq -w 1 26); do
  cp public/images/gallery/worship/flower-and-bread-display.jpeg \
    tmp/gallery-browser-photos/first/first-$i.jpeg
done
for i in 01 02; do
  cp public/images/gallery/worship/flower-and-bread-display.jpeg \
    tmp/gallery-browser-photos/second/second-$i.jpeg
done
printf '%s\n' '{"groups":{"first":{"label":"Primo gruppo","order":0},"second":{"label":"Secondo gruppo","order":1}},"photos":{"first/first-01.jpeg":{"caption":"Didascalia di prova"}}}' \
  > tmp/gallery-browser-metadata.json
node scripts/prepare-gallery.mjs tmp/gallery-browser-photos tmp/gallery-browser-metadata.json
npx ng build
cp -r tmp/gallery-browser-photos/* dist/mci/browser/images/gallery/
node scripts/check-gallery-browser.mjs
# Restore the real collection and production build; never deploy the fixture build.
npm run build
```

The fixture additionally verifies that distant unrendered thumbnails are not
requested, real IntersectionObserver notifications append to 26 without
duplicates, and loading stops at the end. Exact browser lazy-loading distances
are intentionally not asserted.

## Issue #1 implementation verification

- Started from `3383e06`; confirmed it is an ancestor before editing.
- Red/green slices: missing CLI → deterministic asset preparation; placeholder
  page → grouped thumbnails; absent viewer → full-image/global navigation;
  absent observer/swipe UI → batches and touch/failure handling. A later
  regression test caught a queued observation firing after switching away and
  back to the same group; observer cleanup now invalidates that callback. A real
  browser regression also caught switching to a short group from deep scroll;
  selection now reveals the new heading/grid instead of leaving photos above
  the viewport.
- Node 24.16.0: asset checks (2) and Angular/Vitest page checks (5) passed.
- Production build passed existing budgets, without configuration changes.
- Headless Brave checks passed at desktop/mobile widths for both the real nine
  photos and the separate 28-photo fixture, including actual CDP touch and
  keyboard events, focus, scroll locking, network failure recovery and real
  observer batches. Screenshots reviewed at both widths.
- Existing prerender gap: `angular.json` sets `outputMode: static` and an SSR
  entry but omits `build.options.server`, so the normal build currently emits
  only the SPA index, not route HTML. Kept unchanged by supervisor direction
  because enabling whole-site prerendering is outside gallery scope. Independently
  checked with `npx ng build --server=src/main.server.ts --output-path=tmp/gallery-prerender-check`:
  all 22 static routes, including gallery, prerendered successfully. Browser-only
  observers run in `afterRenderEffect`; dialog APIs run only on user actions.
- No deployment, issue publication, backend/admin work or shared-card API changes.
  The existing GitHub Pages workflow is Jekyll-based, not an Angular build; this
  ticket integrates preparation with the documented npm workflows, not deployment.
  Safari/Firefox, physical devices, assistive technology and publication consent
  were not independently verified.

### Modern Web Guidance applied

- `dialog`: “DON'T add `role="dialog"`, `aria-modal`, a manual focus trap” — used
  native `showModal()`, native Escape and a named close control. Explicit focus
  restoration is needed only because traversal can replace the original invoker
  with another group's thumbnail, as required by the spec.
- `accessibility`: “Scope to the axis you actually need” — the swipe stage uses
  `touch-action: pan-y pinch-zoom`, directional thresholds and touch-only input;
  controls retain native button behavior and explicit `:focus-visible` outlines.
- `optimize-image-priority`: “For standard below-the-fold images, `loading="lazy"`
  is sufficient” — thumbnails use lazy loading at normal priority with reserved
  dimensions; only the selected original exists in the viewer DOM. Hero unchanged.
- `prevent-page-scroll-under-modal-dialog`: “Set `overflow: hidden` ... on
  `dialog::backdrop`” — contained overscroll on dialog and backdrop. The existing
  CDK block scroll strategy is also retained per the explicit ticket/project
  navigation-dialog pattern, rather than relying solely on progressive scroll
  containment in browsers where non-scrollable containment is not enforced.
