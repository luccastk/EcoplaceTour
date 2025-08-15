import { style } from "@vanilla-extract/css";
import { gap, space } from "../../theme/spaces";

export const stack = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(225px, 300px))",
  justifyContent: "center",
  gap: gap.md,
  marginTop: space.md,
  "@media": {
    "screen and (max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },
});
