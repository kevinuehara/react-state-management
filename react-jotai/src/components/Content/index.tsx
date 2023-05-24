import { useAtom } from "jotai";
import { isDark as isDarkState } from "../../atoms/theme/store";

interface ContentProps {
  text: string;
}

export const Content = ({ text }: ContentProps) => {
  const [isDark] = useAtom(isDarkState);

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
