import { useDispatch, useSelector } from "react-redux";
import style from "./ListTodo.module.css";
import { getTodos, removeTodo } from "../../redux/todo/slice";

export const ListTodo = () => {
  const dispatch = useDispatch();
  const todos = useSelector(getTodos);

  const handleRemoveTodo = (id: number) => {
    dispatch(removeTodo(id));
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li className={style.item} key={todo.id}>
          <label>{todo.label}</label>
          <i
            className={style.removeIcon}
            onClick={() => handleRemoveTodo(todo.id)}
          />
        </li>
      ))}
    </ul>
  );
};
