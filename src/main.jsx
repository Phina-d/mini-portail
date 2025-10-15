import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// ✅ Pas de <Router> ici, il est déjà dans App.jsx
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
