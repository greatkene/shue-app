import { StyleSheet, View } from "react-native";
import React, { memo, useMemo } from "react";
import { Feather } from "@expo/vector-icons";
import { Controller } from "react-hook-form";
import AppButton from "@/shared/ui/atom/AppButton";
import {
  AppCheckbox,
  AppDivider,
  AppText,
  AppTextInput,
} from "@/shared/ui/atom";
import {
  COLORS,
  Sizes,
  getColorAlphaChannel,
  moderateScale,
} from "@/shared/theme";
import GoogleButton from "./GoogleButton";
import { SignUpStepProps } from "../../types";
import { signUpScreenStrings } from "../../strings";

const { signUp, form, primaryCta, divider, social } = signUpScreenStrings;

const ICON_SIZE = moderateScale(20);
const ICON_COLOR = getColorAlphaChannel("textSecondary");

const SignUpStep: React.FC<SignUpStepProps> = ({
  role,
  control,
  errors,
  onContinue,
  onGoogleSignUp,
}) => {
  const copy = useMemo(() => signUp[role], [role]);

  return (
    <View style={styles.container}>
      <View style={styles.headerBlock}>
        <AppText variant="h2" color={COLORS.text}>
          {copy.title}
        </AppText>
        <AppText variant="label" color={COLORS.textSecondary}>
          {copy.subtitle}
        </AppText>
      </View>

      <View style={styles.form}>
        <Controller
          control={control}
          name="fullName"
          render={({ field: { value, onChange, onBlur } }) => (
            <AppTextInput
              label={copy.fullNameLabel}
              required
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              error={errors.fullName?.message}
              placeholder={copy.fullNamePlaceholder}
              textContentType="name"
              autoComplete="name"
              autoCapitalize="words"
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
          name="email"
          render={({ field: { value, onChange, onBlur } }) => (
            <AppTextInput
              label={copy.emailLabel}
              required
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              error={errors.email?.message}
              placeholder={copy.emailPlaceholder}
              keyboardType="email-address"
              textContentType="emailAddress"
              autoComplete="email"
              autoCapitalize="none"
              autoCorrect={false}
              leftIcon={
                <Feather name="mail" size={ICON_SIZE} color={ICON_COLOR} />
              }
            />
          )}
        />

        <Controller
          control={control}
          name="phone"
          render={({ field: { value, onChange, onBlur } }) => (
            <AppTextInput
              label={copy.phoneLabel}
              required
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              error={errors.phone?.message}
              placeholder={copy.phonePlaceholder}
              keyboardType="phone-pad"
              textContentType="telephoneNumber"
              autoComplete="tel"
              autoCorrect={false}
              leftIcon={
                <Feather name="phone" size={ICON_SIZE} color={ICON_COLOR} />
              }
            />
          )}
        />

        <Controller
          control={control}
          name="agreeToTerms"
          render={({ field: { value, onChange } }) => (
            <AppCheckbox
              checked={value}
              onChange={onChange}
              label={form.agreeToTerms}
              error={errors.agreeToTerms?.message}
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

      <AppDivider label={divider.or} style={styles.divider} />

      <GoogleButton
        label={social.continueWithGoogle}
        onPress={onGoogleSignUp}
      />
    </View>
  );
};

export default memo(SignUpStep);

const styles = StyleSheet.create({
  container: {
    gap: Sizes.extraLarge,
  },
  headerBlock: {
    gap: Sizes.base,
  },
  form: {
    gap: Sizes.large,
  },
  divider: {
    marginVertical: Sizes.base,
  },
});
