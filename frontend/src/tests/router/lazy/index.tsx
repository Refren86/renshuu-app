import { createLazyRoute } from "@tanstack/react-router";

import { FileRoutesById } from "@/routeTree.gen";
import { Header } from "@/components/Header";

export default function Route(id: keyof FileRoutesById) {
  return createLazyRoute(id)({
    component: Header,
  });
}
