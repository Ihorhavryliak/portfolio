import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Routers } from "./Routers/Routers";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routers />
    </HashRouter>
  </React.StrictMode>
);
