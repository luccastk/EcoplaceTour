import { globalFontFace } from "@vanilla-extract/css";

const Roboto = "Roboto";
const OpenSans = "Open Sans";

globalFontFace(Roboto, {
  src: "url(/assets/fonts/Roboto_Condensed-Regular.ttf)",
  fontWeight: 400,
});

globalFontFace(Roboto, {
  src: "url(/assets/fonts/Roboto_Condensed-Mediumx.ttf)",
  fontWeight: 500,
});

globalFontFace(Roboto, {
  src: "url(/assets/fonts/Roboto-SemiBold.ttf)",
  fontWeight: 600,
});

globalFontFace(Roboto, {
  src: "url(/assets/fonts/Roboto-Bold.ttf)",
  fontWeight: 700,
});

globalFontFace(OpenSans, {
  src: "url(/assets/fonts/OpenSans-Regular.ttf)",
  fontWeight: 400,
});

export const fontFamily = {
  primary: `${Roboto}, sans-serif`,
  secondary: `${OpenSans}, sans-serif`,
};

export const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;
