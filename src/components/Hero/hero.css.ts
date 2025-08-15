import { style } from "@vanilla-extract/css";

import ImgHero from "../../assets/imgs/hero-image.jpg";
import { gap, space } from "../../theme/spaces";

export const heroContainer = style({
  padding: `${space.lg} 0`,
  backgroundImage: `url(${ImgHero})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.4)",
});

export const groupBtn = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: gap.xs,
  marginTop: space.md,
});
