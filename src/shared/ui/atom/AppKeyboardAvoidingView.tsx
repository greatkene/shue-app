import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import React, { memo } from "react";
import { AppKeyboardAvoidingViewProps } from "@/shared/types";

/**
 * Wraps content so inputs stay visible while the keyboard is open.
 * On iOS we pad the view; on Android the native `adjustResize` already
 * handles it, so no extra behavior is applied.
 */
const BEHAVIOR = Platform.OS === "ios" ? "padding" : undefined;

const AppKeyboardAvoidingView: React.FC<AppKeyboardAvoidingViewProps> = ({
  children,
  style,
  behavior = BEHAVIOR,
  ...props
}) => {
  return (
    <KeyboardAvoidingView
      style={[styles.container, style]}
      behavior={behavior}
      {...props}
    >
      {children}
    </KeyboardAvoidingView>
  );
};

export default memo(AppKeyboardAvoidingView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
