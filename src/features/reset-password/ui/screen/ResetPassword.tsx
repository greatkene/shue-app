import { ScrollView, StyleSheet, View } from "react-native";
import { memo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { Controller } from "react-hook-form";
import AuthHeader from "@/shared/ui/atom/AuthHeader";
import AppButton from "@/shared/ui/atom/AppButton";
import { AppTextInput } from "@/shared/ui/atom";
import {
  COLORS,
  Sizes,
  getColorAlphaChannel,
  moderateScale,
} from "@/shared/theme";
import useResetPassword from "../hooks/useResetPassword";
import { resetPasswordScreenStrings } from "../../strings";

const { header, form, primaryCta } = resetPasswordScreenStrings;

const ICON_SIZE = moderateScale(20);
const ICON_COLOR = getColorAlphaChannel("textSecondary");

const ResetPassword = () => {
  const { control, errors, handleDone } = useResetPassword();

  return (
    <SafeAreaView edges={["top", "bottom"]} style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.scrollContent}
      >
        <AuthHeader title={header.title} description={header.subtitle} />

        <View style={styles.body}>
          <View style={styles.form}>
            <Controller
              control={control}
              name="password"
              render={({ field: { value, onChange, onBlur } }) => (
                <AppTextInput
                  label={form.passwordLabel}
                  required
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  error={errors.password?.message}
                  placeholder={form.passwordPlaceholder}
                  secureTextEntry
                  textContentType="newPassword"
                  autoComplete="new-password"
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoFocus
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
                  label={form.confirmPasswordLabel}
                  required
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  error={errors.confirmPassword?.message}
                  placeholder={form.confirmPasswordPlaceholder}
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

          <View style={styles.spacer} />

          <AppButton
            onPress={handleDone}
            icon={
              <Feather
                name="arrow-right"
                size={ICON_SIZE}
                color={COLORS.white}
              />
            }
          >
            {primaryCta.done}
          </AppButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default memo(ResetPassword);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: getColorAlphaChannel("background"),
  },
  scrollContent: {
    flexGrow: 1,
  },
  body: {
    flex: 1,
    paddingHorizontal: Sizes.padding,
    paddingTop: Sizes.extraLarge,
    gap: Sizes.medium,
  },
  form: {
    gap: Sizes.large,
  },
  spacer: {
    paddingVertical: Sizes.base,
  },
});
