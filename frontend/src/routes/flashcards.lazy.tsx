import { createLazyFileRoute } from "@tanstack/react-router";

import { withAuth } from "@/hocs/withAuth";
import { FlashcardsView } from "@/containers/FlashcardsView/FlashcardsView";

export const Route = createLazyFileRoute("/flashcards")({
  component: withAuth(FlashcardsView),
});
