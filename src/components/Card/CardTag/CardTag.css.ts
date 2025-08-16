import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";
import { gap } from "../../../theme/spaces";

export const content = recipe({
  base: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: gap.xs,
    marginTop: "auto",
  },
  variants: {
    justify: {
      start: {
        justifyContent: "start",
      },
      end: {
        justifyContent: "end",
      },
    },
  },
});

export type CardTagVariants = RecipeVariants<typeof content>;
