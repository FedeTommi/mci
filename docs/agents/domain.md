# Domain docs

This repository uses a single-context layout:
- `GLOSSARY.md` at the repository root.
- Architecture decision records in `docs/adr/`.

## Before exploring

Read `GLOSSARY.md` and ADRs relevant to the area being explored.

If these files do not exist, proceed silently. Domain-modeling work creates
them lazily when terminology or decisions are actually resolved.

## Vocabulary

Use the glossary's terms when naming domain concepts in issues, proposals,
hypotheses, tests, and code. Respect explicitly avoided synonyms.

If a needed concept is missing, reconsider whether it belongs to the domain;
note genuine vocabulary gaps for domain-modeling work.

## ADR conflicts

If a proposal contradicts an existing ADR, name the ADR and explain why
the decision should be reconsidered rather than silently overriding it.
