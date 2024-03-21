import { routes } from "../app/routes";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { App } from "../app/app";
import { hydrateRoot } from "react-dom/client";

hydrateRoot(
  document.getElementById("root")!,
  <BrowserRouter>
    <App routes={routes} />
  </BrowserRouter>
);
