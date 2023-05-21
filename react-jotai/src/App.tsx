import { useAtom } from "jotai";
import { changeTheme, theme } from "./atoms/theme";
import { ColorType } from "./atoms/types";

function App() {
  const [color] = useAtom(theme);
  const [_, setChangeColor] = useAtom(changeTheme);

  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: color === ColorType.LIGHT ? "#fff" : "#000",
        }}
      >
        <button onClick={setChangeColor}>Trocar Tema</button>
      </div>
    </>
  );
}

export default App;
