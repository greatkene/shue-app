export type ThemeColors = {
  primary: string;
  background: string;
  backgroundSecondary: string;
  text: string;
  textSecondary: string;
  border: string;
  borderSoft: string;
  danger: string;
  white: string;
  black: string;
  transparent: string;
};

export const COLORS: ThemeColors = {
  primary: "#1DB954",
  background: "#101928",
  text: "#FFFFFF",
  backgroundSecondary: "#1A2332",
  textSecondary: "#B9BEC7",
  border: "#2A3441",
  borderSoft: "#202938",
  danger: "#ff2f2f",
  white: "#FFFFFF",
  black: "#000000",
  transparent: "transparent",
};

export const getColorAlphaChannel = (
  color: keyof typeof COLORS,
  transparency: number = 100,
) => {
  transparency = Math.max(0, Math.min(100, transparency));
  const alpha = Math.round((transparency / 100) * 255)
    .toString(16)
    .padStart(2, "0")
    .toUpperCase();

  const hex = COLORS[color];

  return `${hex}${alpha}`;
};
