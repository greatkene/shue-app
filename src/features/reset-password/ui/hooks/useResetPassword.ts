import { AuthStackParamList } from "@/app/navigation/types";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ResetPasswordFormValues } from "../../types";
import { resetPasswordSchema } from "../../schema";

const useResetPassword = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const { params } = useRoute<RouteProp<AuthStackParamList, "ResetPassword">>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: { password: "", confirmPassword: "" },
    mode: "onTouched",
  });

  const handleDone = handleSubmit((values) => {
    // TODO: submit { reference: params.reference, password: values.password }
    // to the reset-password endpoint before navigating.
    void params;
    void values;
    // Drop the reset flow from the stack so the user lands on a fresh Login.
    navigation.reset({ index: 0, routes: [{ name: "Login" }] });
  });

  return {
    control,
    errors,
    handleDone,
  };
};

export default useResetPassword;
