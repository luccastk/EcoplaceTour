import { style } from "@vanilla-extract/css";
import { palette } from "../../theme/palettes";
import { responsiveStyle } from "../../theme/responsive.css";
import { gap, space } from "../../theme/spaces";

export const header = style({
  width: "100%",
  position: "fixed",
  top: 0,
  background: palette.background,
});

export const container = style({
  margin: "0 auto",
  padding: `${space.xs} ${space.sm}`,
});

export const menubar = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const menuitem = style([
  { display: "none" },
  responsiveStyle({
    tablet: { display: "flex", gap: gap.xs },
    desktop: { display: "flex", gap: gap.md },
  }),
]);

export const menuicon = style([
  { cursor: "pointer" },
  responsiveStyle({
    tablet: { display: "none" },
    desktop: { display: "none" },
  }),
]);
