import { render } from "@testing-library/react";
import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import { createMemoryHistory, createRouter, getRouterContext } from "@tanstack/react-router";

import { routeTree } from "@/routeTree.gen";

// Apollo client wrapper
export function renderWithApollo(children: React.ReactElement, mocks: MockedResponse[] = [], options = {}) {
  return render(
    <MockedProvider mocks={mocks} addTypename={false}>
      {children}
    </MockedProvider>,
    options
  );
}

// Tanstack router wrapper
export function renderWithRouter(children: React.ReactElement, { route = "/", params = {} } = {}) {
  const RouterContext = getRouterContext();

  // Create a memory history
  const memoryHistory = createMemoryHistory({
    initialEntries: [route],
  });

  // Create a test router instance
  const router = createRouter({
    routeTree,
    history: memoryHistory,
  });

  // Initialize the router
  router.navigate({
    to: route,
    params,
  });

  return {
    ...render(<RouterContext.Provider value={router}>{children}</RouterContext.Provider>),
    // Return additional router utilities
    router,
    history: memoryHistory,
  };
}

// Combined wrapper for both Apollo and Router
export function renderWithAll(children: React.ReactElement, { mocks = [], route = "/", params = {} } = {}) {
  const RouterContext = getRouterContext();

  const memoryHistory = createMemoryHistory({
    initialEntries: [route],
  });

  const router = createRouter({
    routeTree,
    history: memoryHistory,
  });

  router.navigate({
    to: route,
    params,
  });

  return {
    ...render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <RouterContext.Provider value={router}>{children}</RouterContext.Provider>
      </MockedProvider>
    ),
    router,
    history: memoryHistory,
  };
}
