import { globalStyle, style } from "@vanilla-extract/css";
import { gap, space } from "./spaces";

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
});

globalStyle("body", {
});

globalStyle("a", {
  textDecoration: "none",
  color: "inherit",
  cursor: "pointer",
});

globalStyle("textarea", {
  border: "none",
  resize: "none",
  outline: "none",
});

globalStyle("input", {
  border: "none",
  padding: 0,
  outline: "none",
});

globalStyle("button", {
  border: "none",
  padding: 0,
  background: "inherit",
});

globalStyle("p, h1, h2, h3, h4, h5", {});

export const container = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: `${space.xl} ${space.md}`,
  "@media": {
    "screen and (max-width: 1000px)": {
      padding: `${space.lg} ${space.sm}`,
    },
  },
});

export const sectionHeader = style({
  maxWidth: "700px",
  display: "flex",
  flexDirection: "column",
  margin: "0 auto 2rem auto",
  gap: gap.sm,
});
