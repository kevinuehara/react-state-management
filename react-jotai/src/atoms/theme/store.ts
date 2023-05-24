import { atom } from "jotai";

export const isDark = atom(false);
export const changeTheme = atom(null, (get, set) => {
  set(isDark, !get(isDark));
});
