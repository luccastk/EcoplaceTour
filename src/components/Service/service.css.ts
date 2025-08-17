import { style } from "@vanilla-extract/css";
import { palette } from "../../theme/palettes";
import { space } from "../../theme/spaces";

export const containerService = style({
  background: palette.background,
  padding: `${space.lg} 0`,
});
