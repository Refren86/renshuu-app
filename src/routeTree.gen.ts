/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const ReviewedWordsLazyImport = createFileRoute('/reviewed-words')()
const FlashcardsLazyImport = createFileRoute('/flashcards')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const ReviewedWordsLazyRoute = ReviewedWordsLazyImport.update({
  path: '/reviewed-words',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/reviewed-words.lazy').then((d) => d.Route),
)

const FlashcardsLazyRoute = FlashcardsLazyImport.update({
  path: '/flashcards',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/flashcards.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/flashcards': {
      id: '/flashcards'
      path: '/flashcards'
      fullPath: '/flashcards'
      preLoaderRoute: typeof FlashcardsLazyImport
      parentRoute: typeof rootRoute
    }
    '/reviewed-words': {
      id: '/reviewed-words'
      path: '/reviewed-words'
      fullPath: '/reviewed-words'
      preLoaderRoute: typeof ReviewedWordsLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/flashcards': typeof FlashcardsLazyRoute
  '/reviewed-words': typeof ReviewedWordsLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/flashcards': typeof FlashcardsLazyRoute
  '/reviewed-words': typeof ReviewedWordsLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/flashcards': typeof FlashcardsLazyRoute
  '/reviewed-words': typeof ReviewedWordsLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/flashcards' | '/reviewed-words'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/flashcards' | '/reviewed-words'
  id: '__root__' | '/' | '/flashcards' | '/reviewed-words'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  FlashcardsLazyRoute: typeof FlashcardsLazyRoute
  ReviewedWordsLazyRoute: typeof ReviewedWordsLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  FlashcardsLazyRoute: FlashcardsLazyRoute,
  ReviewedWordsLazyRoute: ReviewedWordsLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/flashcards",
        "/reviewed-words"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/flashcards": {
      "filePath": "flashcards.lazy.tsx"
    },
    "/reviewed-words": {
      "filePath": "reviewed-words.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
