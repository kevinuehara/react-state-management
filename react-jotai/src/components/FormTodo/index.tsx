import style from "./Form.module.css";
import { Button } from "../Button";
import { Input } from "../Input";
import { useAtom } from "jotai";
import { addTodoAtom, newTodoAtom } from "../../atoms/todo/store";

export const FormTodo = () => {
  const [newTodo, setNewTodo] = useAtom(newTodoAtom);
  const [, setAddTodo] = useAtom(addTodoAtom);

  return (
    <div className={style.formContainer}>
      <Input
        value={newTodo}
        label="Todo"
        onChange={(evt) => setNewTodo(evt.target.value)}
      />
      <Button label="Adicionar" onClick={setAddTodo} />
    </div>
  );
};
