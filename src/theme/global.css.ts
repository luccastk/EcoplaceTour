import { globalStyle } from "@vanilla-extract/css";

globalStyle("body", {
  margin: 0,
});

globalStyle("a", {
  textDecoration: "none",
  color: "inherit",
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
