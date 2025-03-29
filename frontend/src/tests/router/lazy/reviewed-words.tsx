import { createLazyRoute } from "@tanstack/react-router";

import { FileRoutesById } from "@/routeTree.gen";
import { ReviewedWordsView } from "@/containers/ReviewedWordsView/ReviewedWordsView";

export default function Route(id: keyof FileRoutesById) {
  return createLazyRoute(id)({
    component: ReviewedWordsView,
  });
}
