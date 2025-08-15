import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";

export const head = recipe({
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
  },
  variants: {
    justify: {
      start: {
        justifyContent: "start",
      },
      center: {
        justifyContent: "center",
      },
      end: {
        justifyContent: "end",
      },
    },
    align: {
      start: {
        alignItems: "start",
      },
      center: {
        alignItems: "center",
      },
      end: {
        alignItems: "end",
      },
    },
  },
});

export type CardHeadVariants = RecipeVariants<typeof head>;
