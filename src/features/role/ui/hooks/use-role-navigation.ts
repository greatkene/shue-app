import { AuthStackParamList } from "@/app/navigation/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useCallback } from "react";
import { RoleValue } from "../../types";

const useRoleNavigation = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const handleContinue = useCallback(
    (role: RoleValue) => {
      navigation.navigate("SignUp", { role });
    },
    [navigation],
  );
  return { handleContinue };
};

export default useRoleNavigation;
