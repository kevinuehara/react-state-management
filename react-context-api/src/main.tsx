import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeContextProvider } from "./providers/theme/ThemeProvider.tsx";
import { TodoProvider } from "./providers/todo/TodoProvider.tsx";
import { ButtonChangeTheme } from "./components/ButtonChangeTheme/index.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <TodoProvider>
        <ButtonChangeTheme label="Trocar tema" />
        <App />
      </TodoProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
