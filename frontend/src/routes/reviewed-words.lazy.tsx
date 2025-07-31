import { createLazyFileRoute } from "@tanstack/react-router";

import { withAuth } from "@/hocs/withAuth";
import { ReviewedWordsView } from "@/containers/ReviewedWordsView/ReviewedWordsView";

export const Route = createLazyFileRoute("/reviewed-words")({
  component: withAuth(ReviewedWordsView),
});
