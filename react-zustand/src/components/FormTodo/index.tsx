import style from "./Form.module.css";
import { Button } from "../Button";
import { Input } from "../Input";
import { useState } from "react";
import { useTodo } from "../../store/todo";
import { ITodoState } from "../../store/todo/types";

export const FormTodo = () => {
  const [todo, setTodo] = useState("");
  const addTodo = useTodo((state: ITodoState) => state.addTodo);

  const handleAddTodo = () => {
    addTodo(todo);
    setTodo("");
  };

  return (
    <div className={style.formContainer}>
      <Input
        value={todo}
        label="Todo"
        onChange={(evt) => setTodo(evt.target.value)}
      />
      <Button label="Adicionar" onClick={handleAddTodo} />
    </div>
  );
};
