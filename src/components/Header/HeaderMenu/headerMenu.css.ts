import { style } from "@vanilla-extract/css";
import { palette } from "../../../theme/palettes";
import { radii } from "../../../theme/radii";
import { gap, space } from "../../../theme/spaces";

export const dropdown = style({
  position: "fixed",
  left: "20px",
  right: "20px",
  background: palette.background,
  overflow: "hidden",
  borderRadius: radii.md,
  transform: "translateY(-10px) scale(0.95)",
  opacity: 0,
  pointerEvents: "none",
  transition:
    "opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
  transformOrigin: "top center",
  "@media": {
    "screen and (min-width: 440px)": {
      left: "auto",
    },
    "screen and (min-width: 768px)": {
      display: "none",
    },
  },
});

export const open = style({
  transform: "translateY(25px) scale(1)",
  opacity: 1,
  pointerEvents: "auto",
});

export const menu = style({
  display: "flex",
  flexDirection: "column",
  gap: gap.xs,
  padding: space.xs,
});
