import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { memo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { Controller } from "react-hook-form";
import AppButton from "@/shared/ui/atom/AppButton";
import { AppBackButton, AppOtpInput, AppText } from "@/shared/ui/atom";
import {
  COLORS,
  Sizes,
  getColorAlphaChannel,
  moderateScale,
} from "@/shared/theme";
import useVerifyResetOtp from "../hooks/useVerifyResetOtp";
import { verifyResetOtpScreenStrings } from "../../strings";

const { goBack, header, resend, primaryCta } = verifyResetOtpScreenStrings;

const ICON_SIZE = moderateScale(20);

const VerifyResetOtp = () => {
  const {
    control,
    errors,
    secondsLeft,
    canResend,
    handleGoBack,
    handleResend,
    handleVerify,
  } = useVerifyResetOtp();

  return (
    <SafeAreaView edges={["top", "bottom"]} style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.scrollContent}
      >
        <AppBackButton label={goBack} onPress={handleGoBack} />

        <View style={styles.body}>
          <View style={styles.iconBadge}>
            <Feather
              name="message-circle"
              size={moderateScale(24)}
              color={COLORS.textSecondary}
            />
          </View>

          <View style={styles.headerBlock}>
            <AppText variant="h1" color={COLORS.text} style={styles.centerText}>
              {header.title}
            </AppText>
            <AppText
              variant="body1"
              color={COLORS.textSecondary}
              style={styles.centerText}
            >
              {header.subtitle}
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
              {`${resend.countdownPrefix} ${secondsLeft} ${resend.countdownSuffix}`}
            </AppText>

            <TouchableOpacity
              activeOpacity={0.8}
              disabled={!canResend}
              onPress={handleResend}
              style={[styles.resendButton, !canResend && styles.resendDisabled]}
            >
              <Feather
                name="rotate-ccw"
                size={moderateScale(16)}
                color={COLORS.textSecondary}
              />
              <AppText variant="label" color={COLORS.text}>
                {resend.action}
              </AppText>
            </TouchableOpacity>
          </View>

          <View style={styles.spacer} />

          <AppButton
            onPress={handleVerify}
            icon={
              <Feather
                name="arrow-right"
                size={ICON_SIZE}
                color={COLORS.white}
              />
            }
          >
            {primaryCta.verify}
          </AppButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default memo(VerifyResetOtp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: getColorAlphaChannel("background"),
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: Sizes.padding,
    paddingTop: Sizes.padding,
  },
  body: {
    flex: 1,
    paddingTop: Sizes.extraLarge,
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
  spacer: {
    paddingVertical: Sizes.base,
  },
});
