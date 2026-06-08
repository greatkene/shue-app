import { StyleSheet, TouchableOpacity } from "react-native";
import React, { memo, useMemo } from "react";
import { AppChipProps } from "@/shared/types";
import { COLORS, Sizes } from "@/shared/theme";
import { AppText } from "./AppText";

/* Translucent fill applied to the accent colour when a chip is selected. */
const SELECTED_FILL_ALPHA = "22";

const AppChip: React.FC<AppChipProps> = ({
  label,
  selected = false,
  color,
  onPress,
  style,
}) => {
  const { containerStyle, textColor } = useMemo(() => {
    const accent = color ?? COLORS.primary;

    if (selected) {
      return {
        containerStyle: {
          backgroundColor: `${accent}${SELECTED_FILL_ALPHA}`,
          borderColor: accent,
        },
        textColor: COLORS.text,
      };
    }

    return {
      containerStyle: {
        backgroundColor: COLORS.transparent,
        borderColor: color ?? COLORS.border,
      },
      textColor: color ?? COLORS.text,
    };
  }, [color, selected]);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.container, containerStyle, style]}
    >
      <AppText variant="body2" style={styles.text} color={textColor}>
        {label}
      </AppText>
    </TouchableOpacity>
  );
};

export default memo(AppChip);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: Sizes.xxxl,
    paddingVertical: 1,
    paddingHorizontal: Sizes.large,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: Sizes.font11,
  },
});
