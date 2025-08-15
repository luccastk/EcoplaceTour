import { style } from "@vanilla-extract/css";
import { gap } from "../../../theme/spaces";

export const nav = style({
  display: "flex",
  gap: gap.md,
  alignItems: "center",
  justifyContent: "center",
  "@media": {
    "screen and (max-width: 768px)": {
      display: "none",
    },
  },
});
