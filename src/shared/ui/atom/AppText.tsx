import { Text } from "react-native";
import type { AppTextProps } from "@/shared/types";
import { COLORS, TypographyVariant, typography } from "@/shared/theme";

const DEFAULT_VARIANT: TypographyVariant = "body1";

export type { AppTextProps };
export function AppText({
  variant = DEFAULT_VARIANT,
  color,
  style,
  allowFontScaling = true,
  ...rest
}: AppTextProps) {
  const tokenStyle = typography[variant];

  return (
    <Text
      accessibilityRole="text"
      allowFontScaling={allowFontScaling}
      style={[{ color: color ?? COLORS.primary }, tokenStyle, style]}
      {...rest}
    />
  );
}
