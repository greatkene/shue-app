import {
  createNativeStackNavigator,
  type NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { AuthStackParamList } from "./types";
import Login from "@/features/auth/ui/screens/Login";
import SignUp from "@/features/auth/ui/screens/SignUp";
import ForgotPassword from "@/features/forgot-password/ui/screen/ForgotPassword";
import VerifyResetOtp from "@/features/verify-reset-otp/ui/screen/VerifyResetOtp";
import ResetPassword from "@/features/reset-password/ui/screen/ResetPassword";
import Landing from "@/features/landing/ui/screen/Landing";
import Role from "@/features/role/ui/screen/Role";

const Stack = createNativeStackNavigator<AuthStackParamList>();
const headerOptions: NativeStackNavigationOptions = { headerShown: false };

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={headerOptions}>
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Role" component={Role} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="VerifyResetOTP" component={VerifyResetOtp} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
    </Stack.Navigator>
  );
}
