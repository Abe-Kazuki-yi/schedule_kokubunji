import React  from "react";
import ReactDOM  from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { logger } from "./lib/log/logger";
import App from "./App"; 

logger.trace("index.tsx loaded: React app starting...");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);