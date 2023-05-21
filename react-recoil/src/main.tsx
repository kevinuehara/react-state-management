import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RecoilRoot } from "recoil";
import { ButtonChangeTheme } from "./components/ButtonChangeTheme/index.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <ButtonChangeTheme label="Trocar tema" />
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
