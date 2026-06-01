import { StyleSheet, TextInput, View } from "react-native";
import React, { memo, useMemo, useState } from "react";
import { AppTextInputProps } from "@/shared/types";
import { COLORS, Sizes, typography, getColorAlphaChannel } from "@/shared/theme";
import AppLabel from "./AppLabel";
import { AppText } from "./AppText";
import If from "./If";

const AppTextInput: React.FC<AppTextInputProps> = ({
  label,
  required,
  leftIcon,
  rightIcon,
  error,
  containerStyle,
  inputContainerStyle,
  style,
  onFocus,
  onBlur,
  placeholderTextColor,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const borderColor = useMemo(() => {
    if (error) return COLORS.danger;
    return isFocused ? COLORS.primary : COLORS.border;
  }, [error, isFocused]);

  return (
    <View style={[styles.container, containerStyle]}>
      <If condition={!!label}>
        <AppLabel label={label ?? ""} required={required} />
      </If>

      <View
        style={[
          styles.inputContainer,
          { borderColor },
          inputContainerStyle,
        ]}
      >
        <If condition={!!leftIcon}>
          <View style={styles.icon}>{leftIcon}</View>
        </If>

        <TextInput
          style={[styles.input, style]}
          placeholderTextColor={
            placeholderTextColor ?? getColorAlphaChannel("textSecondary")
          }
          onFocus={(e) => {
            setIsFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur?.(e);
          }}
          {...props}
        />

        <If condition={!!rightIcon}>
          <View style={styles.icon}>{rightIcon}</View>
        </If>
      </View>

      <If condition={!!error}>
        <AppText variant="body2" color={COLORS.danger} style={styles.error}>
          {error}
        </AppText>
      </If>
    </View>
  );
};

export default memo(AppTextInput);

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: Sizes.small,
    borderWidth: 1,
    borderRadius: Sizes.radius,
    paddingHorizontal: Sizes.medium,
    paddingVertical: Sizes.small,
    backgroundColor: COLORS.backgroundSecondary,
  },
  input: {
    flex: 1,
    padding: 0,
    color: COLORS.text,
    fontFamily: typography.body1.fontFamily,
    fontSize: typography.body1.fontSize,
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
  },
  error: {
    marginTop: Sizes.base,
  },
});
