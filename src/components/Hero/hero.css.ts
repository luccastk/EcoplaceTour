import { style } from "@vanilla-extract/css";

import localImage from "../../assets/imgs/hero-image.jpg";
import { space } from "../../theme/spaces";

export const hero = style({
  minHeight: 0,
  paddingTop: "80px",
  padding: space.sm,
  backgroundImage: `url(${localImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)",
});
