import { StyleSheet, View } from "react-native";
import React, { memo } from "react";
import { AppDividerProps } from "@/shared/types";
import { COLORS, Sizes } from "@/shared/theme";
import { AppText } from "./AppText";
import If from "./If";

const AppDivider: React.FC<AppDividerProps> = ({ label, style }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.line} />
      <If condition={!!label}>
        <AppText variant="body2" color={COLORS.textSecondary}>
          {label}
        </AppText>
      </If>
      <View style={styles.line} />
    </View>
  );
};

export default memo(AppDivider);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: Sizes.medium,
  },
  line: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: COLORS.border,
  },
});
