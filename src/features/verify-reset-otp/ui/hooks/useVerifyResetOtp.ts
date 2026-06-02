import { AuthStackParamList } from "@/app/navigation/types";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ResetOtpFormValues } from "../../types";
import { resetOtpSchema } from "../../schema";

const RESEND_SECONDS = 30;

const useVerifyResetOtp = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const { params } =
    useRoute<RouteProp<AuthStackParamList, "VerifyResetOTP">>();

  const [secondsLeft, setSecondsLeft] = useState(RESEND_SECONDS);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ResetOtpFormValues>({
    resolver: zodResolver(resetOtpSchema),
    defaultValues: { code: "" },
    mode: "onTouched",
  });

  /* Countdown for the resend-code action. */
  useEffect(() => {
    if (secondsLeft <= 0) return;
    const timer = setTimeout(() => setSecondsLeft((prev) => prev - 1), 1000);
    return () => clearTimeout(timer);
  }, [secondsLeft]);

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleResend = useCallback(() => {
    // TODO: trigger resend-code request for params.reference.
    setSecondsLeft(RESEND_SECONDS);
    reset({ code: "" });
  }, [reset]);

  const handleVerify = handleSubmit((_values) => {
    // TODO: verify the entered code against params.reference before continuing.
    navigation.navigate("ResetPassword", { reference: params.reference });
  });

  return {
    control,
    errors,
    secondsLeft,
    canResend: secondsLeft <= 0,
    handleGoBack,
    handleResend,
    handleVerify,
  };
};

export default useVerifyResetOtp;
