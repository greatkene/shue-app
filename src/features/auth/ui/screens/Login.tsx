import { ScrollView, StyleSheet, View } from "react-native";
import { memo, useMemo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { Controller } from "react-hook-form";
import AuthHeader from "@/shared/ui/atom/AuthHeader";
import AppButton from "@/shared/ui/atom/AppButton";
import { AppText, AppTextInput } from "@/shared/ui/atom";
import {
  COLORS,
  Sizes,
  getColorAlphaChannel,
  moderateScale,
} from "@/shared/theme";
import LoginMethodTabs from "../components/LoginMethodTabs";
import useLogin from "../hooks/useLogin";
import { LoginTab } from "../../types";

const TABS: ReadonlyArray<LoginTab> = [
  { label: "Login With Phone", value: "phone" },
  { label: "Login With Email", value: "email" },
];

const ICON_SIZE = moderateScale(20);

const Login = () => {
  const {
    control,
    errors,
    method,
    isPasswordVisible,
    togglePasswordVisibility,
    handleChangeMethod,
    handleForgotPassword,
    handleLogin,
  } = useLogin();

  const isPhone = useMemo(() => method === "phone", [method]);

  return (
    <SafeAreaView edges={["top", "bottom"]} style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.scrollContent}
      >
        <AuthHeader
          title="Login"
          description="Input Your Details To Get Started"
        />

        <View style={styles.body}>
          <LoginMethodTabs
            tabs={TABS}
            value={method}
            onChange={handleChangeMethod}
          />

          <View style={styles.form}>
            <Controller
              control={control}
              name="identifier"
              render={({ field: { value, onChange, onBlur } }) => (
                <AppTextInput
                  label={isPhone ? "Phone Number" : "Email Address"}
                  required
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  error={errors.identifier?.message}
                  placeholder={
                    isPhone ? "Enter your number" : "Enter your email"
                  }
                  keyboardType={isPhone ? "phone-pad" : "email-address"}
                  textContentType={isPhone ? "telephoneNumber" : "emailAddress"}
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

            <Controller
              control={control}
              name="password"
              render={({ field: { value, onChange, onBlur } }) => (
                <AppTextInput
                  label="Enter Password"
                  required
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  error={errors.password?.message}
                  placeholder="Enter your password"
                  secureTextEntry={!isPasswordVisible}
                  textContentType="password"
                  autoComplete="password"
                  autoCapitalize="none"
                  autoCorrect={false}
                  leftIcon={
                    <Feather
                      name="lock"
                      size={ICON_SIZE}
                      color={getColorAlphaChannel("textSecondary")}
                    />
                  }
                  rightIcon={
                    <Feather
                      name={isPasswordVisible ? "eye" : "eye-off"}
                      size={ICON_SIZE}
                      color={getColorAlphaChannel("textSecondary")}
                      onPress={togglePasswordVisibility}
                    />
                  }
                />
              )}
            />
          </View>

          <AppText
            variant="h6"
            color={COLORS.text}
            style={styles.forgotPassword}
            onPress={handleForgotPassword}
          >
            Forgotten Password ?
          </AppText>

          <AppButton
            onPress={handleLogin}
            style={styles.loginButton}
            icon={
              <Feather
                name="arrow-right"
                size={ICON_SIZE}
                color={COLORS.white}
              />
            }
          >
            Login
          </AppButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default memo(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: getColorAlphaChannel("background"),
  },
  scrollContent: {
    flexGrow: 1,
  },
  body: {
    paddingHorizontal: Sizes.padding,
    paddingTop: Sizes.extraLarge,
    gap: Sizes.extraLarge,
  },
  form: {
    gap: Sizes.large,
  },
  forgotPassword: {
    fontWeight: "600",
  },
  loginButton: {
    marginTop: Sizes.base,
  },
});
