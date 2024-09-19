import { Link } from "@tanstack/react-router";
import { Wrapper } from "./Wrapper";

export const Header = () => {
  return (
    <header>
      <Wrapper>
        <nav className="p-2 flex gap-2">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>{" "}
          <Link to="/flashcards" className="[&.active]:font-bold">
            Flashcards
          </Link>
        </nav>
      </Wrapper>
    </header>
  );
};
