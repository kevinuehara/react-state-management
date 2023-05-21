import { createSlice } from "@reduxjs/toolkit";

export interface ThemeState {
  color: "LIGHT" | "DARK";
}

const initialState: ThemeState = {
  color: "LIGHT",
};

export const slice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      return { ...state, color: state.color === "LIGHT" ? "DARK" : "LIGHT" };
    },
  },
});

export const { changeTheme } = slice.actions;

export const selectTheme = (state: { theme: ThemeState }) => state.theme.color;

export default slice.reducer;
