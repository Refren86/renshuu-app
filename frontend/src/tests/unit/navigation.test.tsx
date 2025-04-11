import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { RouterHistory, createBrowserHistory } from "@tanstack/react-router";
import { act, cleanup, configure, fireEvent, screen, waitFor } from "@testing-library/react";

import { sleep } from "@/lib";
import { initRouter } from "../test-utils";

let history: RouterHistory;

beforeEach(() => {
  history = createBrowserHistory();
});

afterEach(() => {
  history.destroy();
  window.history.replaceState(null, "root", "/");
  cleanup();
});

describe("Navigation", () => {
  configure({ reactStrictMode: true });

  it("shows all main links with working routing", async () => {
    const { router } = await initRouter(history);

    expect(router.state.location.pathname).toBe("/");
    expect(window.location.pathname).toBe("/");

    const startLink = await screen.findByRole("link", { name: "Start learning" });

    await sleep(2000);

    expect(startLink).toBeVisible();

    fireEvent.click(startLink);

    const homeLink = await screen.findByRole("link", { name: "Home" });
    const vocabularyLink = await screen.findByRole("link", { name: "Vocabulary" });
    const flashcardsLink = await screen.findByRole("link", { name: "Flashcards" });
    const reviewedLink = await screen.findByRole("link", { name: "Reviewed" });

    expect(homeLink).toBeInTheDocument();
    expect(vocabularyLink).toBeInTheDocument();
    expect(flashcardsLink).toBeInTheDocument();
    expect(reviewedLink).toBeInTheDocument();

    expect(router.state.location.pathname).toBe("/vocabulary");
    expect(window.location.pathname).toBe("/vocabulary");

    fireEvent.click(flashcardsLink);

    await waitFor(() => {
      expect(router.state.location.pathname).toBe("/flashcards");
      expect(window.location.pathname).toBe("/flashcards");
    });

    fireEvent.click(reviewedLink);

    await waitFor(() => {
      expect(router.state.location.pathname).toBe("/reviewed-words");
      expect(window.location.pathname).toBe("/reviewed-words");
    });

    fireEvent.click(vocabularyLink);

    await waitFor(() => {
      expect(router.state.location.pathname).toBe("/vocabulary");
      expect(window.location.pathname).toBe("/vocabulary");
    });

    fireEvent.click(homeLink);

    await waitFor(() => {
      expect(window.location.pathname).toBe("/");
      expect(router.state.location.pathname).toBe("/");
    });
  });

  it("shows 404 page with invalid route", async () => {
    const { router } = await initRouter(history);

    act(() => {
      history.push("/invalid-route");
    });

    await waitFor(() => {
      expect(router.state.location.pathname).toBe("/invalid-route");
      expect(window.location.pathname).toBe("/invalid-route");
    });

    const notFoundTitle = await screen.findByText(/page not found/i);
    expect(notFoundTitle).toBeInTheDocument();
  });
});
