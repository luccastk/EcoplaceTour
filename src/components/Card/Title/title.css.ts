import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";
import { palette } from "../../../theme/palettes";
import { size } from "../../../theme/sizes";

export const title = recipe({
  base: {
    fontSize: size.lg,
    fontWeight: 700,
    textAlign: "center",
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

export type CardTitleVariants = RecipeVariants<typeof title>;
