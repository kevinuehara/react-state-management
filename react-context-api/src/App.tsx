import { FormTodo } from "./components/FormTodo";
import { ListTodo } from "./components/ListTodo";
import { useTheme } from "./hooks/useTheme";
import { ColorType } from "./providers/theme/types";

function App() {
  const { color } = useTheme();
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: color === ColorType.LIGHT ? "#fff" : "#111827",
      }}
    >
      <FormTodo />
      <ListTodo />
    </div>
  );
}

export default App;
