import { StyleSheet, TouchableOpacity } from "react-native";
import React, { memo } from "react";
import { COLORS, Sizes } from "@/shared/theme";
import { AppText } from "@/shared/ui/atom";
import { GoogleButtonProps } from "../../types";
import Svg from "@/assets/svg";

const GoogleButton: React.FC<GoogleButtonProps> = ({ label, ...props }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container} {...props}>
      <Svg.Google />
      <AppText variant="body1" color={COLORS.textSecondary}>
        {label}
      </AppText>
    </TouchableOpacity>
  );
};

export default memo(GoogleButton);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: Sizes.small,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: Sizes.large,
    paddingVertical: Sizes.small,
    paddingHorizontal: Sizes.xxl,
  },
});
