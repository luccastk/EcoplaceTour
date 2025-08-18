import type React from "react";
import { input } from "../Input/input.css";

type TextareaProps = {
  label: string;
  name: string;
} & React.PropsWithChildren;

export function Textarea({ label, name, children }: TextareaProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label htmlFor={name}>{label}</label>
      <textarea name={name} id={name} rows={6} className={input}>
        {children}
      </textarea>
    </div>
  );
}
