import { useTheme } from "../../hooks/useTheme";

interface ContentProps {
  text: string;
}

export const Content = ({ text }: ContentProps) => {
  const { isDark } = useTheme();

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
