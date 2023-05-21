import { useDispatch } from "react-redux";
import button from "./button.module.css";
import { changeTheme } from "../../redux/theme/slice";

interface ButtonChangeThemeProps {
  label: string;
}

export const ButtonChangeTheme = ({ label }: ButtonChangeThemeProps) => {
  const dispatch = useDispatch();
  return (
    <button className={button.btn} onClick={() => dispatch(changeTheme())}>
      {label}
    </button>
  );
};
