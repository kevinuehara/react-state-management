import { useAtom } from "jotai";
import style from "./ListTodo.module.css";
import { removeTodoAtom, todos as todosStore } from "../../atoms/todo/store";

export const ListTodo = () => {
  const [todos] = useAtom(todosStore);
  const [, setRemoveTodo] = useAtom(removeTodoAtom);

  return (
    <ul>
      {todos.map((todo) => (
        <li className={style.item} key={todo.id}>
          <label>{todo.text}</label>
          <i
            className={style.removeIcon}
            onClick={() => setRemoveTodo(todo.id)}
          />
        </li>
      ))}
    </ul>
  );
};
