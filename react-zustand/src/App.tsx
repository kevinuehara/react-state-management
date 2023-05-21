import { ITheme, useTheme } from "./store";
import { ColorType } from "./store/types";

function App() {
  const color = useTheme((state: ITheme) => state.color);
  const changeColor = useTheme((state: ITheme) => state.changeTheme);
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: color === ColorType.LIGHT ? "#fff" : "#000",
        }}
      >
        <button onClick={changeColor}>Trocar tema</button>
      </div>
    </>
  );
}

export default App;
