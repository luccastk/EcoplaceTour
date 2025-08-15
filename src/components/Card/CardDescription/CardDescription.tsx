import type React from "react";
import { Typography } from "../../Typography/Typography";
import { description } from "./cardDescription.css";

export function CardDescription({ children }: React.PropsWithChildren) {
  return (
    <Typography
      tag="p"
      variant="h4"
      align="center"
      color="disabled"
      className={description}
    >
      {children}
    </Typography>
  );
}
