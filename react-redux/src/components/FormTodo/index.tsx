import style from "./Form.module.css";
import { Button } from "../Button";
import { Input } from "../Input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todo/slice";

export const FormTodo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo(todo));
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
