import { atom } from "recoil";
import { ColorTypes } from "./types";

export const themeState = atom({
  key: "Theme",
  default: ColorTypes.LIGHT,
});
