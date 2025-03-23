import { act, cleanup, configure, render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import {
  RouterHistory,
  RouterProvider,
  createBrowserHistory,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

let history: RouterHistory;

beforeEach(() => {
  history = createBrowserHistory();
  expect(window.location.pathname).toBe("/");
});

afterEach(() => {
  history.destroy();
  window.history.replaceState(null, "root", "/");
  cleanup();
});

async function initRouter() {
  const rootRoute = createRootRoute();

  const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
  }).lazy(() => import("../router/lazy/index").then((d) => d.default("/")));

  const routeTree = rootRoute.addChildren([indexRoute]);
  const router = createRouter({ routeTree, history });

  await router.load();

  await act(() => render(<RouterProvider router={router} />));
}

describe("Header component", () => {
  configure({ reactStrictMode: true });

  it("renders all navigation links", async () => {
    await initRouter();

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Vocabulary")).toBeInTheDocument();
    expect(screen.getByText("Flashcards")).toBeInTheDocument();
    expect(screen.getByText("Reviewed")).toBeInTheDocument();
  });
});
