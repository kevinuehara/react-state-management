import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "jotai";
import { ButtonChangeTheme } from "./components/ButtonChangeTheme/index.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider>
      <ButtonChangeTheme label="Trocar tema" />
      <App />
    </Provider>
  </React.StrictMode>
);
