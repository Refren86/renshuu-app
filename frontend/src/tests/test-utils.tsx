import { act, render } from "@testing-library/react";
import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import {
  Outlet,
  RouterHistory,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { DefaultOptions } from "@apollo/client";

import { NotFoundView } from "@/containers/NotFoundView/NotFoundView";

type ApolloWrapperProps = {
  children: React.ReactNode;
  mocks?: MockedResponse[];
  addTypename?: boolean;
  defaultOptions?: DefaultOptions;
};

export const ApolloWrapper: React.FC<ApolloWrapperProps> = ({
  children,
  mocks = [],
  addTypename = false,
  defaultOptions,
}) => {
  return (
    <MockedProvider mocks={mocks} addTypename={addTypename} defaultOptions={defaultOptions}>
      {children}
    </MockedProvider>
  );
};

// Tanstack router and apollo initializer
export async function initRouter(history: RouterHistory, mocks: MockedResponse[] = []) {
  const rootRoute = createRootRoute({
    component: () => (
      <ApolloWrapper mocks={mocks}>
        <Outlet />
      </ApolloWrapper>
    ),
    notFoundComponent: NotFoundView,
  });

  const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
  }).lazy(() => import("./router/lazy/index").then((d) => d.default("/")));

  const vocabularyRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/vocabulary",
  }).lazy(() => import("./router/lazy/vocabulary").then((d) => d.default("/vocabulary")));

  const flashcardsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/flashcards",
  }).lazy(() => import("./router/lazy/flashcards").then((d) => d.default("/flashcards")));

  const reviewedWordsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/reviewed-words",
  }).lazy(() => import("./router/lazy/reviewed-words").then((d) => d.default("/reviewed-words")));

  const routeTree = rootRoute.addChildren([indexRoute, vocabularyRoute, flashcardsRoute, reviewedWordsRoute]);

  const router = createRouter({ routeTree, history });

  await router.load();

  await act(() => render(<RouterProvider router={router} />));

  return { router };
}
