import { createLazyRoute } from "@tanstack/react-router";

import { FileRoutesById } from "@/routeTree.gen";
import { VocabularyView } from "@/containers/VocabularyView/VocabularyView";

export default function Route(id: keyof FileRoutesById) {
  return createLazyRoute(id)({
    component: VocabularyView,
  });
}
