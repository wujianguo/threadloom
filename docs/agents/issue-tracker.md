# Issue tracker: GitHub

Issues and specs for this repo live in GitHub Issues at `wujianguo/threadloom`. Use `gh` from this checkout.

## Conventions

- Create: `gh issue create --title "..." --body "..."`
- Read: `gh issue view <number> --json number,title,body,labels,comments`
- List: `gh issue list --state open --json number,title,body,labels,comments`
- Comment: `gh issue comment <number> --body "..."`
- Label: `gh issue edit <number> --add-label "..."` or `--remove-label "..."`
- Close: comment with the explanation, then `gh issue close <number>`.
- Link child work with GitHub sub-issues when available. Use `Part of #<parent>` in the child body as a fallback.
- Record blockers with GitHub issue dependencies when available. Use `Blocked by: #<number>` in the child body as a fallback. Work is unblocked when all blockers are closed.

Verify the target with `gh repo view --json nameWithOwner` before the first issue creation in a session. File issues in `wujianguo/threadloom`.

## Pull requests as a triage surface

**PRs as a request surface: no.**

## Skill instructions

When a skill says “publish to the issue tracker,” create a GitHub issue. When it says “fetch the relevant ticket,” read the GitHub issue.

## Wayfinding operations

For `/wayfinder`, the map is an issue labelled `wayfinder:map`; its tickets are child issues. Use `wayfinder:<type>` for research, prototype, grilling, or task tickets. The first unassigned child without open blockers is the frontier. Claim it by assigning yourself, then resolve it with an answer, close it, and add a link to the map’s decisions.
