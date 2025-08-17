import { style } from "@vanilla-extract/css";
import { palette } from "../../theme/palettes";

export const background = style({
  background: `linear-gradient(180deg, ${palette.background}, ${palette.primary})`,
});
