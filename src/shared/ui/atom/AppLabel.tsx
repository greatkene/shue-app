import { StyleSheet, View } from "react-native";
import React, { memo } from "react";
import { AppLabelProps } from "@/shared/types";
import { COLORS, Sizes } from "@/shared/theme";
import { AppText } from "./AppText";

/** Brand-green mark used to flag required fields. */
const REQUIRED_MARK_COLOR = COLORS.primary;

const AppLabel: React.FC<AppLabelProps> = ({
  label,
  required,
  style,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <AppText
        variant="label"
        color={COLORS.textSecondary}
        style={style}
        {...props}
      >
        {label}
      </AppText>
      {required && (
        <AppText variant="label" color={REQUIRED_MARK_COLOR}>
          {" *"}
        </AppText>
      )}
    </View>
  );
};

export default memo(AppLabel);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Sizes.base,
  },
});
