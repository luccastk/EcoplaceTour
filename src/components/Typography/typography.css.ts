import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";
import { fontFamily, fontWeight } from "../../theme/fonts.css";
import { palette } from "../../theme/palettes";
import { size } from "../../theme/sizes";

export const typographyStyle = recipe({
  base: {
    fontFamily: fontFamily.primary,
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
    disabled: {
      true: {
        color: palette.disabled,
      },
    },
    w: {
      regular: {
        fontWeight: fontWeight.regular,
      },
      medium: {
        fontWeight: fontWeight.medium,
      },
      semiBold: {
        fontWeight: fontWeight.semibold,
      },
      bold: {
        fontWeight: fontWeight.bold,
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
    },
  },
});

export type TypographyVariants = RecipeVariants<typeof typographyStyle>;
