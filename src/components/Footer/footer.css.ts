import { style } from "@vanilla-extract/css";
import { palette } from "../../theme/palettes";

export const footer = style({
  background: `linear-gradient(160deg,${palette.secondary}, ${palette.primary})`,
});
