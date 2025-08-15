import { globalStyle, style } from "@vanilla-extract/css";
import { space } from "./spaces";

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
});

globalStyle("body", {
  margin: 0,
  fontFamily: "Helvetica, Arial, sans-serif;",
});

globalStyle("a", {
  textDecoration: "none",
  color: "inherit",
  cursor: "pointer",
});

globalStyle("button", {
  border: "none",
  padding: 0,
  background: "inherit",
});

globalStyle("p, h1, h2, h3, h4, h5", {
  font: "inherit",
  margin: 0,
  padding: 0,
});

export const container = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: `1rem 0`,
  "@media": {
    "screen and (max-width: 1000px)": {
      padding: `${space.xs} ${space.sm}`,
    },
  },
});
