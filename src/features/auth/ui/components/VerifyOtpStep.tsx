import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import { Feather } from "@expo/vector-icons";
import { Controller } from "react-hook-form";
import { AppOtpInput, AppText } from "@/shared/ui/atom";
import { COLORS, Sizes, moderateScale } from "@/shared/theme";
import { VerifyOtpStepProps } from "../../types";
import { signUpScreenStrings } from "../../strings";

const { verifyOtp } = signUpScreenStrings;

const VerifyOtpStep: React.FC<VerifyOtpStepProps> = ({
  control,
  errors,
  secondsLeft,
  canResend,
  onResend,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconBadge}>
        <Feather
          name="message-circle"
          size={moderateScale(24)}
          color={COLORS.textSecondary}
        />
      </View>

      <View style={styles.headerBlock}>
        <AppText variant="h2" color={COLORS.text} style={styles.centerText}>
          {verifyOtp.title}
        </AppText>
        <AppText
          variant="body1"
          color={COLORS.textSecondary}
          style={styles.centerText}
        >
          {verifyOtp.subtitle}
        </AppText>
      </View>

      <Controller
        control={control}
        name="code"
        render={({ field: { value, onChange } }) => (
          <AppOtpInput
            value={value}
            onChange={onChange}
            error={errors.code?.message}
            autoFocus
          />
        )}
      />

      <View style={styles.resendRow}>
        <AppText variant="body2" color={COLORS.textSecondary}>
          {`${verifyOtp.resendCountdownPrefix} ${secondsLeft} ${verifyOtp.resendCountdownSuffix}`}
        </AppText>

        <TouchableOpacity
          activeOpacity={0.8}
          disabled={!canResend}
          onPress={onResend}
          style={[styles.resendButton, !canResend && styles.resendDisabled]}
        >
          <Feather
            name="rotate-ccw"
            size={moderateScale(16)}
            dasimems
            color={COLORS.textSecondary}
          />
          <AppText variant="label" color={COLORS.text}>
            {verifyOtp.resendCode}
          </AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(VerifyOtpStep);

const styles = StyleSheet.create({
  container: {
    gap: Sizes.extraLarge,
  },
  iconBadge: {
    alignSelf: "center",
    width: moderateScale(64),
    height: moderateScale(64),
    borderRadius: Sizes.radius,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: "center",
    justifyContent: "center",
  },
  headerBlock: {
    gap: Sizes.base,
  },
  centerText: {
    textAlign: "center",
  },
  resendRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  resendButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: Sizes.base,
    paddingVertical: Sizes.base,
    paddingHorizontal: Sizes.medium,
    borderRadius: Sizes.radius,
    backgroundColor: COLORS.backgroundSecondary,
  },
  resendDisabled: {
    opacity: 0.6,
  },
});
