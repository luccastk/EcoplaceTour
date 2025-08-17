import { style } from "@vanilla-extract/css";
import { palette } from "../../theme/palettes";
import { space } from "../../theme/spaces";

export const background = style({
  padding: `${space.lg} 0`,
  background: `linear-gradient(180deg,${palette.primary}, ${palette.background})`,
});
