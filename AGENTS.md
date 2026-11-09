<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Agent skills

### Issue tracker

Issues and specs live in GitHub Issues for `wujianguo/threadloom`. See `docs/agents/issue-tracker.md`.

### Triage labels

Use the five default triage labels. See `docs/agents/triage-labels.md`.

### Domain docs

Use the single-context layout at the repo root. See `docs/agents/domain.md`.

## Code and UI conventions

- Write new application code in TypeScript. Do not use `any`.
- Prefer type inference and narrowing; use `as` assertions only when necessary.
- For UI, prefer shadcn/ui components with this repo's existing `components.json` configuration and default component styling. Customize only when the task requires it.
