import { createLazyFileRoute } from "@tanstack/react-router";

import { withPublicOnly } from "@/hocs/withPublicOnly";
import { StartView } from "@/containers/StartView/StartView";

export const Route = createLazyFileRoute("/")({
  component: withPublicOnly(StartView),
});
