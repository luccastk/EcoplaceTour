import { style } from "@vanilla-extract/css";
import { gap } from "../../theme/spaces";

export const head = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: gap.md,
});

export const container = style({
  maxWidth: "800px",
  margin: "0 auto",
});
