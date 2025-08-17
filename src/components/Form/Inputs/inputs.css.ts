import { style } from "@vanilla-extract/css";
import { gap } from "../../../theme/spaces";

export const layout = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  columnGap: gap.sm,
  rowGap: gap.sm,
});
