import type React from "react";
import { Typography } from "../../Typography/Typography";
import { description } from "./cardDescription.css";

type CardDescriptionProps = React.PropsWithChildren;

export function CardDescription({ children }: CardDescriptionProps) {
  return (
    <Typography
      tag="p"
      variant="h4"
      align="justify"
      className={description}
    >
      {children}
    </Typography>
  );
}
