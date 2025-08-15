import { style } from "@vanilla-extract/css";
import { radii } from "../../../theme/radii";
import { gap, space } from "../../../theme/spaces";

export const card = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: gap.sm,
  padding: space.sm,
  background: "rgba(255, 255, 255, 0.2)",
  borderRadius: radii.md,
});
