# Issue tracker: GitHub

Issues and specs live in GitHub Issues for `FedeTommi/mci`.
Use the `gh` CLI from this clone.

Before the first issue creation in a session, verify the target with
`gh repo view --json nameWithOwner`. It must be `FedeTommi/mci`.

## Operations

- Create: `gh issue create --title "..." --body-file <file>`.
  Use a temporary Markdown file or stdin for multi-line bodies.
- Read: `gh issue view <number> --json number,title,body,labels,comments`.
- List: `gh issue list --state open --json number,title,body,labels`.
  Add label and state filters as needed.
- Comment: `gh issue comment <number> --body "..."`.
- Apply/remove labels: `gh issue edit <number> --add-label "..."` /
  `--remove-label "..."`.
- Close: post an explanatory comment, then `gh issue close <number>`.
  Post the comment separately so it is preserved even if already closed.

## Parent issues and blockers

Use GitHub's native sub-issues and issue dependencies when supported by
the installed CLI and repository.

Otherwise:
- Put `Part of #<parent>` at the top of a child issue and link it from
  a task list in the parent.
- Put `Blocked by: #<number>, #<number>` at the top of a blocked issue.

An issue is unblocked when every blocker is closed.

## Pull requests as a triage surface

**PRs as a request surface: no.**

## Skill instructions

- "Publish to the issue tracker" means create a GitHub issue.
- "Fetch the relevant ticket" means read the GitHub issue, including comments.

## Wayfinding

For `/wayfinder`, use one map issue labelled `wayfinder:map`, with child
issues labelled `wayfinder:<type>` (`research`, `prototype`, `grilling`,
or `task`). Create these labels only when needed.

The frontier is the first open child in map order with no open blockers
and no assignee. Claim it with `gh issue edit <number> --add-assignee @me`.

Resolve by commenting with the answer, closing the child, and adding a
summary and link to the map's Decisions-so-far.
