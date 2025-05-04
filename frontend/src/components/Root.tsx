import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Outlet } from "@tanstack/react-router";

import { Providers } from "./Providers";

const isProd = import.meta.env.PROD;

const Root = () => {
  return (
    <Providers>
      <main className="overflow-x-hidden">
        <Outlet />
        {!isProd && <TanStackRouterDevtools />}
      </main>
    </Providers>
  );
};

export default Root;
