import { useContext } from "react";
import { ThemeContext } from "../providers/theme/ThemeProvider";

export const useTheme = () => {
  return useContext(ThemeContext);
};
