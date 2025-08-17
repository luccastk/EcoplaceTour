import { style } from "@vanilla-extract/css";
import { gap } from "../../../theme/spaces";

export const tags = style({
  display: "flex",
  flexDirection: "column",
  gap: gap.md,
  marginTop: "auto",
});
