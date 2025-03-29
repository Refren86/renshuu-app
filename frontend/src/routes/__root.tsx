import { createRootRoute } from "@tanstack/react-router";

import Root from "@/components/Root";
import { NotFoundView } from "@/containers/NotFoundView/NotFoundView";

export const Route = createRootRoute({
  component: Root,
  notFoundComponent: NotFoundView,
});
