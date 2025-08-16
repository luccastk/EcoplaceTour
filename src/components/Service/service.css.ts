import { style } from "@vanilla-extract/css";
import { palette } from "../../theme/palettes";
import { gap, space } from "../../theme/spaces";

export const containerService = style({
  background: palette.background,
  padding: `${space.lg} 0`,
});

export const tags = style({
  display: "flex",
  flexDirection: "column",
  gap: gap.md,
  marginTop: "auto",
});
