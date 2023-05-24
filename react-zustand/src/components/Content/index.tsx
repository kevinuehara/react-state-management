import { ITheme, useTheme } from "../../store/theme";

interface ContentProps {
  text: string;
}

export const Content = ({ text }: ContentProps) => {
  const isDark = useTheme((state: ITheme) => state.isDark);

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
