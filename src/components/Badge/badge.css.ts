import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";
import { palette } from "../../theme/palettes";
import { radii } from "../../theme/radii";
import { size } from "../../theme/sizes";

export const badge = recipe({
  base: {
    display: "inline-flex",
    alignSelf: "start",
    padding: "6px 12px",
    borderRadius: radii.lg,
    fontSize: size.xs,
    fontWeight: 600,
    cursor: "pointer",
  },
  variants: {
    variant: {
      primary: {
        background: palette.primary,
        color: palette.white,
        selectors: {
          "&:hover": {
            background: "rgba(14, 115, 68, 0.8)",
          },
        },
      },
      secundary: {
        background: "rgba(236, 238, 242, 1)",
        color: palette.text,
        cursor: "default",
      },
      outlined: {
        background: "rgba(236, 238, 242, .6)",
        border: `1px solid ${palette.border}`,
        cursor: "default",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export type BadgeVariants = RecipeVariants<typeof badge>;
