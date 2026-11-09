# shadcn/ui monorepo template

This is a Next.js monorepo template with shadcn/ui.

Requires Node.js 20.11 or newer.

## Apps

- `apps/web`: Next.js frontend on port 3000.
- `apps/api`: NestJS API on port 3001 (or `PORT`). `GET /` returns `Hello World!`.

Run both apps with `pnpm dev`, or run only the API with `pnpm --filter api dev`.
Build and check the API with `pnpm --filter api build`, `pnpm --filter api typecheck`, `pnpm --filter api lint`, `pnpm --filter api test`, and `pnpm --filter api test:e2e`.

## Adding components

To add components to your app, run the following command at the root of your `web` app:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

This will place the ui components in the `packages/ui/src/components` directory.

## Using components

To use the components in your app, import them from the `ui` package.

```tsx
import { Button } from "@workspace/ui/components/button"
```
