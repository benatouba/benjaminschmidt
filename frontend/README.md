# Frontend (Vue 3 + Vuetify + TypeScript)

This folder contains the frontend for your scientific profile site. It is intentionally separated from the future backend.

## Stack

- Vue 3
- TypeScript
- Vuetify (latest)
- Vite 8 (Rolldown-based)
- Vue Router 5 file-based routing
- pnpm
- oxlint + eslint + oxfmt

## Routing

Routes are generated automatically from `src/pages` using `vue-router/vite`.

- `src/pages/index.vue` -> `/`
- `src/pages/career.vue` -> `/career`
- `src/pages/publications.vue` -> `/publications`
- `src/pages/projects.vue` -> `/projects`
- `src/pages/contact.vue` -> `/contact`

Generated route typings are emitted to `src/route-map.d.ts`.

## Runtime and TypeScript

- Runtime target in devenv: Node.js 25 (`pkgs.nodejs_25`)
- Node type definitions: `@types/node@^25`
- TypeScript: `~6.0.2`

Compatibility note:

- Vue 3 + Vite 8 + `vue-tsc` work with TypeScript 6 in this project.
- `@typescript-eslint/parser` currently declares support up to `< 6.0.0`, so pnpm shows a peer warning, but lint currently runs successfully.

## Scripts

- `pnpm dev` - run development server (host enabled)
- `pnpm build` - type check and build production bundle
- `pnpm preview` - preview production build
- `pnpm typecheck` - run TypeScript checks
- `pnpm lint:oxlint` - lint TypeScript and Vue script blocks
- `pnpm lint:vue` - lint Vue templates and non-script Vue sections
- `pnpm lint` - run all lint tasks
- `pnpm format` - format project files with oxfmt
- `pnpm format:check` - check formatting without writing

## Devenv Tasks

From repository root:

- `devenv up` (runs frontend dev server process)
- `devenv tasks run frontend:build`
- `devenv tasks run frontend:lint`
- `devenv tasks run frontend:format`

## Project Structure

- `src/components/layout` - shell layout components
- `src/components/sections` - reusable content sections
- `src/pages` - file-based route pages
- `src/data` - typed content data
- `src/types` - shared domain types

## Backend Separation

The backend is not scaffolded yet. When you are ready, create a separate `backend/` project with FastAPI and uv, and connect it to this frontend via API calls.
