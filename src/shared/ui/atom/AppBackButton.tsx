import { StyleSheet, TouchableOpacity } from "react-native";
import React, { memo } from "react";
import { Feather } from "@expo/vector-icons";
import { AppBackButtonProps } from "@/shared/types";
import { COLORS, Sizes, moderateScale } from "@/shared/theme";
import { AppText } from "./AppText";

const AppBackButton: React.FC<AppBackButtonProps> = ({ label, ...props }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container} {...props}>
      <Feather
        name="chevrons-left"
        size={moderateScale(20)}
        color={COLORS.textSecondary}
      />
      <AppText variant="h6" color={COLORS.textSecondary}>
        {label}
      </AppText>
    </TouchableOpacity>
  );
};

export default memo(AppBackButton);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: Sizes.font4,
    alignSelf: "flex-start",
  },
});
