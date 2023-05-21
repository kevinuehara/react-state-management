import { useRecoilValue, useSetRecoilState } from "recoil";
import style from "./ListTodo.module.css";
import { todoListState } from "../../store/todo";

export const ListTodo = () => {
  const todos = useRecoilValue(todoListState);
  const setTodoState = useSetRecoilState(todoListState);

  const handleRemoveTodo = (id: number) => {
    const removed = todos.filter((todo) => todo.id !== id);
    setTodoState(removed);
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li className={style.item} key={todo.id}>
          <label>{todo.text}</label>
          <i
            className={style.removeIcon}
            onClick={() => handleRemoveTodo(todo.id)}
          />
        </li>
      ))}
    </ul>
  );
};
