import { ScrollView, StyleSheet } from "react-native";
import { memo } from "react";
import { Screen } from "@/shared/ui/templates";
import { AppBackButton, KeyboardAwareScroll } from "@/shared/ui/atom";
import If from "@/shared/ui/atom/If";
import { Sizes } from "@/shared/theme";
import SignUpStepper from "../components/SignUpStepper";
import SignUpHeader from "../components/SignUpHeader";
import SignUpStep from "../components/SignUpStep";
import InformationStep from "../components/InformationStep";
import VerificationStep from "../components/VerificationStep";
import FinishStep from "../components/FinishStep";
import SelectAddressModal from "../components/SelectAddressModal";
import useSignUp from "../hooks/useSignUp";
import { signUpScreenStrings } from "../../strings";
import { SignUpStepItem } from "../../types";

const { steps } = signUpScreenStrings;

const STEPS: ReadonlyArray<SignUpStepItem> = [
  { key: "signUp", label: steps.signUp },
  { key: "information", label: steps.information },
  { key: "verification", label: steps.verification },
  { key: "finish", label: steps.finish },
];

const SignUp = () => {
  const {
    currentStep,
    backLabel,
    headerTitle,
    handleGoBack,
    signUp,
    information,
    verification,
    finish,
    addressModal,
  } = useSignUp();

  return (
    <Screen>
      <KeyboardAwareScroll>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.content}
        >
          <If condition={currentStep === "signUp"}>
            <AppBackButton label={backLabel} onPress={handleGoBack} />
          </If>

          <If condition={currentStep !== "signUp"}>
            <SignUpHeader title={headerTitle} onBack={handleGoBack} />
          </If>

          <If condition={currentStep !== "finish"}>
            <SignUpStepper steps={STEPS} currentStep={currentStep} />
          </If>

          <If condition={currentStep === "signUp"}>
            <SignUpStep {...signUp} />
          </If>

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

      <SelectAddressModal {...addressModal} />
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
