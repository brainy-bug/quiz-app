import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./components";
import { AppProvider } from "./context/context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
