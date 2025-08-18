import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";
import { breakpoints } from "../../theme/breakpoints";
import { palette } from "../../theme/palettes";
import { radii } from "../../theme/radii";
import { size } from "../../theme/sizes";
import { gap, space } from "../../theme/spaces";

export const content = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    gap: gap.xs,
  },
  variants: {
    justify: {
      center: {
        justifyContent: "center",
      },
      start: {
        justifyContent: "start",
      },
      end: {
        justifyContent: "end",
      },
    },
  },
  defaultVariants: {
    justify: "center",
  },
});

export const link = recipe({
  base: {
    padding: `${space.xs} ${space.sm}`,
    borderRadius: radii.md,
    color: palette.white,
    fontWeight: 600,
  },
  variants: {
    variant: {
      green: {
        padding: 0,
        color: palette.primary,
        fontSize: size.xs,
      },
      gradient: {
        background: `linear-gradient(100deg,${palette.primary}, ${palette.secondary})`,
        transform: "scale(.95)",
        transition: "transform .3s ease",
        selectors: {
          "&:hover": {
            transform: "scale(1)",
          },
        },
      },
      solid: {
        background: palette.primary,
        transition: "background .3s ease",
        selectors: {
          "&:hover": {
            background: "hsla(152, 78%, 25%, 0.8)",
          },
        },
      },
      outlined: {
        background: "rgba(255,255,255, 0.2)",
        border: `1px solid ${palette.border}`,
        transition: "background .3s ease",
        selectors: {
          "&:hover": {
            background: "rgba(255,255,255, 0.4)",
          },
        },
      },
      link: {
        padding: 0,
        position: "relative",
        fontWeight: 400,
        color: palette.text,
        selectors: {
          "&::before": {
            position: "absolute",
            content: "",
            backgroundColor: palette.primary,
            height: "2px",
            width: 0,
            left: 0,
            top: "110%",
            transition: "width .3s ease",
          },
          "&:hover::before": {
            width: "100%",
          },
        },
        "@media": {
          [`screen and (max-width: ${breakpoints.tablet})`]: {
            padding: `${space.xs} ${space.sm}`,
            selectors: {
              "&::before": {
                display: "none",
              },
            },
          },
        },
      },
    },
    active: {
      true: {
        selectors: {
          "&::before": {
            position: "absolute",
            content: "",
            backgroundColor: palette.primary,
            height: "2px",
            width: "100%",
            left: 0,
            top: "110%",
          },
        },
        "@media": {
          [`screen and (max-width: ${breakpoints.tablet})`]: {
            background: palette.primary,
            color: palette.white,
          },
        },
      },
    },
  },
});

export type LinkVariant = RecipeVariants<typeof link>;
export type LinkJustifyVariant = RecipeVariants<typeof content>;
