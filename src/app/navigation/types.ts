import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
    MainTabs: undefined;
    Profile: undefined
};

export type AuthStackParamList = {
    Login: undefined;
    EmailLogin: undefined;
    LoginWithBiometrics: undefined;
    SignUp: undefined;
    OTPVerification: { email: string; reference: string };
    ForgotPassword: undefined;
    VerifyResetOTP: { email: string; reference: string };
    ResetPassword: { reference: string };
    CreateUsername: undefined;
  };
  
  export type TabStackParamList = {
    Home: undefined;
    Battles: undefined;
    BattleNow: undefined;
    Explore: undefined;
    Profile: undefined;
  };

export type AuthScreenProps<ScreenName extends keyof AuthStackParamList> = NativeStackScreenProps<
  AuthStackParamList,
  ScreenName
>;

export type TabScreenProps<ScreenName extends keyof TabStackParamList> = BottomTabScreenProps<
  TabStackParamList,
  ScreenName
>;