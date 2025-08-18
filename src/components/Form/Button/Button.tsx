import type React from "react";
import { button } from "./button.css";

export function Button({ children }: React.PropsWithChildren) {
  return (
    <button type="submit" className={button}>
      {children}
    </button>
  );
}
