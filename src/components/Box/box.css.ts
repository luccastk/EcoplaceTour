import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";
import { palette } from "../../theme/palettes";
import { radii } from "../../theme/radii";

export const box = recipe({
  base: {
    borderRadius: radii.md,
    background: palette.white,
  },
  variants: {
    elevation: {
      "0": {
        boxShadow: "0px 1px 2px -1px rgba(0, 0, 0, 0.1)",
      },
      "1": {
        boxShadow: "0px 4px 20px 0 rgba(30, 111, 87, 0.2)",
      },
    },
    border: {
      true: {
        borderColor: palette.border,
      },
    },
  },
});

export type BoxVariants = RecipeVariants<typeof box>;
