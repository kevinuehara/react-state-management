import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeContextProvider } from "./providers/theme/ThemeProvider.tsx";
import { TodoProvider } from "./providers/todo/TodoProvider.tsx";
import { ButtonChangeTheme } from "./components/ButtonChangeTheme/index.tsx";
import { Content } from "./components/Content/index.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ButtonChangeTheme label="Change theme" />
      <Content text="Hello World!" />
      <TodoProvider>
        <App />
      </TodoProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
