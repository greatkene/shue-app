import { ScrollView, StyleSheet } from "react-native";
import { memo } from "react";
import { Screen } from "@/shared/ui/templates";
import { AppBackButton, KeyboardAwareScroll } from "@/shared/ui/atom";
import If from "@/shared/ui/atom/If";
import { Sizes } from "@/shared/theme";
import SignUpStepper from "../components/SignUpStepper";
import InformationStep from "../components/InformationStep";
import VerificationStep from "../components/VerificationStep";
import FinishStep from "../components/FinishStep";
import useSignUp from "../hooks/useSignUp";
import { signUpScreenStrings } from "../../strings";
import { SignUpStepItem } from "../../types";

const { steps } = signUpScreenStrings;

const STEPS: ReadonlyArray<SignUpStepItem> = [
  { key: "information", label: steps.information },
  { key: "verification", label: steps.verification },
  { key: "finish", label: steps.finish },
];

const SignUp = () => {
  const {
    currentStep,
    backLabel,
    handleGoBack,
    information,
    verification,
    finish,
  } = useSignUp();

  return (
    <Screen>
      <KeyboardAwareScroll>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.content}
        >
          <AppBackButton label={backLabel} onPress={handleGoBack} />

          <SignUpStepper steps={STEPS} currentStep={currentStep} />

          <If condition={currentStep === "information"}>
            <InformationStep {...information} />
          </If>

          <If condition={currentStep === "verification"}>
            <VerificationStep {...verification} />
          </If>

          <If condition={currentStep === "finish"}>
            <FinishStep {...finish} />
          </If>
        </ScrollView>
      </KeyboardAwareScroll>
    </Screen>
  );
};

export default memo(SignUp);

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    paddingHorizontal: Sizes.padding,
    paddingTop: Sizes.padding,
    gap: Sizes.extraLarge,
  },
});
