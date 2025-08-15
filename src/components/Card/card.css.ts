import { style } from "@vanilla-extract/css";
import { radii } from "../../theme/radii";
import { space } from "../../theme/spaces";

export const card = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: space.sm,
  height: "100%",
  boxShadow: "0 1px 2px 0 rgb(0 0 0 / .05)",
  borderRadius: radii.sm,
  padding: space.sm,
  background: `linear-gradient(160deg, rgba(255, 255, 255, 0.3), rgba(186, 217, 74, 0.3))`,
  transition: "all .3s ease",
  selectors: {
    "&:hover": {
      transform: "translateY(-10px)",
      boxShadow: "0px 10px 30px -10px rgba(0,0,0, 0.3)",
    },
  },
});
