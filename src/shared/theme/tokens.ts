import { moderateScale, verticalScale } from "react-native-size-matters";

const scale = (n: number, factor = 0.5) => moderateScale(n, factor);

/* --------------- Typography (design token scale) --------------- */

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body1"
  | "body2"
  | "label";

export enum ButtonVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  DANGER = "danger",
  TRANSPARENT = "transparent",
}

export interface TypographyStyle {
  fontSize: number;
  lineHeight: number;
  fontFamily: string;
}

const ms = (n: number, factor = 0.5) => moderateScale(n, factor);
const vh = (n: number) => verticalScale(n);

export const typography: Record<TypographyVariant, TypographyStyle> = {
  h1: {
    fontSize: ms(32, 0.4),
    lineHeight: vh(45),
    fontFamily: "Geist_700Bold",
  },
  h2: {
    fontSize: ms(24, 0.4),
    lineHeight: vh(34),
    fontFamily: "Geist_600SemiBold",
  },
  h3: {
    fontSize: ms(20, 0.4),
    lineHeight: vh(28),
    fontFamily: "Geist_500Medium",
  },
  h4: {
    fontSize: ms(18),
    lineHeight: vh(25),
    fontFamily: "Geist_500Medium",
  },
  h5: {
    fontSize: ms(16, 0.7),
    lineHeight: vh(22),
    fontFamily: "Geist_500Medium",
  },
  h6: {
    fontSize: ms(14, 0.5),
    lineHeight: vh(20),
    fontFamily: "Geist_500Medium",
  },
  body1: {
    fontSize: ms(16, 0.7),
    lineHeight: vh(24),
    fontFamily: "Geist_400Regular",
  },
  body2: {
    fontSize: ms(14, 0.5),
    lineHeight: vh(20),
    fontFamily: "Geist_400Regular",
  },
  label: {
    fontSize: ms(14, 0.5),
    lineHeight: vh(20),
    fontFamily: "Geist_500Medium",
  },
};

export const spacing = {
  0: 0,
  1: scale(4),
  2: scale(8),
  3: scale(12),
  4: scale(16),
  5: scale(24),
  6: scale(32),
} as const;

export const radii = {
  sm: scale(4),
  md: scale(8),
  lg: scale(12),
  pill: scale(20),
  xl: scale(24),
  iconBadge: scale(12),
} as const;

export const fontWeights = {
  regular: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
} as const;

export const opacity = {
  patternWash: 0.1,
  disabled: 0.7,
} as const;

export const borderWidths = {
  hairline: 1,
  thick: 2,
} as const;

/** Common layout / icon dimensions (scaled). */
export const sizes = {
  icon16: scale(16),
  icon20: scale(20),
  icon24: scale(24),
  icon40: scale(40),
  touchTarget: scale(30),
  googleIcon: scale(20),
  patternCell: scale(60),
  patternGridGap: scale(10),
  otpInputWidth: scale(50),
  otpInputHeight: scale(60),
  checkIcon: scale(24),
  iconHero: scale(80),
  logoScreenLg: scale(64),
} as const;

export const fontSizes = {
  xs: scale(12, 0.5),
  sm: scale(14, 0.5),
  md: scale(16, 0.7),
  lg: scale(18),
  xl: scale(24, 0.4),
  xxl: scale(32, 0.4),
  xxxl: scale(40, 0.5),
} as const;

export const lineHeights = {
  xs: scale(16),
  sm: scale(20),
  md: scale(24),
  lg: scale(26),
  xl: scale(32),
  xxl: scale(40),
  xxxl: scale(48),
} as const;

const shadowOffset = (h: number) => ({ width: 0, height: scale(h) });
const shadowRadius = (r: number) => scale(r);

export const shadows = {
  sm: {
    shadowColor: "#000",
    shadowOffset: shadowOffset(1),
    shadowOpacity: 0.18,
    shadowRadius: shadowRadius(1),
    elevation: 1,
  },
  md: {
    shadowColor: "#000",
    shadowOffset: shadowOffset(2),
    shadowOpacity: 0.25,
    shadowRadius: shadowRadius(3.84),
    elevation: 3,
  },
  lg: {
    shadowColor: "#000",
    shadowOffset: shadowOffset(4),
    shadowOpacity: 0.3,
    shadowRadius: shadowRadius(4.65),
    elevation: 6,
  },
} as const;

export const zIndex = {
  base: 0,
  above: 1,
  modal: 10,
  overlay: 20,
  toast: 30,
} as const;
