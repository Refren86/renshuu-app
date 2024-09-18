import { AnimatePresence } from "framer-motion";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { useMatches, useMatch, Link } from "@tanstack/react-router";

import { Providers } from "./Providers";
import { AnimatedOutlet } from "./AnimateOutlet";

const Root = () => {
  const matches = useMatches();
  const match = useMatch({ strict: false });
  const nextMatchIndex = matches.findIndex((d) => d.id === match.id) + 1;
  const nextMatch = matches[nextMatchIndex];

  return (
    <Providers>
      <main>
        <nav className="p-2 flex gap-2">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>{" "}
          <Link to="/flashcards" className="[&.active]:font-bold">
            Flashcards
          </Link>
        </nav>
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
