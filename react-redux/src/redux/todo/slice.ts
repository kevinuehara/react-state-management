import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITodo } from "./types";

const initialState: ITodo[] = [];

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: initialState,
  },
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      return { ...state, todos: [...state.todos, action.payload] };
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
