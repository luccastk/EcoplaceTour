interface ResponsiveStyleProps {
  tablet: React.CSSProperties;
  desktop: React.CSSProperties;
}

export const responsiveStyle = ({ tablet, desktop }: ResponsiveStyleProps) => ({
  "@media": {
    "screen and (min-width: 744px)": tablet,
    "screen and (min-width: 1024px)": desktop,
  },
});
