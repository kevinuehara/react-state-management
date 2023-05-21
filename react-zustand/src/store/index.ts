import { create } from "zustand";
import { ColorType } from "./types";

export interface ITheme {
  color: ColorType;
  changeTheme: VoidFunction;
}

export const useTheme = create<ITheme>((set) => ({
  color: ColorType.LIGHT,
  changeTheme: () =>
    set((state: ITheme) => ({
      color: state.color === ColorType.LIGHT ? ColorType.DARK : ColorType.LIGHT,
    })),
}));
