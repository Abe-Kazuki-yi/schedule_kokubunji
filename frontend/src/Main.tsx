import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { logger } from "./utils/logger";
import App from "./App"; 

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
  logger.trace("index.tsx loaded: React app starting...");
} else {
  logger.error("Root element not found");
}