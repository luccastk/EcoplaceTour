import { Typography } from "../../Typography/Typography";

export function CardTitle({ children }: React.PropsWithChildren) {
  return (
    <Typography tag="h3" variant="h3" w="bold" align="center">
      {children}
    </Typography>
  );
}
