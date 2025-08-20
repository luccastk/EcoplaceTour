import type React from "react";
import { Typography } from "../../Typography";

export function Title({ children }: React.PropsWithChildren) {
  return (
    <Typography tag="h3" variant="h3" w="bold" align="center">
      {children}
    </Typography>
  );
}
