import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";

export const icon = recipe({
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  variants: {
    size: {
      xs: {
        fontSize: "12px",
      },
      sm: {
        fontSize: "20px",
      },
      md: {
        fontSize: "30px",
      },
      lg: { fontSize: "70px" },
      xl: {
        fontSize: "90px",
      },
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

export type IconVariants = RecipeVariants<typeof icon>;
