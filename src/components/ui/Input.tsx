import type React from "react";

export type InputProps = {
  label?: string;
  multiline?: boolean;
} & (
  | React.InputHTMLAttributes<HTMLInputElement>
  | React.TextareaHTMLAttributes<HTMLTextAreaElement>
);

const InputOrTextArea = (props: InputProps) => {
  if (props.multiline) {
    return (
      <textarea
        {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
      />
    );
  }
  return <input {...(props as React.InputHTMLAttributes<HTMLInputElement>)} />;
};

export const Input = ({ label, className, ...rest }: InputProps) => {
  return (
    <div className="flex flex-col">
      {label && <label className="text-sm">{label}</label>}
      <InputOrTextArea
        className={`resize-none bg-background rounded-sm p-1.5 px-3.5 font-primary outline-0 placeholder:text-florest ${className}`}
        {...rest}
      />
    </div>
  );
};
