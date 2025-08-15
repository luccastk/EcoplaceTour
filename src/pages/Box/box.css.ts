import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";
import { radii } from "../../theme/radii";

export const box = recipe({
  base: { borderRadius: radii.md },
  variants: {
    elevation: {
      "1": {
        boxShadow: "0 4 20 0 hsl(162, 57%, 28%, 0.2)",
      },
      "2": {
        boxShadow: "0 10 30 -10 rgba(0,0,0,0.3)",
      },
    },
  },
});

export type BoxVariants = RecipeVariants<typeof box>;
