import { StyleSheet, View } from "react-native";
import React, { memo } from "react";
import { Feather } from "@expo/vector-icons";
import { Controller } from "react-hook-form";
import AppButton from "@/shared/ui/atom/AppButton";
import { AppText, AppTextInput } from "@/shared/ui/atom";
import {
  COLORS,
  Sizes,
  getColorAlphaChannel,
  moderateScale,
} from "@/shared/theme";
import { CompleteDetailsStepProps } from "../../types";
import { signUpScreenStrings } from "../../strings";

const { completeDetails, primaryCta } = signUpScreenStrings;

const ICON_SIZE = moderateScale(20);
const ICON_COLOR = getColorAlphaChannel("textSecondary");

const CompleteDetailsStep: React.FC<CompleteDetailsStepProps> = ({
  control,
  errors,
  onContinue,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerBlock}>
        <AppText variant="h2" color={COLORS.text}>
          {completeDetails.title}
        </AppText>
        <AppText variant="body1" color={COLORS.textSecondary}>
          {completeDetails.subtitle}
        </AppText>
      </View>

      <View style={styles.form}>
        <Controller
          control={control}
          name="username"
          render={({ field: { value, onChange, onBlur } }) => (
            <AppTextInput
              label={completeDetails.usernameLabel}
              required
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              error={errors.username?.message}
              placeholder={completeDetails.usernamePlaceholder}
              textContentType="username"
              autoComplete="username"
              autoCapitalize="none"
              autoCorrect={false}
              autoFocus
              leftIcon={
                <Feather name="user" size={ICON_SIZE} color={ICON_COLOR} />
              }
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { value, onChange, onBlur } }) => (
            <AppTextInput
              label={completeDetails.passwordLabel}
              required
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              error={errors.password?.message}
              placeholder={completeDetails.passwordPlaceholder}
              secureTextEntry
              textContentType="newPassword"
              autoComplete="new-password"
              autoCapitalize="none"
              autoCorrect={false}
              leftIcon={
                <Feather name="lock" size={ICON_SIZE} color={ICON_COLOR} />
              }
            />
          )}
        />

        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { value, onChange, onBlur } }) => (
            <AppTextInput
              label={completeDetails.confirmPasswordLabel}
              required
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              error={errors.confirmPassword?.message}
              placeholder={completeDetails.confirmPasswordPlaceholder}
              secureTextEntry
              textContentType="newPassword"
              autoComplete="new-password"
              autoCapitalize="none"
              autoCorrect={false}
              leftIcon={
                <Feather name="lock" size={ICON_SIZE} color={ICON_COLOR} />
              }
            />
          )}
        />
      </View>

      <AppButton
        onPress={onContinue}
        icon={
          <Feather name="arrow-right" size={ICON_SIZE} color={COLORS.white} />
        }
      >
        {primaryCta.continue}
      </AppButton>
    </View>
  );
};

export default memo(CompleteDetailsStep);

const styles = StyleSheet.create({
  container: {
    gap: Sizes.extraLarge,
  },
  headerBlock: {
    gap: 1,
  },
  form: {
    gap: Sizes.large,
  },
});
