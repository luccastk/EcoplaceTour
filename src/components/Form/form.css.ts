import { style } from "@vanilla-extract/css";
import { gap, space } from "../../theme/spaces";

export const content = style({
  display: "flex",
  flexDirection: "column",
  gap: gap.md,
  padding: `${space.md} ${space.sm}`,
});
