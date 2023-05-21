import { useAtom } from "jotai";
import button from "./button.module.css";
import { changeTheme } from "../../atoms/theme/store";

interface ButtonChangeThemeProps {
  label: string;
}

export const ButtonChangeTheme = ({ label }: ButtonChangeThemeProps) => {
  const [, changeColor] = useAtom(changeTheme);

  return (
    <button className={button.btn} onClick={changeColor}>
      {label}
    </button>
  );
};
