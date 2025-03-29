import { createLazyRoute } from "@tanstack/react-router";

import { FileRoutesById } from "@/routeTree.gen";
import FlashcardsView from "@/containers/FlashcardsView/FlashcardsView";

export default function Route(id: keyof FileRoutesById) {
  return createLazyRoute(id)({
    component: FlashcardsView,
  });
}
