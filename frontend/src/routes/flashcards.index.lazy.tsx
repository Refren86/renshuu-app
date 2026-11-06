import { createLazyFileRoute } from "@tanstack/react-router";

import { withAuth } from "@/hocs/withAuth";
import { CollectionsView } from "@/containers/CollectionsView/CollectionsView";

export const Route = createLazyFileRoute("/flashcards/")({
  component: withAuth(() => <CollectionsView variant="pick-flashcards" />),
});
