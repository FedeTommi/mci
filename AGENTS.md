# AGENTS.md

## Project

Website for the Missione Cattolica Italiana in Augsburg. This is a single Angular application, not an Nx monorepo.

- `src/app/features/`: page features.
- `src/app/shared/`: reusable UI components and icons.
- `src/app/core/`: shared application infrastructure and layout.
- `src/styles/`: global styles, theme, tokens, and fonts.
- `public/`: static assets.

## Workflow

1. Read `CONVENTIONS.md` before changing code; it is the source of truth for coding style.
2. Inspect the affected code, its callers, and relevant configuration before editing. Follow nearby patterns unless they conflict with documented conventions.
3. Make the smallest complete change. Preserve unrelated working-tree edits; avoid broad refactors and formatting churn.
4. Run checks appropriate to the change. Summarize changed files, checks run, and anything not verified.

Check usages before changing shared component inputs or other public interfaces. Add dependencies only when existing code and platform features are insufficient.

## Toolchain and checks

- Use Node.js 24, pinned in `.tool-versions`, and npm. Read `package.json` for dependency versions and available scripts.
- Install dependencies with `npm install`; let npm update `package-lock.json`. Never hand-edit the lockfile.
- Keep major framework/toolchain upgrades separate from feature and bug-fix work.
- For code or template changes, run `npm run build` when possible; report blockers rather than weakening checks or build budgets.
- New tests are not required for this project. If tests exist for the changed area, run the relevant ones; never disable, skip, or weaken them to make checks pass.
- No ESLint or Stylelint configuration is currently present. Do not claim lint checks passed or add lint tooling as part of an unrelated task.
- For visual or interaction changes, check the affected page at desktop and mobile widths when a browser is available; otherwise say it was not checked.

## Agent skills

### Issue tracker

Issues and specs live in GitHub Issues for `FedeTommi/mci`.
Before reading or publishing tickets, read `docs/agents/issue-tracker.md`.

### Triage labels

Before triaging issues, read the label mapping in `docs/agents/triage-labels.md`.

### Domain docs

Before exploring domain concepts or architectural decisions, read `docs/agents/domain.md` for the glossary and ADR rules.

## Change boundaries

- Commit or deploy only when explicitly requested.
- Treat `dist/`, `coverage/`, `node_modules/`, `tmp/`, and `.angular/` as generated output; change their source or configuration instead.
- Leave `.junie/` alone unless explicitly asked; it is reserved for agent storage/guidelines.
- Read project configuration before assuming framework defaults. Do not introduce workspace aliases, validation libraries, or other tooling merely because another repository uses them.

## Security and configuration

- Keep secrets, credentials, private keys, confidential endpoints, and machine-local configuration out of committed files and logs.
- Treat `.env` and local configuration as sensitive; use redacted examples rather than copying their values into code, docs, or output.
- Browser bundles and static assets are public: never put secrets in frontend configuration.
- Validate new external inputs and runtime configuration at their trust boundaries, using existing utilities where sufficient.
- Document new environment variables with their purpose and safe example values in the appropriate sample config or project documentation.
- Preserve authentication, authorization, TLS, validation, and sanitization safeguards. Any intentional weakening requires an explicit request and review.
