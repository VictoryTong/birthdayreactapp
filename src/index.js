import React from "react";
import ReactDOM from "react-dom/client";
import "./bootstrap.min.css";
import App from "./pages/App";
import "./index.css";
import "./pages/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
