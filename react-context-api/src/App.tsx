import { useTheme } from "./hooks/useTheme";
import { ColorType } from "./providers/theme/types";

function App() {
  const { color, changeColor } = useTheme();
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: color === ColorType.LIGHT ? "#fff" : "#000",
      }}
    >
      <button onClick={changeColor}>Trocar tema</button>
    </div>
  );
}

export default App;
