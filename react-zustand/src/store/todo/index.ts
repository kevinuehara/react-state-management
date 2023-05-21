import { create } from "zustand";
import { ITodo, ITodoState } from "./types";

export const useTodo = create<ITodoState>((set) => ({
  todos: [],
  addTodo: (text: string) => {
    const newTodo: ITodo = {
      id: Math.random() * 1000,
      text,
      done: false,
    };

    set((state: ITodoState) => ({
      todos: [...state.todos, newTodo],
    }));
  },
  removeTodo: (id: number) => {
    set((state: ITodoState) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  },
}));
