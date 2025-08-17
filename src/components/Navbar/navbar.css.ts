import { style } from "@vanilla-extract/css";
import { palette } from "../../theme/palettes";
import { space } from "../../theme/spaces";

export const header = style({
  zIndex: 999,
  width: "100%",
  height: "90px",
  position: "fixed",
  top: 0,
  background: palette.background,
  overflow: "hidden",
  boxShadow: "0px 5px 13px -6px rgba(0,0,0,0.5)",
});

export const content = style({
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `${space.sm}`,
});

export const toggleBtn = style({
  display: "none",
  "@media": {
    "screen and (max-width: 768px)": {
      display: "block",
    },
  },
});

export const actionBtn = style({
  display: "block",
  "@media": {
    "screen and (max-width: 768px)": {
      display: "none",
    },
  },
});
