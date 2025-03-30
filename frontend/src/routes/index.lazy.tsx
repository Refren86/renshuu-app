import { createLazyFileRoute } from "@tanstack/react-router";

import { StartView } from "@/containers/StartView/StartView";

export const Route = createLazyFileRoute("/")({
  component: StartView,
});
