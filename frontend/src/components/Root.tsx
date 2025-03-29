import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Outlet } from "@tanstack/react-router";

import { Providers } from "./Providers";

const Root = () => {
  return (
    <Providers>
      <main className="overflow-x-hidden">
        <Outlet />
        <TanStackRouterDevtools />
      </main>
    </Providers>
  );
};

export default Root;
