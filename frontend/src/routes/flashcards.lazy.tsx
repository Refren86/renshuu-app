import FlashcardsView from "@/containers/FlashcardsView/FlashcardsView";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/flashcards")({
  component: FlashcardsView,
});
