import type React from "react";
import { Button } from "./Button/Button";
import { content } from "./form.css";
import { Input } from "./Input/Input";
import { Inputs } from "./Inputs/Inputs";
import { Textarea } from "./Textarea/Textarea";
import { Title } from "./Title/Title";

type FormProps = React.PropsWithChildren<{
  onSubmit?: (data: Record<string, FormDataEntryValue>) => void;
}>;

export function Form({ onSubmit, children }: FormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit) {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());
      onSubmit(data);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={content}>
      {children}
    </form>
  );
}

Form.Title = Title;
Form.Inputs = Inputs;
Form.Input = Input;
Form.Textarea = Textarea;
Form.Button = Button;
