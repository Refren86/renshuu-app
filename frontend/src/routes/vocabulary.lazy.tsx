import { createLazyFileRoute } from "@tanstack/react-router";

import { withAuth } from "@/hocs/withAuth";
import { VocabularyView } from "@/containers/VocabularyView/VocabularyView";

export const Route = createLazyFileRoute("/vocabulary")({
  component: withAuth(VocabularyView),
});
