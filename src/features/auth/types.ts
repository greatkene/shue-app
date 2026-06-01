import { z } from "zod";
import { TouchableOpacityProps } from "react-native";
import { Control, FieldErrors } from "react-hook-form";
import {
  completeDetailsSchema,
  loginSchema,
  otpSchema,
  signUpSchema,
} from "./schema";

export type LoginMethod = "phone" | "email";

export type LoginFormValues = z.infer<typeof loginSchema>;

export type SignUpFormValues = z.infer<typeof signUpSchema>;

export type OtpFormValues = z.infer<typeof otpSchema>;

export type CompleteDetailsFormValues = z.infer<typeof completeDetailsSchema>;

export type SignUpStep = "information" | "verification" | "finish";

export type VerificationSubStep = "otp" | "complete";

export interface SignUpStepItem {
  key: SignUpStep;
  label: string;
}

export interface SignUpStepperProps {
  steps: ReadonlyArray<SignUpStepItem>;
  currentStep: SignUpStep;
}

export interface GoogleButtonProps extends TouchableOpacityProps {
  label: string;
}

export interface InformationStepProps {
  control: Control<SignUpFormValues>;
  errors: FieldErrors<SignUpFormValues>;
  onContinue: () => void;
  onGoogleSignUp: () => void;
}

export interface VerifyOtpStepProps {
  control: Control<OtpFormValues>;
  errors: FieldErrors<OtpFormValues>;
  secondsLeft: number;
  canResend: boolean;
  onResend: () => void;
}

export interface CompleteDetailsStepProps {
  control: Control<CompleteDetailsFormValues>;
  errors: FieldErrors<CompleteDetailsFormValues>;
  onContinue: () => void;
}

export interface VerificationStepProps {
  subStep: VerificationSubStep;
  otp: VerifyOtpStepProps;
  complete: CompleteDetailsStepProps;
}

export interface FinishStepProps {
  onLogin: () => void;
}

export interface LoginTab {
  label: string;
  value: LoginMethod;
}

export interface LoginMethodTabsProps {
  tabs: ReadonlyArray<LoginTab>;
  value: LoginMethod;
  onChange: (value: LoginMethod) => void;
}
