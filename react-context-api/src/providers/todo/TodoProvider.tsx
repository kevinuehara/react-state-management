import React, { PropsWithChildren, createContext, useState } from "react";
import { ITodo, TodoProviderState } from "./types";

const defaultTodoStateValues: TodoProviderState = {
  todos: [],
  addTodo: () => null,
  removeTodo: () => null,
};

export const TodoContext = createContext<TodoProviderState>(
  defaultTodoStateValues
);

export const TodoProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (label: string) => {
    const newTodo = {
      label,
      id: Math.random() * 100,
      done: false,
    };
    setTodos((todos) => [...todos, newTodo]);
  };

  const removeTodo = (id: number) => {
    const removed = todos.filter((todo) => todo.id !== id);
    setTodos(removed);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
