export enum ColorType {
  LIGHT = "LIGHT",
  DARK = "DARK",
}

export interface ThemeProviderState {
  color: ColorType;
  changeColor?: VoidFunction;
}
