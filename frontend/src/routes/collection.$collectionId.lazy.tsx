import { createLazyFileRoute } from "@tanstack/react-router";

import { withAuth } from "@/hocs/withAuth";
import { CollectionView } from "@/containers/CollectionView/CollectionView";

export const Route = createLazyFileRoute("/collection/$collectionId")({
  component: withAuth(CollectionView),
});
