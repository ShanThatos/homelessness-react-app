import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./main/App";
import { BrowserRouter } from "react-router-dom";
import process from "process";

ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
).render(
  <React.StrictMode>
    <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
