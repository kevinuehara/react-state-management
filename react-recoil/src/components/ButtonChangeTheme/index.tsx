import { useSetRecoilState } from "recoil";
import button from "./button.module.css";
import { isDarkState } from "../../store/theme";

interface ButtonChangeThemeProps {
  label: string;
}

export const ButtonChangeTheme = ({ label }: ButtonChangeThemeProps) => {
  const setChangeColor = useSetRecoilState(isDarkState);

  const handleChangeColor = () => {
    setChangeColor((color) => !color);
  };

  return (
    <button className={button.btn} onClick={handleChangeColor}>
      {label}
    </button>
  );
};
