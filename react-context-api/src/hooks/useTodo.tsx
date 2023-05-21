import { useContext } from "react";
import { TodoContext } from "../providers/todo/TodoProvider";

export const useTodo = () => {
  return useContext(TodoContext);
};
