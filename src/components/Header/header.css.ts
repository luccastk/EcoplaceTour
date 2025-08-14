import { style } from "@vanilla-extract/css";
import { palette } from "../../theme/palettes";
import { responsiveStyle } from "../../theme/responsive.css";
import { gap, space } from "../../theme/spaces";

export const header = style({
  width: "100%",
  background: palette.background,
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 1000,
});

export const container = style({
  margin: "0 auto",
  padding: space.sm,
});

export const menubar = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const menuitem = style([
  { display: "none" },
  responsiveStyle({
    tablet: { display: "flex", alignItems: "center", gap: gap.xs },
    desktop: { display: "flex", alignItems: "center", gap: gap.md },
  }),
]);

export const buttonHeader = style([
  {
    display: "none",
  },
  responsiveStyle({
    tablet: { display: "block" },
    desktop: { display: "block" },
  }),
]);

export const menuicon = style([
  { cursor: "pointer" },
  responsiveStyle({
    tablet: { display: "none" },
    desktop: { display: "none" },
  }),
]);
