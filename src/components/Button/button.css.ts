import { style } from "@vanilla-extract/css";
import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";
import { palette } from "../../theme/palettes";
import { radii } from "../../theme/radii";
import { gap, space } from "../../theme/spaces";
import { size } from "../../theme/sizes";

export const buttonStyle = recipe({
  base: {
    fontFamily: "Helvetica, Arial, sans-serif",
    fontWeight: "bold",
    fontSize: size.md,
    cursor: "pointer",
    color: palette.white,
    transform: "scale(.9)",
    padding: `${space.xs} ${space.sm}`,
    borderRadius: radii.sm,
    transition: "all .3s ease",
  },
  variants: {
    variant: {
      primary: {
        background: `linear-gradient(99deg,${palette.primary}, ${palette.secondary})`,
        "@media": {
          "screen and (min-width: 768px)": {
            selectors: {
              "&:hover": {
                transform: "scale(1)",
              },
            },
          },
        },
      },
      secondary: {
        background: palette.primary,
        "@media": {
          "screen and (min-width: 768px)": {
            selectors: {
              "&:hover": {
                backgroundColor: "hsla(152, 78%, 25%, 0.8)",
              },
            },
          },
        },
      },
      outline: {
        background: "rgba(255,255,255, 0.2)",
        border: `1px solid ${palette.border}`,
        "@media": {
          "screen and (min-width: 768px)": {
            selectors: {
              "&:hover": {
                background: "rgba(255,255,255, 0.4)",
              },
            },
          },
        },
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
