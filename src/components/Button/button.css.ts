import { style } from "@vanilla-extract/css";
import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";
import { palette } from "../../theme/palettes";
import { radii } from "../../theme/radii";
import { gap, space } from "../../theme/spaces";
import { size } from "../../theme/sizes";
import { fontFamily } from "../../theme/fonts.css";

export const buttonStyle = recipe({
  base: {
    fontFamily: fontFamily.primary,
    fontWeight: "bold",
    fontSize: size.md,
    cursor: "pointer",
    color: palette.white,
    padding: `${space.xs} ${space.sm}`,
    borderRadius: radii.sm,
  },
  variants: {
    variant: {
      primary: {
        background: `linear-gradient(99deg,${palette.primary}, ${palette.secondary})`,
      },
      secondary: {
        background: palette.primary,
      },
      outline: {
        background: "rgba(255,255,255, 0.2)",
        border: `1px solid ${palette.border}`,
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export type ButtonVariants = RecipeVariants<typeof buttonStyle>;

export const buttonIcon = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: gap.md,
});
