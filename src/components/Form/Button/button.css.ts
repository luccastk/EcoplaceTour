import { style } from "@vanilla-extract/css";
import { palette } from "../../../theme/palettes";
import { radii } from "../../../theme/radii";
import { space } from "../../../theme/spaces";

export const button = style({
  cursor: "pointer",
  padding: `${space.xs} ${space.sm}`,
  borderRadius: radii.md,
  color: palette.white,
  fontWeight: 600,
  background: palette.primary,
  transition: "background .3s ease",
  selectors: {
    "&:hover": {
      background: "hsla(152, 78%, 25%, 0.8)",
    },
  },
});
