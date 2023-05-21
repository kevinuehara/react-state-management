import { PropsWithChildren, createContext, useState } from "react";
import { ColorType, ThemeProviderState } from "./types";

const defaultValues: ThemeProviderState = {
  color: ColorType.LIGHT,
};

export const ThemeContext = createContext<ThemeProviderState>(defaultValues);

export const ThemeContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [color, setColor] = useState<ColorType>(ColorType.LIGHT);

  const changeColor = () => {
    setColor(color === ColorType.LIGHT ? ColorType.DARK : ColorType.LIGHT);
  };

  return (
    <ThemeContext.Provider value={{ color, changeColor }}>
      {children}
    </ThemeContext.Provider>
  );
};
