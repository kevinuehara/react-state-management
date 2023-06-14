import style from "./Form.module.css";
import { Button } from "../Button";
import { Input } from "../Input";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../../store/todo";
import { ITodo } from "../../store/todo/types";

export const FormTodo = () => {
  const [todo, setTodo] = useState("");
  const setTodoState = useSetRecoilState(todoListState);

  const handleAddTodo = () => {
    const newTodo: ITodo = {
      id: Math.random() * 1000,
      text: todo,
      done: false,
    };

    setTodoState((state) => [...state, newTodo]);
    setTodo("");
  };

  return (
    <div className={style.formContainer}>
      <Input
        value={todo}
        label="Todo"
        onChange={(evt) => setTodo(evt.target.value)}
      />
      <Button label="Add" onClick={handleAddTodo} />
    </div>
  );
};
