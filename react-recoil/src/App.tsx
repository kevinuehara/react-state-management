import { useRecoilValue } from "recoil";
import { FormTodo } from "./components/FormTodo";
import { ListTodo } from "./components/ListTodo";
import { themeState } from "./store/theme";
import { ColorTypes } from "./store/theme/types";

function App() {
  const color = useRecoilValue(themeState);

  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: color === ColorTypes.LIGHT ? "#fff" : "#000",
        }}
      >
        <FormTodo />
        <ListTodo />
      </div>
    </>
  );
}

export default App;
