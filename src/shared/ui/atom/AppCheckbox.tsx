import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { memo, useMemo } from "react";
import { Feather } from "@expo/vector-icons";
import { AppCheckboxProps } from "@/shared/types";
import { COLORS, Sizes, moderateScale } from "@/shared/theme";
import { AppText } from "./AppText";
import If from "./If";

const AppCheckbox: React.FC<AppCheckboxProps> = ({
  checked,
  onChange,
  label,
  error,
  style,
}) => {
  const boxStyle = useMemo(
    () => [
      styles.box,
      checked && styles.boxChecked,
      !!error && !checked && styles.boxError,
    ],
    [checked, error],
  );

  return (
    <View style={style}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.row}
        onPress={() => onChange(!checked)}
      >
        <View style={boxStyle}>
          <If condition={checked}>
            <Feather
              name="check"
              size={moderateScale(14)}
              color={COLORS.white}
            />
          </If>
        </View>
        <If condition={!!label}>
          <AppText variant="body2" color={COLORS.text} style={styles.label}>
            {label}
          </AppText>
        </If>
      </TouchableOpacity>
      <If condition={!!error}>
        <AppText variant="body2" color={COLORS.danger} style={styles.error}>
          {error}
        </AppText>
      </If>
    </View>
  );
};

export default memo(AppCheckbox);

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: Sizes.base,
  },
  box: {
    width: moderateScale(22),
    height: moderateScale(22),
    borderRadius: Sizes.font6,
    borderWidth: 1.5,
    borderColor: COLORS.border,
    alignItems: "center",
    justifyContent: "center",
  },
  boxChecked: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  boxError: {
    borderColor: COLORS.danger,
  },
  label: {
    flex: 1,
  },
  error: {
    marginTop: Sizes.font4,
  },
});
