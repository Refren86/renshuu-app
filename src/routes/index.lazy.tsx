import { createLazyFileRoute } from "@tanstack/react-router";

import { HomeView } from "@/containers/HomeView/HomeView";

export const Route = createLazyFileRoute("/")({
  component: HomeView,
});

