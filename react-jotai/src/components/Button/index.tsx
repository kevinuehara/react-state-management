import button from "./button.module.css";

interface ButtonProps {
  label: string;
  onClick?: VoidFunction;
}

export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button className={button.btn} onClick={onClick}>
      {label}
    </button>
  );
};
