import { useTodo } from "../../hooks/useTodo";
import style from "./ListTodo.module.css";

export const ListTodo = () => {
  const { removeTodo, todos } = useTodo();

  return (
    <ul>
      {todos.map((todo) => (
        <li className={style.item} key={todo.id}>
          <label>{todo.label}</label>
          <i className={style.removeIcon} onClick={() => removeTodo(todo.id)} />
        </li>
      ))}
    </ul>
  );
};
