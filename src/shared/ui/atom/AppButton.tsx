import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { memo, useMemo } from "react";
import { ButtonVariant, COLORS, Sizes } from "@/shared/theme";
import { AppButtonProps } from "@/shared/types";
import { AppText } from "./AppText";

const DEFAULT_VARIANT: ButtonVariant = ButtonVariant.PRIMARY;

const AppButton: React.FC<AppButtonProps> = ({
  variant = DEFAULT_VARIANT,
  style,
  children,
  icon,
  disabled,
  loading,
  textStyle,
  ...props
}) => {
  const isString = useMemo(() => typeof children === "string", [children]);

  const buttonStyle = useMemo(() => {
    const disabledStyle = disabled || loading ? styles.buttonDisabledStyle : {};
    return [
      styles.buttonStyle,
      styles[`${variant}-buttonStyle`],
      style,
      disabledStyle,
    ];
  }, [variant, style, disabled, loading]);
  const appTextStyle = useMemo(() => {
    return [styles[`${variant}-textStyle`], textStyle];
  }, [variant, textStyle]);
  const content = useMemo(
    () =>
      isString ? (
        <>
          <AppText variant="body1" style={appTextStyle}>
            {children}
          </AppText>
          {loading ? (
            <ActivityIndicator size="small" color={COLORS.white} />
          ) : (
            icon
          )}
        </>
      ) : (
        children
      ),
    [isString, loading, appTextStyle],
  );
  return (
    <TouchableOpacity style={buttonStyle} {...props}>
      {content}
    </TouchableOpacity>
  );
};

export default memo(AppButton);

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: Sizes.xxxl,
    paddingHorizontal: Sizes.xxl,
    paddingVertical: Sizes.base,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 3,
    width: "100%",
  },
  [`${ButtonVariant.PRIMARY}-buttonStyle`]: {
    backgroundColor: COLORS.primary,
  },
  [`${ButtonVariant.PRIMARY}-textStyle`]: {
    color: COLORS.white,
  },
  [`${ButtonVariant.SECONDARY}-buttonStyle`]: {
    backgroundColor: COLORS.backgroundSecondary,
  },
  [`${ButtonVariant.SECONDARY}-textStyle`]: {
    color: COLORS.text,
  },
  [`${ButtonVariant.DANGER}-buttonStyle`]: {
    backgroundColor: COLORS.danger,
  },
  [`${ButtonVariant.DANGER}-textStyle`]: {
    color: COLORS.black,
  },
  [`${ButtonVariant.TRANSPARENT}-buttonStyle`]: {
    backgroundColor: "transparent",
  },
  [`${ButtonVariant.TRANSPARENT}-textStyle`]: {
    color: COLORS.text,
  },
  buttonDisabledStyle: {
    opacity: 0.6,
  },
});
