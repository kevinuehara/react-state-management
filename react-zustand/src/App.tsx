import { FormTodo } from "./components/FormTodo";
import { ListTodo } from "./components/ListTodo";
import { ITheme, useTheme } from "./store/theme";
import { ColorType } from "./store/theme/types";

function App() {
  const color = useTheme((state: ITheme) => state.color);

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
