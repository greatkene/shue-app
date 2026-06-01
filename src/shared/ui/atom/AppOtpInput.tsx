import {
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { memo, useMemo, useRef } from "react";
import { AppOtpInputProps } from "@/shared/types";
import { COLORS, Sizes, typography } from "@/shared/theme";
import { AppText } from "./AppText";
import If from "./If";

const DEFAULT_LENGTH = 6;

const AppOtpInput: React.FC<AppOtpInputProps> = ({
  value,
  onChange,
  length = DEFAULT_LENGTH,
  error,
  autoFocus,
  containerStyle,
}) => {
  const inputRef = useRef<TextInput>(null);

  const cells = useMemo(() => Array.from({ length }), [length]);

  const handleChangeText = (text: string) => {
    onChange(text.replace(/[^0-9]/g, "").slice(0, length));
  };

  return (
    <View style={containerStyle}>
      <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
        <View style={[styles.box, !!error && styles.boxError]}>
          {cells.map((_, index) => {
            const char = value[index];
            return (
              <View key={index} style={styles.cell}>
                <If condition={!!char}>
                  <AppText variant="h3" color={COLORS.text}>
                    {char}
                  </AppText>
                </If>
                <If condition={!char}>
                  <View style={styles.placeholderLine} />
                </If>
              </View>
            );
          })}
        </View>
      </TouchableWithoutFeedback>

      <TextInput
        ref={inputRef}
        value={value}
        onChangeText={handleChangeText}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        autoComplete="sms-otp"
        autoFocus={autoFocus}
        maxLength={length}
        style={styles.hiddenInput}
        caretHidden
      />

      <If condition={!!error}>
        <AppText variant="body2" color={COLORS.danger} style={styles.error}>
          {error}
        </AppText>
      </If>
    </View>
  );
};

export default memo(AppOtpInput);

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: Sizes.radius,
    paddingVertical: Sizes.large,
    paddingHorizontal: Sizes.medium,
  },
  boxError: {
    borderColor: COLORS.danger,
  },
  cell: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: Sizes.extraLarge,
    height: typography.h3.lineHeight,
  },
  placeholderLine: {
    width: Sizes.medium,
    height: 2,
    borderRadius: 2,
    backgroundColor: COLORS.border,
  },
  hiddenInput: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0,
  },
  error: {
    marginTop: Sizes.font4,
  },
});
