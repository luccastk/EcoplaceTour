import { style } from "@vanilla-extract/css";
import { gap } from "../../../theme/spaces";

export const title = style({
  maxWidth: "900px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: gap.sm,
});
