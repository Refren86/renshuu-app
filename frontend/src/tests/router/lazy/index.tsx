import { createLazyRoute } from "@tanstack/react-router";

import { FileRoutesById } from "@/routeTree.gen";
import { StartView } from "@/containers/StartView/StartView";

export default function Route(id: keyof FileRoutesById) {
  return createLazyRoute(id)({
    component: StartView,
  });
}
