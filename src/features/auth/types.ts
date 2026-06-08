import { z } from "zod";
import { TouchableOpacityProps } from "react-native";
import { Control, FieldErrors } from "react-hook-form";
import { RoleValue } from "@/features/role/types";
import {
  completeDetailsSchema,
  loginSchema,
  otpSchema,
  sellerInformationSchema,
  signUpSchema,
} from "./schema";

export type LoginMethod = "phone" | "email";

export type LoginFormValues = z.infer<typeof loginSchema>;

export type SignUpFormValues = z.infer<typeof signUpSchema>;

export type OtpFormValues = z.infer<typeof otpSchema>;

export type CompleteDetailsFormValues = z.infer<typeof completeDetailsSchema>;

export type SellerInformationFormValues = z.infer<
  typeof sellerInformationSchema
>;

export type SignUpStep =
  | "signUp"
  | "information"
  | "verification"
  | "finish";

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

export interface SignUpStepProps {
  role: RoleValue;
  control: Control<SignUpFormValues>;
  errors: FieldErrors<SignUpFormValues>;
  onContinue: () => void;
  onGoogleSignUp: () => void;
}

export interface OfferingOption {
  value: string;
  label: string;
  /** Accent color; chips without one use a neutral treatment. */
  color?: string;
}

export interface OfferingChipsProps {
  options: ReadonlyArray<OfferingOption>;
  value: string[];
  onChange: (value: string[]) => void;
  error?: string;
}

export interface AddressOption {
  id: string;
  title: string;
  address: string;
  distance: string;
}

export interface AddressListItemProps {
  title: string;
  address: string;
  distance: string;
  onPress: () => void;
}

export interface SelectAddressModalProps {
  visible: boolean;
  addresses: ReadonlyArray<AddressOption>;
  onSelect: (address: AddressOption) => void;
  onClose: () => void;
}

export interface SignUpHeaderProps {
  title: string;
  onBack: () => void;
}

export interface InformationStepProps {
  control: Control<SellerInformationFormValues>;
  errors: FieldErrors<SellerInformationFormValues>;
  onContinue: () => void;
  onOpenAddress: () => void;
}

export interface VerifyOtpStepProps {
  control: Control<OtpFormValues>;
  errors: FieldErrors<OtpFormValues>;
  secondsLeft: number;
  canResend: boolean;
  onResend: () => void;
}

export interface IdUploadCardProps {
  title: string;
  description: string;
  ctaLabel: string;
  imageUri?: string | null;
  onPress: () => void;
}

export interface VerificationStepProps {
  frontIdUri: string | null;
  backIdUri: string | null;
  onPickFront: () => void;
  onPickBack: () => void;
  onContinue: () => void;
}

export interface CompleteDetailsStepProps {
  control: Control<CompleteDetailsFormValues>;
  errors: FieldErrors<CompleteDetailsFormValues>;
  onContinue: () => void;
}

export type VerificationStatus = "pending" | "verified";

export interface FinishStepProps {
  status: VerificationStatus;
  onGoToDashboard: () => void;
  /** Temporary preview affordance — flips pending/verified for design review. */
  onPreviewToggle: () => void;
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
