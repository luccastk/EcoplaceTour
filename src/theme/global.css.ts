import { globalStyle } from "@vanilla-extract/css";
import { fontFamily } from "./fonts.css";

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
});

globalStyle("body", {
  margin: 0,
  fontFamily: fontFamily.primary,
  WebkitFontSmoothing: "antialiased",
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
