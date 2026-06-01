import { AuthStackParamList } from "@/app/navigation/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CompleteDetailsFormValues,
  OtpFormValues,
  SignUpFormValues,
  SignUpStep,
  VerificationSubStep,
} from "../../types";
import {
  completeDetailsSchema,
  otpSchema,
  signUpSchema,
} from "../../schema";
import { signUpScreenStrings } from "../../strings";

const RESEND_SECONDS = 30;
const OTP_LENGTH = 6;

const useSignUp = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const [currentStep, setCurrentStep] = useState<SignUpStep>("information");
  const [subStep, setSubStep] = useState<VerificationSubStep>("otp");
  const [secondsLeft, setSecondsLeft] = useState(RESEND_SECONDS);

  const informationForm = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { fullName: "", email: "", phone: "", agreeToTerms: false },
    mode: "onTouched",
  });

  const otpForm = useForm<OtpFormValues>({
    resolver: zodResolver(otpSchema),
    defaultValues: { code: "" },
    mode: "onTouched",
  });

  const completeForm = useForm<CompleteDetailsFormValues>({
    resolver: zodResolver(completeDetailsSchema),
    defaultValues: { username: "", password: "", confirmPassword: "" },
    mode: "onTouched",
  });

  const isOtpSubStep = useMemo(
    () => currentStep === "verification" && subStep === "otp",
    [currentStep, subStep],
  );

  /* Countdown for the resend-code action while on the OTP sub-step. */
  useEffect(() => {
    if (!isOtpSubStep || secondsLeft <= 0) return;
    const timer = setTimeout(() => setSecondsLeft((prev) => prev - 1), 1000);
    return () => clearTimeout(timer);
  }, [isOtpSubStep, secondsLeft]);

  /* Auto-advance to "complete" once a full code is entered. */
  const code = otpForm.watch("code");
  useEffect(() => {
    if (isOtpSubStep && code.length === OTP_LENGTH) {
      otpForm.handleSubmit(() => setSubStep("complete"))();
    }
  }, [code, isOtpSubStep, otpForm]);

  const handleInformationContinue = informationForm.handleSubmit(() => {
    // TODO: submit registration request.
    setCurrentStep("verification");
    setSubStep("otp");
    setSecondsLeft(RESEND_SECONDS);
  });

  const handleCompleteContinue = completeForm.handleSubmit(() => {
    // TODO: submit credentials, then mark the account as verified.
    setCurrentStep("finish");
  });

  const handleResend = useCallback(() => {
    // TODO: trigger resend-code request.
    setSecondsLeft(RESEND_SECONDS);
    otpForm.reset({ code: "" });
  }, [otpForm]);

  const handleGoogleSignUp = useCallback(() => {
    // TODO: wire up Google OAuth flow.
  }, []);

  const handleLogin = useCallback(() => {
    navigation.navigate("Login");
  }, [navigation]);

  const handleGoBack = useCallback(() => {
    if (currentStep === "finish") {
      setCurrentStep("verification");
      setSubStep("complete");
      return;
    }
    if (currentStep === "verification") {
      if (subStep === "complete") {
        // Clear the code so the auto-advance effect doesn't bounce us
        // straight back to "complete".
        otpForm.reset({ code: "" });
        setSecondsLeft(RESEND_SECONDS);
        setSubStep("otp");
        return;
      }
      setCurrentStep("information");
      return;
    }
    navigation.goBack();
  }, [currentStep, subStep, navigation, otpForm]);

  const backLabel = useMemo(
    () =>
      currentStep === "information"
        ? signUpScreenStrings.backToRoles
        : signUpScreenStrings.goBack,
    [currentStep],
  );

  return {
    currentStep,
    backLabel,
    handleGoBack,
    information: {
      control: informationForm.control,
      errors: informationForm.formState.errors,
      onContinue: handleInformationContinue,
      onGoogleSignUp: handleGoogleSignUp,
    },
    verification: {
      subStep,
      otp: {
        control: otpForm.control,
        errors: otpForm.formState.errors,
        secondsLeft,
        canResend: secondsLeft <= 0,
        onResend: handleResend,
      },
      complete: {
        control: completeForm.control,
        errors: completeForm.formState.errors,
        onContinue: handleCompleteContinue,
      },
    },
    finish: {
      onLogin: handleLogin,
    },
  };
};

export default useSignUp;
