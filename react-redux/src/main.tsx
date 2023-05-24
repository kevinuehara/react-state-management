import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { Provider } from "react-redux";
import store from "./redux/store.ts";
import { ButtonChangeTheme } from "./components/ButtonChangeTheme/index.tsx";
import { Content } from "./components/Content/index.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ButtonChangeTheme label="Trocar Tema" />
      <Content text="Hello World!" />
      <App />
    </Provider>
  </React.StrictMode>
);
