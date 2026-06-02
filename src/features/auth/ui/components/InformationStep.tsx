import { StyleSheet, View } from "react-native";
import React, { memo } from "react";
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
import { InformationStepProps } from "../../types";
import { signUpScreenStrings } from "../../strings";

const { header, form, primaryCta, divider, social } = signUpScreenStrings;

const ICON_SIZE = moderateScale(20);
const ICON_COLOR = getColorAlphaChannel("textSecondary");

const InformationStep: React.FC<InformationStepProps> = ({
  control,
  errors,
  onContinue,
  onGoogleSignUp,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerBlock}>
        <AppText variant="h2" color={COLORS.text}>
          {header.title}
        </AppText>
        <AppText variant="label" color={COLORS.textSecondary}>
          {header.subtitle}
        </AppText>
      </View>

      <View style={styles.form}>
        <Controller
          control={control}
          name="fullName"
          render={({ field: { value, onChange, onBlur } }) => (
            <AppTextInput
              label={form.fullNameLabel}
              required
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              error={errors.fullName?.message}
              placeholder={form.fullNamePlaceholder}
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
              label={form.emailLabel}
              required
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              error={errors.email?.message}
              placeholder={form.emailPlaceholder}
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
              label={form.phoneLabel}
              required
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              error={errors.phone?.message}
              placeholder={form.phonePlaceholder}
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

export default memo(InformationStep);

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
