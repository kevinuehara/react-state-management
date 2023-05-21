import style from "./Input.module.css";

interface InputProps {
  value?: string;
  label: string;
  placeholder?: string;
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ label, placeholder, onChange, value }: InputProps) => {
  return (
    <div className={style.inputContainer}>
      <p className={style.inputLabel}>{label}</p>
      <input
        value={value}
        className={style.input}
        type="text"
        name={label}
        id={label}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
