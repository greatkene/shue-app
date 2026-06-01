import { AuthStackParamList } from "@/app/navigation/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useCallback } from "react";

const useRoleNavigation = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const handleContinue = useCallback(() => {
    navigation.navigate("SignUp");
  }, [navigation]);
  return { handleContinue };
};

export default useRoleNavigation;
