import { ITheme, useTheme } from "../../store/theme";
import button from "./button.module.css";

interface ButtonChangeThemeProps {
  label: string;
}

export const ButtonChangeTheme = ({ label }: ButtonChangeThemeProps) => {
  const changeColor = useTheme((state: ITheme) => state.changeTheme);

  return (
    <button className={button.btn} onClick={changeColor}>
      {label}
    </button>
  );
};
