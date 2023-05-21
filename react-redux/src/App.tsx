import { useDispatch, useSelector } from "react-redux";
import { changeTheme, selectTheme } from "./redux/theme/slice";
import { useState } from "react";
import { ITodo } from "./redux/todo/types";
import { addTodo } from "./redux/todo/slice";

function App() {
  const [todo, setTodo] = useState<string>("");
  const dispatch = useDispatch();

  const color = useSelector(selectTheme);

  const handleChangeTheme = () => {
    dispatch(changeTheme());
  };

  const handleAddTodo = () => {
    const value: ITodo = {
      name: todo,
      id: Math.random() * 1000,
      done: false,
    };

    dispatch(addTodo(value));
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: color === "LIGHT" ? "#fff" : "#000",
      }}
    >
      <button onClick={handleChangeTheme}>Trocar tema</button>

      <input
        type="text"
        name="todo"
        id="todo"
        onChange={(evt) => setTodo(evt.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}

export default App;
