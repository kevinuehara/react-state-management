import { useSetRecoilState } from "recoil";
import button from "./button.module.css";
import { themeState } from "../../store/theme";
import { ColorTypes } from "../../store/theme/types";

interface ButtonChangeThemeProps {
  label: string;
}

export const ButtonChangeTheme = ({ label }: ButtonChangeThemeProps) => {
  const setChangeColor = useSetRecoilState(themeState);

  const handleChangeColor = () => {
    setChangeColor((color) =>
      color === ColorTypes.LIGHT ? ColorTypes.DARK : ColorTypes.LIGHT
    );
  };

  return (
    <button className={button.btn} onClick={handleChangeColor}>
      {label}
    </button>
  );
};
