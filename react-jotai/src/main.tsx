import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider as JotaiProvider } from "jotai";
import { ButtonChangeTheme } from "./components/ButtonChangeTheme/index.tsx";
import { Content } from "./components/Content/index.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <JotaiProvider>
      <ButtonChangeTheme label="Change Theme" />
      <Content text="Hello World!" />
      <App />
    </JotaiProvider>
  </React.StrictMode>
);
