import { Link } from "@tanstack/react-router";

import { Wrapper } from "./Wrapper";

export const Header = () => {
  return (
    <header>
      <Wrapper>
        <nav className="p-3 flex gap-x-4">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>{" "}
          <Link to="/flashcards" className="[&.active]:font-bold">
            Flashcards
          </Link>
          <Link to="/reviewed-words" className="[&.active]:font-bold">
            Reviewed
          </Link>
        </nav>
      </Wrapper>
    </header>
  );
};
