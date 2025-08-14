import { style } from "@vanilla-extract/css";
import { palette } from "../../theme/palettes";
import { radii } from "../../theme/radii";
import { responsiveStyle } from "../../theme/responsive.css";
import { gap, space } from "../../theme/spaces";

export const menu = style([
  {
    position: "absolute",
    top: "105%",
    background: palette.background,
    left: "8px",
    right: "8px",
    borderRadius: radii.md,
  },
  responsiveStyle({
    tablet: { display: "none", pointerEvents: "none" },
    desktop: { display: "none", pointerEvents: "none" },
  }),
]);

export const container = style({
  padding: space.sm,
  display: "flex",
  flexDirection: "column",
  gap: gap.md,
});

export const nav = style({
  display: "flex",
  flexDirection: "column",
  gap: gap.sm,
});

export const linkStyle = style({
  padding: space.xs,
  borderRadius: radii.sm,
});

export const active = style({
  background: palette.primary,
  color: palette.white,
});
