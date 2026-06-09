import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import { Feather } from "@expo/vector-icons";
import { AppText } from "@/shared/ui/atom";
import If from "@/shared/ui/atom/If";
import { COLORS, Sizes, getColorAlphaChannel, moderateScale } from "@/shared/theme";
import { IdUploadCardProps } from "../../types";

const ICON_COLOR = getColorAlphaChannel("textSecondary");

const IdUploadCard: React.FC<IdUploadCardProps> = ({
  title,
  description,
  ctaLabel,
  imageUri,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.container}
    >
      <If condition={!!imageUri}>
        <Image source={{ uri: imageUri ?? "" }} style={styles.preview} />
      </If>

      <If condition={!imageUri}>
        <Feather name="camera" size={moderateScale(32)} color={ICON_COLOR} />
      </If>

      <View style={styles.textBlock}>
        <AppText variant="h4" color={COLORS.text} style={styles.centerText}>
          {title}
        </AppText>
        <AppText
          variant="body2"
          color={COLORS.textSecondary}
          style={styles.centerText}
        >
          {description}
        </AppText>
      </View>

      <View style={styles.pill}>
        <Feather name="upload" size={moderateScale(16)} color={ICON_COLOR} />
        <AppText variant="body2" color={COLORS.textSecondary}>
          {ctaLabel}
        </AppText>
      </View>
    </TouchableOpacity>
  );
};

export default memo(IdUploadCard);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: COLORS.border,
    borderRadius: Sizes.radius,
    paddingVertical: Sizes.xxxl,
    paddingHorizontal: Sizes.large,
    alignItems: "center",
    gap: Sizes.large,
  },
  preview: {
    width: moderateScale(72),
    height: moderateScale(72),
    borderRadius: Sizes.radius,
  },
  textBlock: {
    alignItems: "center",
    gap: Sizes.font4,
  },
  centerText: {
    textAlign: "center",
  },
  pill: {
    flexDirection: "row",
    alignItems: "center",
    gap: Sizes.base,
    backgroundColor: COLORS.backgroundSecondary,
    borderRadius: Sizes.xxxl,
    paddingVertical: Sizes.base,
    paddingHorizontal: Sizes.medium,
  },
});
