import { AuthStackParamList } from "@/app/navigation/types";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useCallback, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AddressOption,
  SellerInformationFormValues,
  SignUpFormValues,
  SignUpStep,
  VerificationStatus,
} from "../../types";
import { sellerInformationSchema, signUpSchema } from "../../schema";
import { signUpScreenStrings } from "../../strings";
import { MOCK_ADDRESSES } from "../../variables";

/* Linear order of the stepper — drives back-navigation between steps. */
const STEP_ORDER: ReadonlyArray<SignUpStep> = [
  "signUp",
  "information",
  "verification",
  "finish",
];

const useSignUp = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const { params } = useRoute<RouteProp<AuthStackParamList, "SignUp">>();
  const role = params?.role ?? "buyer";

  const [currentStep, setCurrentStep] = useState<SignUpStep>("signUp");
  const [frontIdUri, setFrontIdUri] = useState<string | null>(null);
  const [backIdUri, setBackIdUri] = useState<string | null>(null);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [verificationStatus, setVerificationStatus] =
    useState<VerificationStatus>("pending");

  const signUpForm = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { fullName: "", email: "", phone: "", agreeToTerms: false },
    mode: "onTouched",
  });

  const informationForm = useForm<SellerInformationFormValues>({
    resolver: zodResolver(sellerInformationSchema),
    defaultValues: {
      shopName: "",
      bio: "",
      address: "",
      phone: "",
      offerings: [],
    },
    mode: "onTouched",
  });

  const handleSignUpContinue = signUpForm.handleSubmit(() => {
    // TODO: submit registration request.
    setCurrentStep("information");
  });

  const handleInformationContinue = informationForm.handleSubmit(() => {
    // TODO: submit the seller profile.
    setCurrentStep("verification");
  });

  const handleOpenAddress = useCallback(() => setIsAddressModalOpen(true), []);

  const handleCloseAddress = useCallback(() => setIsAddressModalOpen(false), []);

  const handleSelectAddress = useCallback(
    (address: AddressOption) => {
      informationForm.setValue("address", address.address, {
        shouldValidate: true,
      });
      setIsAddressModalOpen(false);
    },
    [informationForm],
  );

  const handlePickFrontId = useCallback(() => {
    // TODO: launch the image picker / camera and store the front-ID asset.
    setFrontIdUri(null);
  }, []);

  const handlePickBackId = useCallback(() => {
    // TODO: launch the image picker / camera and store the back-ID asset.
    setBackIdUri(null);
  }, []);

  const handleVerificationContinue = useCallback(() => {
    // TODO: upload the captured IDs for verification.
    setCurrentStep("finish");
  }, []);

  const handleGoogleSignUp = useCallback(() => {
    // TODO: wire up Google OAuth flow.
  }, []);

  const handleGoToDashboard = useCallback(() => {
    // TODO: mark the session authenticated so the router swaps to AppStack.
  }, []);

  // TODO (temporary): preview toggle for the under-review / verified states.
  const handlePreviewToggle = useCallback(() => {
    setVerificationStatus((prev) =>
      prev === "pending" ? "verified" : "pending",
    );
  }, []);

  const handleGoBack = useCallback(() => {
    const index = STEP_ORDER.indexOf(currentStep);
    if (index <= 0) {
      navigation.goBack();
      return;
    }
    setCurrentStep(STEP_ORDER[index - 1]);
  }, [currentStep, navigation]);

  const backLabel = useMemo(
    () =>
      currentStep === "signUp"
        ? signUpScreenStrings.backToRoles
        : signUpScreenStrings.goBack,
    [currentStep],
  );

  const headerTitle = useMemo(
    () =>
      currentStep === "finish"
        ? signUpScreenStrings.finish.headerTitle
        : signUpScreenStrings.flowTitle[role],
    [currentStep, role],
  );

  return {
    currentStep,
    backLabel,
    headerTitle,
    handleGoBack,
    signUp: {
      role,
      control: signUpForm.control,
      errors: signUpForm.formState.errors,
      onContinue: handleSignUpContinue,
      onGoogleSignUp: handleGoogleSignUp,
    },
    information: {
      control: informationForm.control,
      errors: informationForm.formState.errors,
      onContinue: handleInformationContinue,
      onOpenAddress: handleOpenAddress,
    },
    addressModal: {
      visible: isAddressModalOpen,
      addresses: MOCK_ADDRESSES,
      onSelect: handleSelectAddress,
      onClose: handleCloseAddress,
    },
    verification: {
      frontIdUri,
      backIdUri,
      onPickFront: handlePickFrontId,
      onPickBack: handlePickBackId,
      onContinue: handleVerificationContinue,
    },
    finish: {
      status: verificationStatus,
      onGoToDashboard: handleGoToDashboard,
      onPreviewToggle: handlePreviewToggle,
    },
  };
};

export default useSignUp;
