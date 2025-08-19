import { style } from "@vanilla-extract/css";
import { gap, space } from "./spaces";

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
