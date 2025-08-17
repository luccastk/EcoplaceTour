import type React from "react";
import { description, type CardDescriptionVariant } from "./description.css";

type DescriptionProps = React.PropsWithChildren & CardDescriptionVariant;

export function Description({ color, children }: DescriptionProps) {
  return <p className={description({ color })}>{children}</p>;
}
