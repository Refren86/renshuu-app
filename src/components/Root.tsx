import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { useMatches, useMatch } from "@tanstack/react-router";

import {Header} from "./Header";
import { openDB } from "@/lib/db";
import { Providers } from "./Providers";
import { AnimatedOutlet } from "./AnimateOutlet";

const Root = () => {
  const matches = useMatches();
  const match = useMatch({ strict: false });
  const nextMatchIndex = matches.findIndex((d) => d.id === match.id) + 1;
  const nextMatch = matches[nextMatchIndex];

  useEffect(() => {
    openDB().catch(console.error);
  }, []);

  return (
    <Providers>
      <main className="overflow-x-hidden">
        <Header />
        <hr />
        <AnimatePresence mode="popLayout">
          <AnimatedOutlet key={nextMatch?.id || match.id} />
        </AnimatePresence>
        <TanStackRouterDevtools />
      </main>
    </Providers>
  );
};

export default Root;
