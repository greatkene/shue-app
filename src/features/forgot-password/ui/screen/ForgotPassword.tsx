import { ScrollView, StyleSheet, View } from "react-native";
import { memo, useMemo } from "react";
import { Screen } from "@/shared/ui/templates";
import { Feather } from "@expo/vector-icons";
import { Controller } from "react-hook-form";
import AuthHeader from "@/shared/ui/atom/AuthHeader";
import AppButton from "@/shared/ui/atom/AppButton";
import {
  AppBackButton,
  AppText,
  AppTextInput,
  KeyboardAwareScroll,
} from "@/shared/ui/atom";
import {
  COLORS,
  Sizes,
  getColorAlphaChannel,
  moderateScale,
} from "@/shared/theme";
import useForgotPassword from "../hooks/useForgotPassword";
import { forgotPasswordScreenStrings } from "../../strings";

const { goBack, header, form, primaryCta } = forgotPasswordScreenStrings;

const ICON_SIZE = moderateScale(20);

const ForgotPassword = () => {
  const {
    control,
    errors,
    method,
    handleGoBack,
    handleToggleMethod,
    handleReset,
  } = useForgotPassword();

  const isPhone = useMemo(() => method === "phone", [method]);

  const toggleLabel = useMemo(
    () => (isPhone ? form.useEmail : form.usePhone),
    [isPhone]
  );

  return (
    <Screen>
      <KeyboardAwareScroll>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.backRow}>
            <AppBackButton label={goBack} onPress={handleGoBack} />
          </View>

          <AuthHeader title={header.title} description={header.subtitle} />

          <View style={styles.body}>
            <View style={styles.form}>
              <Controller
                control={control}
                name="identifier"
                render={({ field: { value, onChange, onBlur } }) => (
                  <AppTextInput
                    label={isPhone ? form.phoneLabel : form.emailLabel}
                    required
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    error={errors.identifier?.message}
                    placeholder={
                      isPhone ? form.phonePlaceholder : form.emailPlaceholder
                    }
                    keyboardType={isPhone ? "phone-pad" : "email-address"}
                    textContentType={
                      isPhone ? "telephoneNumber" : "emailAddress"
                    }
                    autoComplete={isPhone ? "tel" : "email"}
                    autoCapitalize="none"
                    autoCorrect={false}
                    autoFocus
                    leftIcon={
                      <Feather
                        name={isPhone ? "phone" : "mail"}
                        size={ICON_SIZE}
                        color={getColorAlphaChannel("textSecondary")}
                      />
                    }
                  />
                )}
              />

              <AppText
                variant="h6"
                color={getColorAlphaChannel("textSecondary")}
                style={styles.toggle}
                onPress={handleToggleMethod}
              >
                {toggleLabel}
              </AppText>
            </View>

            <View style={styles.spacer} />

            <AppButton
              onPress={handleReset}
              icon={
                <Feather
                  name="arrow-right"
                  size={ICON_SIZE}
                  color={COLORS.white}
                />
              }
            >
              {primaryCta.reset}
            </AppButton>
          </View>
        </ScrollView>
      </KeyboardAwareScroll>
    </Screen>
  );
};

export default memo(ForgotPassword);

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },
  backRow: {
    paddingHorizontal: Sizes.padding,
    paddingTop: Sizes.padding,
  },
  body: {
    flex: 1,
    paddingHorizontal: Sizes.padding,
    paddingTop: Sizes.extraLarge,
    gap: Sizes.medium,
  },
  form: {
    gap: Sizes.small,
  },
  toggle: {
    fontWeight: "600",
    textDecorationLine: "underline",
    alignSelf: "flex-start",
  },
  spacer: {
    paddingVertical: Sizes.base,
  },
});
