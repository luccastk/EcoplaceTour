import { style } from "@vanilla-extract/css";
import { gap } from "../../../theme/spaces";

export const tag = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: gap.xs,
  marginTop: "auto",
});
