import { StyleSheet, View } from "react-native";
import React, { memo, useMemo } from "react";
import { SignUpStepperProps } from "../../types";
import { COLORS, Sizes } from "@/shared/theme";
import { AppText } from "@/shared/ui/atom";

const SignUpStepper: React.FC<SignUpStepperProps> = ({
  steps,
  currentStep,
}) => {
  const currentIndex = useMemo(
    () => steps.findIndex((step) => step.key === currentStep),
    [steps, currentStep],
  );

  return (
    <View style={styles.container}>
      {steps.map((step, index) => {
        const isActive = index <= currentIndex;
        return (
          <View key={step.key} style={styles.step}>
            <AppText
              variant="h6"
              color={isActive ? COLORS.text : COLORS.textSecondary}
            >
              {step.label}
            </AppText>
            <View
              style={[styles.bar, isActive ? styles.barActive : styles.barIdle]}
            />
          </View>
        );
      })}
    </View>
  );
};

export default memo(SignUpStepper);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: Sizes.small,
  },
  step: {
    flex: 1,
    gap: Sizes.base,
  },
  bar: {
    height: Sizes.font6,
    borderRadius: Sizes.font6,
  },
  barActive: {
    backgroundColor: COLORS.primary,
  },
  barIdle: {
    backgroundColor: COLORS.border,
  },
});
