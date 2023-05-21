import { atom } from "jotai";
import { ColorType } from "./types";

export const theme = atom(ColorType.LIGHT);
export const changeTheme = atom(null, (get, set) => {
  set(theme, get(theme) === ColorType.LIGHT ? ColorType.DARK : ColorType.LIGHT);
});
