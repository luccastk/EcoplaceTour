import { style } from "@vanilla-extract/css";
import { palette } from "../../theme/palettes";
import { radii } from "../../theme/radii";
import { gap, space } from "../../theme/spaces";

export const header = style({
  width: "100%",
  height: "90px",
  position: "fixed",
  top: 0,
  background: palette.background,
  overflow: "hidden",
});

export const navbar = style({
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: space.sm,
});

export const links = style({
  display: "flex",
  gap: gap.md,
  "@media": {
    "screen and (max-width: 768px)": {
      display: "none",
    },
  },
});

export const link = style({
  padding: `${space.xs} ${space.sm}`,
  "@media": {
    "screen and (min-width: 768px)": {
      padding: 0,
      position: "relative",
      selectors: {
        "&::before": {
          position: "absolute",
          content: "",
          backgroundColor: palette.primary,
          height: "2px",
          width: 0,
          left: 0,
          top: "110%",
          transition: "width .3s ease",
        },
        "&:hover::before": {
          width: "100%",
        },
      },
    },
  },
});

export const linkActive = style({
  background: palette.primary,
  color: palette.white,
  borderRadius: radii.sm,
});

export const actionBtn = style({
  "@media": {
    "screen and (max-width: 768px)": {
      display: "none",
    },
  },
});

export const toggleBtn = style({
  display: "none",

  "@media": {
    "screen and (max-width: 768px)": {
      display: "block",
      fontSize: "30px",
      cursor: "pointer",
    },
  },
});

export const dropdownMenu = style({
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
  transform: "translateY(0) scale(1)",
  opacity: 1,
  pointerEvents: "auto",
});

export const menu = style({
  display: "flex",
  flexDirection: "column",
  gap: gap.xs,
  padding: space.xs,
});
