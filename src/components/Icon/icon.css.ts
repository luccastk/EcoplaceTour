import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";

export const icon = recipe({
  base: {
    fontSize: "70px",
  },
  variants: {
    small: {
      true: {
        fontSize: "30px",
      },
    },
    large: {
      true: {
        fontSize: "90px",
      },
    },
  },
});

export type IconVariants = RecipeVariants<typeof icon>;
