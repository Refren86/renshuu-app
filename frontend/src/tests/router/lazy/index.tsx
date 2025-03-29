import { createLazyRoute } from "@tanstack/react-router";

import { FileRoutesById } from "@/routeTree.gen";
import { HomeView } from "@/containers/HomeView/HomeView";

export default function Route(id: keyof FileRoutesById) {
  return createLazyRoute(id)({
    component: HomeView,
  });
}
