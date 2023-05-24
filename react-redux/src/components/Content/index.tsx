import { useSelector } from "react-redux";
import { getTheme } from "../../redux/theme/slice";

interface ContentProps {
  text: string;
}

export const Content = ({ text }: ContentProps) => {
  const isDark = useSelector(getTheme);

  return (
    <div
      style={{
        height: "30vh",
        width: "100vw",
        color: isDark ? "#fff" : "#111827",
        backgroundColor: isDark ? "#111827" : "#fff",
      }}
    >
      {text}
    </div>
  );
};
