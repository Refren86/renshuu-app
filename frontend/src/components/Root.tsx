import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { ENV } from "@/lib/const";

const Root = () => {
  return (
    <main className="overflow-x-hidden">
      <Outlet />

      {!ENV.IS_PROD && (
        <>
          <TanStackRouterDevtools />
          <ReactQueryDevtools initialIsOpen={false} />
        </>
      )}
    </main>
  );
};

export default Root;
