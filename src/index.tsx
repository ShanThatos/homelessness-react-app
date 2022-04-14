import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./main/App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
