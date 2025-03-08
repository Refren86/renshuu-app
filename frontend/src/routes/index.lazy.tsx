import { createLazyFileRoute } from "@tanstack/react-router";

import { HomeView } from "@/containers/HomeView/HomeVIew";

export const Route = createLazyFileRoute("/")({
  component: HomeView,
});
