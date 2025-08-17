import { input } from "./input.css";

type InputProps = {
  label: string;
  name: string;
  type?: "text" | "email" | "date";
};

export function Input({ label, name, type = "text", ...rest }: InputProps) {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        name={name}
        type={type}
        className={input}
        required
        {...rest}
      />
    </div>
  );
}
