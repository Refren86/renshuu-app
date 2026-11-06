import { createLazyFileRoute } from "@tanstack/react-router";

import { withAuth } from "@/hocs/withAuth";
import { CollectionsView } from "@/containers/CollectionsView/CollectionsView";

export const Route = createLazyFileRoute("/collections")({
  component: withAuth(CollectionsView),
});
