import { useSelector } from "react-redux";
import { selectTheme } from "./redux/theme/slice";
import { FormTodo } from "./components/FormTodo";
import { ListTodo } from "./components/ListTodo";

function App() {
  const color = useSelector(selectTheme);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: color === "LIGHT" ? "#fff" : "#000",
      }}
    >
      <FormTodo />
      <ListTodo />
    </div>
  );
}

export default App;
