import { atom } from "jotai";
import { Todo } from "./types";

export const removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => todo.id !== id);

export const addTodo = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text,
    done: false,
  },
];

//Jotai
export const newTodoAtom = atom("");
export const todos = atom<Todo[]>([]);
export const addTodoAtom = atom(null, (get, set) => {
  set(todos, addTodo(get(todos), get(newTodoAtom)));
  set(newTodoAtom, "");
});
export const removeTodoAtom = atom(null, (get, set, id: number) => {
  set(todos, removeTodo(get(todos), id));
});
