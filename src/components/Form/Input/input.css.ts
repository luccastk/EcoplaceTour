import { style } from "@vanilla-extract/css";
import { palette } from "../../../theme/palettes";
import { size } from "../../../theme/sizes";

export const input = style({
  width: "100%",
  fontFamily: "Helvetica, Arial, sans-serif;",
  fontSize: size.sm,
  background: palette.background,
  padding: "6px 12px",
  border: `1px solid ${palette.border}`,
  borderRadius: "4px",
});

export const label = style({
  fontSize: size.sm,
});
