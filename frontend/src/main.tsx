import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Providers } from "./components/Providers";
import { AppRouter } from "./components/RouterProvider";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <AppRouter />
    </Providers>
  </StrictMode>
);
