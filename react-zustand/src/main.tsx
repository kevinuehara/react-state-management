import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ButtonChangeTheme } from "./components/ButtonChangeTheme/index.tsx";
import { Content } from "./components/Content/index.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ButtonChangeTheme label="Trocar tema" />
    <Content text="Hello World!" />
    <App />
  </React.StrictMode>
);
