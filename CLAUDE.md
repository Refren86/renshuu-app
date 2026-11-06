# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Renshuu is a Japanese vocabulary flashcard app. Words live in **collections** (e.g. "Personal collection", JLPT levels, "6000 Most Common Words") — a flashcard can belong to multiple collections via a junction table. Users pick a collection, then either study it as flashcards (swipe-style, with status tracking) or review/triage words already studied into a drag-and-drop Trello-style board (Unknown / Familiar / Known), or edit the raw word list in a spreadsheet-like table view.

Monorepo with two independent apps, no shared package:
- `frontend/` — React 18 + Vite + TanStack Router (file-based) + Apollo Client (GraphQL) + TanStack Query (REST) + Tailwind + shadcn-style UI components.
- `server/` — Express, built/bundled with Vite (SSR mode) into a single `dist/index.cjs`. GraphQL via `graphql-yoga`, REST via Express routers. Drizzle ORM over PostgreSQL.

## Commands

Run from repo root (pnpm workspaces-ish, but each app has its own `pnpm dev`):
```bash
pnpm start        # concurrently runs both: `cd server && pnpm dev` + `cd frontend && pnpm dev`
pnpm lint         # eslint . --ext ts,tsx --fix  (root config covers both frontend and server)
pnpm format       # prettier --write "**/*.{ts,tsx,js,jsx,css,scss}"
```

Docker (see README.md for the full dump/restore workflow):
```bash
docker compose -f docker-compose.dev.yml up -d           # local dev, http://localhost:3000
docker compose -f docker-compose.dev.yml up --build -d   # rebuild after dependency changes
```

### Frontend (`cd frontend`)
```bash
pnpm dev                                   # vite dev server, port 3000
pnpm build                                  # tsc -b && vite build  — this is the real build/typecheck gate
node_modules/.bin/tsc --noEmit -p tsconfig.app.json   # typecheck only, faster than a full build
```
No test suite exists in this repo (deliberately removed — don't reintroduce vitest/testing-library without being asked).

### Server (`cd server`)
```bash
pnpm dev                                   # vite dev (SSR mode), port 5000
pnpm build                                  # vite build -> dist/index.cjs
node_modules/.bin/tsc --noEmit             # typecheck (vite build does not type-check)
pnpm db:generate                           # drizzle-kit generate — after editing src/db/schema.ts
pnpm db:migrate                            # drizzle-kit migrate — applies tracked migrations in src/db/migrations
```

**Migrations are not run automatically anywhere** (not in CI, not on server startup). `pnpm db:migrate` only applies the numbered files Drizzle tracks in `src/db/migrations/meta/_journal.json` (currently `0000`–`0002`). Hand-written one-off SQL files in that same folder (e.g. `create_custom_collection_and_assign_flashcard.sql`, `cleanup_flashcard_ids.sql`) are **not** tracked by Drizzle and must be applied manually with `psql` against whichever database needs them — check column/UUID assumptions before rerunning one against a different environment.

## Architecture

### Frontend: routing and data flow
- Routes are file-based under `frontend/src/routes/*.lazy.tsx`, generated into `frontend/src/routeTree.gen.ts` by the TanStack Router Vite plugin on every `vite dev`/`vite build`. **Never hand-edit `routeTree.gen.ts`** — if route types look stale, run a build to regenerate it.
- Route params are read via `Route.useParams()` imported directly from the specific route file (e.g. `import { Route as flashcardsRoute } from "@/routes/flashcards.$collectionId.lazy"`), not from a generic hook — that's how collection-scoped containers (`FlashcardsView`, `ReviewedWordsView`, `CollectionView`) get `collectionId`.
- Collection-scoped pages follow a picker → detail pattern: `/flashcards` and `/reviewed-words` are index routes that render `CollectionsView` as a picker (`variant="pick-flashcards"` / `"pick-reviewed"`), and navigating a card goes to `/flashcards/$collectionId` or `/reviewed-words/$collectionId`. `/collections` renders the same `CollectionsView` with `variant="manage"` (shows both "See collection" and "Learn vocabulary" links, plus the create-collection button). `CollectionCard` branches its action button(s) on this `variant`.
- Auth gating is done with HOCs wrapping route components, not route guards: `withAuth` (redirects to `/` if no user), `withPublicOnly` (redirects to `/collections` if already logged in), `withAdmin` (redirects non-admins to `/collections`). Admin role exists in the schema/HOC but nothing currently uses `withAdmin`.
- Two separate data layers coexist on purpose: **Apollo/GraphQL** for flashcard and collection CRUD, **TanStack Query/axios** (`apiInstance`, `requestService.ts`) for auth, user profile, Cloudinary image upload/delete, and Tatoeba example-sentence search. Don't move REST endpoints into GraphQL or vice versa without a reason — image upload in particular is REST-only (`/api/cloudinary/...`), the GraphQL schema has no image mutations.
- `useFlashcards({ collectionId })` (`hooks/graphql/useFlashcards.tsx`) is the composed hook every collection-scoped view uses — it bundles `useGetCollectionFlashcards` with the create/update/remove mutation hooks. `useCollections({ userId })` is the equivalent for collections, now also exposing `handleCreateCollection`. Prefer extending these composed hooks over calling the lower-level query/mutation hooks directly from containers.
- Auth token lives in `localStorage` (`auth_token`) and is attached by both `apiInstance` (axios default header, set in `AuthProvider`) and `apolloClient`'s `authLink` independently — if you change how the token is stored, update both.

### Server
- `src/index.ts` wires one Express app: `graphql-yoga` mounted at `/graphql`, and REST routers mounted under `/api/*` (`auth`, `user`, `tatoeba`, `cloudinary`, `scrap`). The `scrap` routes drive a Puppeteer-based scraper (`services/scrapperService.ts`) that seeds `global`-type collections (e.g. JLPT word lists) from external sites — slow/manual, not meant to run in CI.
- GraphQL context (`src/graphql/context.ts`) decodes the JWT from the `Authorization` header per-request and exposes `requireAuth()`/`requireAdmin()`; every resolver that touches user data calls `context.requireAuth()` first.
- REST auth instead uses the `authenticateToken` Express middleware (`src/middleware/index.ts`), which decodes the same JWT and sets `req.userId`/`req.userRole`. GraphQL and REST each re-implement their own JWT check — keep both in sync if the token shape changes (`src/utils/common.ts` has `verifyJWT`/`hashPassword`).
- DB access is Drizzle ORM (`src/db/schema.ts`). Key relationship: `flashcard` ↔ `collection` is many-to-many through `collection_flashcard`; a user's visible collections are `global`-type ones (visible to everyone) plus `custom`-type ones they've activated via `user_active_collections` (see the `userCollections` resolver in `src/graphql/resolvers.ts` for the exact `global OR has-active-row` logic). Creating a collection must also insert into `user_active_collections` for the creator, or it won't show up in their `userCollections` query.
- Singular GraphQL queries (`collection`, `flashcard`) must resolve to a single object or `null` — Drizzle's `.select()` returns an array, so resolvers destructure `const [x] = await db.select()...` and return `x ?? null`. Don't revert to returning the raw array.

## Environments / deployment notes
- Prod frontend serves from `/graphql` and `/api` (same-origin, see `isProd` checks in `lib/apolloClient.ts` and `lib/const.ts`); dev points explicitly at `http://localhost:5000`.
- Deployed to Google Cloud Run; images are tagged and pushed to Artifact Registry (`us-central1-docker.pkg.dev/renshuu-457316/renshuu-repo/...`) — see README.md for the exact docker tag/push commands and the Postgres dump/restore workflow used for moving data between environments.
