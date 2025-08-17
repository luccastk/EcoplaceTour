import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";
import { palette } from "../../theme/palettes";
import { radii } from "../../theme/radii";
import { space } from "../../theme/spaces";

export const card = recipe({
  base: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: space.sm,
    padding: space.sm,
    borderRadius: radii.sm,
    transition: "all .3s ease",
  },
  variants: {
    variant: {
      default: {
        boxShadow: "0 1px 2px 0 rgb(0 0 0 / .05)",
        background: `linear-gradient(160deg, rgba(255, 255, 255, 0.3), rgba(186, 217, 74, 0.3))`,
        selectors: {
          "&:hover": {
            transform: "translateY(-10px)",
            boxShadow: "0px 10px 30px -10px rgba(0,0,0, 0.3)",
          },
        },
      },
      blur: {
        background: "rgba(255, 255, 255, 0.2)",
      },
      white: {
        background: palette.white,
        border: `1px solid ${palette.border}`,
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type CardVariants = RecipeVariants<typeof card>;
