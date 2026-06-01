import { StyleSheet, View } from "react-native";
import React, { memo } from "react";
import { Sizes, getColorAlphaChannel } from "@/shared/theme";
import { AppText } from "@/shared/ui/atom";
import AppButton from "@/shared/ui/atom/AppButton";
import { SafeAreaView } from "react-native-safe-area-context";
import useLandingNavigation from "../hooks/use-landing-navigation";
import { landingScreenStrings } from "../../strings";

const { hero, primaryCta, footer } = landingScreenStrings;

const Landing = () => {
  const { handleContinue, handleLogin } = useLandingNavigation();
  return (
    <SafeAreaView edges={["top", "bottom"]} style={[styles.container]}>
      <View style={[styles.topSectionStyle]}></View>
      <View style={[styles.bottomSectionStyle]}>
        <AppText
          style={[styles.titleTextStyle]}
          color={getColorAlphaChannel("textSecondary")}
          variant="h2"
        >
          {hero.title}
        </AppText>
        <AppText
          style={[styles.descriptionTextStyle]}
          color={getColorAlphaChannel("textSecondary")}
          variant="body2"
        >
          {hero.subtitle}
        </AppText>
        <AppButton onPress={handleContinue}>{primaryCta.signUp}</AppButton>
        <AppText color={getColorAlphaChannel("textSecondary")}>
          {footer.hasAccountPrompt}
          <AppText
            color={getColorAlphaChannel("textSecondary")}
            onPress={handleLogin}
          >
            {footer.logInCta}
          </AppText>
        </AppText>
      </View>
    </SafeAreaView>
  );
};

export default memo(Landing);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: getColorAlphaChannel("background"),
  },
  topSectionStyle: {
    flex: 1,
  },
  bottomSectionStyle: {
    borderRadius: Sizes.xxl,
    backgroundColor: getColorAlphaChannel("background"),
    paddingVertical: Sizes.large,
    paddingHorizontal: Sizes.padding,
    gap: Sizes.medium,
    alignItems: "center",
    borderWidth: 2,
    borderColor: getColorAlphaChannel("border"),
    borderBottomColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    paddingBottom: Sizes.base,
  },
  titleTextStyle: {
    textAlign: "center",
    fontWeight: "bold",
  },
  descriptionTextStyle: {
    textAlign: "center",
    color: getColorAlphaChannel("textSecondary"),
  },
});
