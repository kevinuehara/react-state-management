import { useAtom } from "jotai";
import { ColorType } from "./atoms/theme/types";
import { changeTheme, theme } from "./atoms/theme/store";
import { FormTodo } from "./components/FormTodo";
import { ListTodo } from "./components/ListTodo";

function App() {
  const [color] = useAtom(theme);

  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: color === ColorType.LIGHT ? "#fff" : "#000",
        }}
      >
        <FormTodo />
        <ListTodo />
      </div>
    </>
  );
}

export default App;
