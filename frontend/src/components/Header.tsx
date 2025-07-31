import { LogOut } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Wrapper } from "./Wrapper";
import { Button } from "./ui/button";
import { useAuth } from "@/hooks/useAuth";

export const Header = () => {
  const { logout } = useAuth();

  return (
    <header>
      <Wrapper>
        <div className="flex justify-between items-center py-3">
          <nav className="flex gap-x-4">
            <Link to="/vocabulary" className="[&.active]:font-bold">
              Vocabulary
            </Link>
            <Link to="/flashcards" className="[&.active]:font-bold">
              Flashcards
            </Link>
            <Link to="/reviewed-words" className="[&.active]:font-bold">
              Reviewed
            </Link>
          </nav>

          <Button size="sm" onClick={logout}>
            <LogOut size={16} />
            <span className="ml-2">Logout</span>
          </Button>
        </div>
      </Wrapper>
    </header>
  );
};
