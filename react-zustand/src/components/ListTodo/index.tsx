import { useTodo } from "../../store/todo";
import { ITodoState } from "../../store/todo/types";
import style from "./ListTodo.module.css";

export const ListTodo = () => {
  const removeTodo = useTodo((state: ITodoState) => state.removeTodo);
  const todos = useTodo((state: ITodoState) => state.todos);

  return (
    <ul>
      {todos.map((todo) => (
        <li className={style.item} key={todo.id}>
          <label>{todo.text}</label>
          <i className={style.removeIcon} onClick={() => removeTodo(todo.id)} />
        </li>
      ))}
    </ul>
  );
};
