import { AuthStackParamList } from "@/app/navigation/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ForgotPasswordFormValues, ForgotPasswordMethod } from "../../types";
import { forgotPasswordSchema } from "../../schema";

const useForgotPassword = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    resetField,
    formState: { errors },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { method: "phone", identifier: "" },
    mode: "onTouched",
  });

  const method = watch("method");

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleToggleMethod = useCallback(() => {
    const next: ForgotPasswordMethod = method === "phone" ? "email" : "phone";
    setValue("method", next);
    resetField("identifier");
  }, [method, setValue, resetField]);

  const handleReset = handleSubmit((values) => {
    // TODO: request a reset code from the backend; use its reference below.
    navigation.navigate("VerifyResetOTP", {
      email: values.identifier,
      reference: "",
    });
  });

  return {
    control,
    errors,
    method,
    handleGoBack,
    handleToggleMethod,
    handleReset,
  };
};

export default useForgotPassword;
