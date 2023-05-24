import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITodo } from "./types";

const initialState: ITodo[] = [];

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: initialState,
  },
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: ITodo = {
        id: Math.random() * 1000,
        done: false,
        label: action.payload,
      };

      return { ...state, todos: [...state.todos, newTodo] };
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      const removed = state.todos.filter((todo) => todo.id !== action.payload);
      return { ...state, todos: removed };
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export const getTodos = (state: { todo: { todos: ITodo[] } }) =>
  state.todo.todos;

export default todoSlice.reducer;
