import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { memo, useMemo } from "react";
import { RoleCardProps } from "../../types";
import { COLORS, Sizes, getColorAlphaChannel } from "@/shared/theme";
import { AppText } from "@/shared/ui/atom";

const RoleCard: React.FC<RoleCardProps> = ({
  Icon,
  label,
  description,
  isSelected,
  onPress,
}) => {
  const containerStyle = useMemo(() => {
    return [styles.container, isSelected && styles.containerSelected];
  }, [isSelected]);

  const iconBadgeStyle = useMemo(() => {
    return [
      styles.iconBadge,
      { backgroundColor: isSelected ? COLORS.primary : "#F0F1F3" },
    ];
  }, [isSelected]);

  const radioOuterStyle = useMemo(() => {
    return [
      styles.radioOuter,
      { backgroundColor: isSelected ? COLORS.primary : COLORS.transparent },
    ];
  }, [isSelected]);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={containerStyle}
    >
      <View style={iconBadgeStyle}>
        <Icon
          color={isSelected ? COLORS.white : getColorAlphaChannel("black", 60)}
        />
      </View>

      <View style={styles.content}>
        <AppText variant="h5" color={isSelected ? COLORS.primary : COLORS.text}>
          {label}
        </AppText>
        <AppText
          variant="body2"
          color={isSelected ? COLORS.primary : COLORS.textSecondary}
        >
          {description}
        </AppText>
      </View>
      <View style={styles.radioContainer}>
        <View style={radioOuterStyle}>
          {isSelected && <View style={styles.radioInner} />}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default memo(RoleCard);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: Sizes.small,
    paddingVertical: Sizes.small,
    paddingHorizontal: Sizes.base,
    paddingLeft: Sizes.large,
    borderRadius: Sizes.radius,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.transparent,
  },
  containerSelected: {
    borderColor: COLORS.primary,
    backgroundColor: getColorAlphaChannel("primary", 12),
  },
  iconBadge: {
    width: Sizes.xxxl,
    height: Sizes.xxxl,
    borderRadius: Sizes.xxxl,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
  },
  radioOuter: {
    width: Sizes.large,
    height: Sizes.large,
    borderRadius: Sizes.large,
    borderWidth: 1,
    borderColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
  },
  radioInner: {
    width: Sizes.base,
    height: Sizes.base,
    borderRadius: Sizes.base,
    backgroundColor: COLORS.white,
  },
  radioContainer: {
    height: "100%",
  },
});
