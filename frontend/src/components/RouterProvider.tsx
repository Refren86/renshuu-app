import { RouterProvider, createRouter } from "@tanstack/react-router";

import { routeTree } from "../routeTree.gen";
import { useAuth } from "@/hooks/useAuth";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export const AppRouter = () => {
  const auth = useAuth();

  return <RouterProvider router={router} context={{ auth }} />;
};
