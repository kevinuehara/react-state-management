import { create } from "zustand";

export interface ITheme {
  isDark: boolean;
  changeTheme: VoidFunction;
}

export const useTheme = create<ITheme>((set) => ({
  isDark: false,
  changeTheme: () => {
    set((state: ITheme) => ({ isDark: !state.isDark }));
  },
}));
