import { AuthStackParamList } from "@/app/navigation/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useCallback } from "react";

const useLandingNavigation = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const handleContinue = useCallback(() => {
    navigation.navigate("Role");
  }, [navigation]);
  const handleLogin = useCallback(() => {
    navigation.navigate("Login");
  }, [navigation]);
  return { handleContinue, handleLogin };
};

export default useLandingNavigation;
