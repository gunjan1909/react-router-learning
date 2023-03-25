import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, HashRouter, MemoryRouter } from "react-router-dom";
//import { StaticRouter } from "react-router-dom/server";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StaticRouter> */}
    {/* <HashRouter> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </HashRouter> */}
    {/* </StaticRouter> */}
  </React.StrictMode>
);
