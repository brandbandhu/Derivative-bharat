import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

if (window.location.hostname === "www.derivativebharat.com") {
  const { pathname, search, hash } = window.location;
  window.location.replace(`https://derivativebharat.com${pathname}${search}${hash}`);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
