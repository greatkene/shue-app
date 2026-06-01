import { AuthStackParamList } from "@/app/navigation/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormValues, LoginMethod } from "../../types";
import { loginSchema } from "../../schema";

const useLogin = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    resetField,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { method: "phone", identifier: "", password: "" },
    mode: "onTouched",
  });

  const method = watch("method");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = useCallback(
    () => setIsPasswordVisible((prev) => !prev),
    [],
  );

  const handleChangeMethod = useCallback(
    (next: LoginMethod) => {
      setValue("method", next);
      resetField("identifier");
    },
    [setValue, resetField],
  );

  const handleForgotPassword = useCallback(() => {
    navigation.navigate("ForgotPassword");
  }, [navigation]);

  const handleLogin = handleSubmit((_values) => {
    // TODO: wire up authentication request with validated values.
  });

  return {
    control,
    errors,
    method,
    isPasswordVisible,
    togglePasswordVisibility,
    handleChangeMethod,
    handleForgotPassword,
    handleLogin,
  };
};

export default useLogin;
