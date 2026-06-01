import { StyleSheet, View } from "react-native";
import React, { memo } from "react";
import { Feather } from "@expo/vector-icons";
import AppButton from "@/shared/ui/atom/AppButton";
import { AppText } from "@/shared/ui/atom";
import { COLORS, Sizes, moderateScale } from "@/shared/theme";
import { FinishStepProps } from "../../types";
import { signUpScreenStrings } from "../../strings";

const { finish } = signUpScreenStrings;

const ICON_SIZE = moderateScale(20);

const FinishStep: React.FC<FinishStepProps> = ({ onLogin }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconCircle}>
          <Feather
            name="check-circle"
            size={moderateScale(32)}
            color={COLORS.primary}
          />
        </View>

        <AppText
          variant="h1"
          color={COLORS.textSecondary}
          style={styles.centerText}
        >
          {finish.title}
        </AppText>
        <AppText
          variant="body2"
          color={COLORS.textSecondary}
          style={styles.centerText}
        >
          {finish.subtitle}
        </AppText>
      </View>

      <AppButton
        onPress={onLogin}
        icon={
          <Feather name="arrow-right" size={ICON_SIZE} color={COLORS.white} />
        }
      >
        {finish.login}
      </AppButton>
    </View>
  );
};

export default memo(FinishStep);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    gap: Sizes.xxxl,
  },
  content: {
    alignItems: "center",
    gap: Sizes.medium,
    paddingTop: Sizes.xxxl,
  },
  iconCircle: {
    width: moderateScale(80),
    height: moderateScale(80),
    borderRadius: moderateScale(80),
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
  },
  centerText: {
    textAlign: "center",
  },
});
