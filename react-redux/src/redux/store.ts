import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme/slice";
import todoReducer from "./todo/slice";

export default configureStore({
  reducer: {
    theme: themeReducer,
    todo: todoReducer,
  },
});
