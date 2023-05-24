import { createSlice } from "@reduxjs/toolkit";

export interface ThemeState {
  isDark: boolean;
}

const initialState: ThemeState = {
  isDark: false,
};

export const slice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      return { ...state, isDark: !state.isDark };
    },
  },
});

export const { changeTheme } = slice.actions;

export const getTheme = (state: { theme: ThemeState }) => state.theme.isDark;

export default slice.reducer;
