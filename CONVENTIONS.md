# Coding conventions

Read this file before changing code. Apply these rules to new and touched code without reformatting unrelated files. Follow `.editorconfig` for formatting and the repository's TypeScript and Angular configuration for compiler behavior.

## TypeScript

### Naming and formatting

- Use meaningful, pronounceable names; avoid unexplained abbreviations and redundant prefixes already supplied by the containing type.
- Use camelCase for variables, functions, parameters, members, and enum members; PascalCase for classes, interfaces, type aliases, and enums.
- Prefer positive boolean names with `is`, `has`, `can`, or `are` where appropriate.
- Use two spaces, semicolons, and single-quoted strings. Keep opening braces on the same line and always use braces for control-flow bodies.
- Keep parentheses around arrow-function parameters, including a single parameter.
- Prefer early returns and guard clauses over unnecessary nesting.
- Let TypeScript infer obvious types. Use explicit types where they clarify an interface; validate unknown external data rather than casting it to a trusted type.

### Imports

- Import directly from the defining file; do not introduce barrel (`index.ts`) re-exports.
- Remove unused imports. Group Angular imports first, other third-party imports next, and local imports last, separated by blank lines.
- Use relative imports as the repository currently does; use path aliases only if they are configured in `tsconfig.json`.
- Keep import formatting consistent with nearby code; no automatic import-sorting tool is configured.

### Comments

- Write comments in English. Explain intent, constraints, or non-obvious decisions rather than narrating the code.
- Put `// ` comments above the relevant statement, separated from preceding code by a blank line when needed for readability.
- Link TODOs to an actual issue in this repository; do not add placeholder ticket identifiers.

## Angular

### Components and state

- Use standalone components and explicit component imports; avoid introducing new NgModules. Reuse existing modules where they already provide shared functionality.
- Use the existing `mci-` selector prefix for application components.
- Follow nearby use of `ChangeDetectionStrategy.OnPush`, signal inputs (`input()` / `input.required()`), and signals for component state.
- Keep templates and SCSS in adjacent files, following the component's existing naming pattern.
- Keep shared UI in `src/app/shared/` and feature-specific code with its feature. Reuse existing components before adding alternatives.
- Omit the redundant `public` modifier. Use `private` for implementation details and `protected` for template-only members; keep intentionally exposed inputs and outputs accessible to callers.
- Group related fields and methods: inputs/outputs and queries, state and dependencies, constructor/lifecycle hooks, then handlers and helpers. Prefer one coherent order over competing visibility-based ordering rules.
- Expose view-ready state to templates rather than chaining through service internals. Keep business logic out of templates.

### Templates

- Follow the existing built-in control-flow syntax (`@if`, `@for`) when adding conditional or repeated content.
- Self-close Angular components with no content, for example `<mci-hero [imageUrl]="imageUrl" />`. Use explicit closing tags when projecting content; ordinary non-void HTML elements still need closing tags.
- With more than two attributes or bindings, put each on its own line. Keep only the element name on the first line and put the closing `>` or `/>` on its own line. Order static/native attributes before component bindings and event handlers.

```html
<mci-hero
  class="page-hero"
  [imageUrl]="imageUrl"
  [title]="title"
/>
```

### Observable lifetimes

- Prefer the `async` pipe for observables used only by the template.
- When a component needs an imperative subscription, use `takeUntilDestroyed` from `@angular/core/rxjs-interop`. Outside an injection context, pass an injected `DestroyRef` explicitly.
- Keep Subjects private and expose a separate observable with `asObservable()`; never replace the Subject itself with its observable view.
- Preserve teardown for DOM listeners, observers, and other resources; RxJS teardown does not clean up unrelated browser resources.

```typescript
import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RefreshService {
  private readonly refreshSubject = new Subject<void>();
  readonly refresh$ = this.refreshSubject.asObservable();

  requestRefresh(): void {
    this.refreshSubject.next();
  }
}
```

### Prerendering and assets

- The application prerenders routes. Keep browser-only APIs such as `window`, `document`, and `ResizeObserver` out of unguarded server-executed code; follow the `afterNextRender` pattern in `src/app/core/layout/header/header.component.ts`.
- Preserve deployment under the configured base path in `angular.json`. Use base-path-compatible asset and navigation URLs rather than assuming deployment at `/`.

### Icons

- Use Google Fonts Material Icons through Angular Material's `<mat-icon>` font ligatures for standard UI icons, for example `<mat-icon>menu</mat-icon>` and `<mat-icon>close</mat-icon>`. Do not draw custom inline SVGs, register SVG versions of standard icons, or substitute text characters.
- Keep the Material Icons font stylesheet in `src/index.html`. For brand or custom icons unavailable in the font, follow `src/app/shared/icons/material-design-icons.module.ts`: store SVGs in `public/images/` and register them with `MatIconRegistry`.
- Keep decorative icons hidden from assistive technology and give icon-only buttons an accessible name with `aria-label`.

## Styles and accessibility

- Reuse the global theme and CSS custom properties in `src/styles/` before adding new values or global rules.
- Keep component-specific styles in the component's SCSS; reserve global styles for genuinely shared typography, theme, and layout.
- Preserve keyboard operation, visible focus, semantic HTML, accessible control names, and heading structure when changing UI.
- Keep layouts usable at mobile widths. Reuse the shared content container rather than widening individual sections to make content fit.
