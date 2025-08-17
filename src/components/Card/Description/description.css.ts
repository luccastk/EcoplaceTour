import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";
import { palette } from "../../../theme/palettes";

export const description = recipe({
  base: {
    textAlign: "justify",
    lineHeight: "1.5rem",
  },
  variants: {
    color: {
      white: {
        color: palette.white,
      },
      black: {
        color: palette.text,
      },
    },
  },
  defaultVariants: {
    color: "black",
  },
});

export type CardDescriptionVariant = RecipeVariants<typeof description>;
