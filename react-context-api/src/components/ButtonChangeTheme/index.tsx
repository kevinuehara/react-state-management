import { useTheme } from "../../hooks/useTheme";
import button from "./button.module.css";

interface ButtonChangeThemeProps {
  label: string;
}

export const ButtonChangeTheme = ({ label }: ButtonChangeThemeProps) => {
  const { changeColor } = useTheme();
  return (
    <button className={button.btn} onClick={changeColor}>
      {label}
    </button>
  );
};
