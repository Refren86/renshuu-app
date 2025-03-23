import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import { render, type RenderOptions } from "@testing-library/react";
import { RouterProvider, createMemoryHistory, createRouter } from "@tanstack/react-router";

import { routeTree } from "@/routeTree.gen";
import { StrictMode } from "react";

interface CustomRenderOptions extends Omit<RenderOptions, "wrapper"> {
  initialRoute?: string;
}

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
export function renderWithRouter(
  ui: React.ReactElement,
  { initialRoute = "/", ...renderOptions }: CustomRenderOptions = {}
) {
  if (typeof window === "undefined") {
    throw new Error("renderWithRouter must only be used in a client-side environment.");
  }

  const memoryHistory = createMemoryHistory({
    initialEntries: [initialRoute],
  });

  const router = createRouter({
    routeTree,
    history: memoryHistory,
  });

  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <StrictMode>
      <RouterProvider router={router} />
      {children}
    </StrictMode>
  );

  return {
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
    router,
  };
}
