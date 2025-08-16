import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";
import { palette } from "../../theme/palettes";
import { size } from "../../theme/sizes";

export const typographyStyle = recipe({
  base: {
    color: palette.text,
  },
  variants: {
    variant: {
      h1: {
        fontSize: size["2-xl"],
      },
      h2: {
        fontSize: size.xl,
      },
      h3: {
        fontSize: size.lg,
      },
      h4: {
        fontSize: size.md,
      },
      p: {
        fontSize: size.sm,
      },
      lower: {
        fontSize: size.xs,
      },
    },
    w: {
      regular: {
        fontWeight: 400,
      },
      medium: {
        fontWeight: 500,
      },
      semiBold: {
        fontWeight: 600,
      },
      bold: {
        fontWeight: 700,
      },
    },
    align: {
      start: {
        textAlign: "start",
      },
      center: {
        textAlign: "center",
      },
      end: {
        textAlign: "end",
      },
      justify: {
        textAlign: "justify",
        hyphens: "auto",
      },
    },
    color: {
      disabled: {
        color: palette.disabled,
      },
      "light-green": {
        color: palette.florest,
      },
      white: {
        color: palette.white,
      },
      text: {
        color: palette.text,
      },
    },
  },
});

export type TypographyVariants = RecipeVariants<typeof typographyStyle>;
