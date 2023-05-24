import { PropsWithChildren, createContext, useState } from "react";
import { ThemeProviderState } from "./types";

const defaultValues: ThemeProviderState = {
  isDark: false,
};

export const ThemeContext = createContext<ThemeProviderState>(defaultValues);

export const ThemeContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [isDark, setIsDark] = useState<boolean>(false);

  const changeColor = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, changeColor }}>
      {children}
    </ThemeContext.Provider>
  );
};
