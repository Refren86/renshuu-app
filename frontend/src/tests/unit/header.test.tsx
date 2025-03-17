import { describe, it, expect, vi } from "vitest";
import { screen, fireEvent } from "@testing-library/react";

import { Header } from "@/components/Header";
import { renderWithRouter } from "../utils";

describe("Header component", () => {
  it("renders navigation links correctly", () => {
    renderWithRouter(<Header />);

    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Vocabulary" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Flashcards" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Reviewed" })).toBeInTheDocument();
  });

  it("navigates to correct route when link is clicked", async () => {
    // Render with router utilities
    const { router } = renderWithRouter(<Header />);

    const navigateSpy = vi.spyOn(router, "navigate");

    fireEvent.click(screen.getByRole("link", { name: "Vocabulary" }));

    // Check if navigate was called with correct params
    expect(navigateSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        to: "/vocabulary",
      })
    );
  });
});
