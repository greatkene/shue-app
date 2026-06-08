import { ButtonVariant, TypographyVariant } from "../theme/tokens";
import type { NativeSafeAreaViewProps } from "react-native-safe-area-context";
import type {
  KeyboardAvoidingViewProps,
  StyleProp,
  TextInputProps,
  TextProps,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";

export interface ToastProps {
  type: "success" | "fail";
  message: string;
  visible: boolean;
  onClose: () => void;
}

export interface ToastContextProps {
  showToast: (type: "success" | "fail", message: string) => void;
}

export type UseCachedResourcesResult = {
  isLoaded: boolean;
  isReady: boolean;
  onSplashFinish: () => void;
};

export interface AppTextProps extends Omit<TextProps, "style"> {
  variant?: TypographyVariant;
  color?: string;
  style?: TextProps["style"];
}

export interface AppButtonProps extends TouchableOpacityProps {
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  loading?: boolean;
  textStyle?: TextProps["style"];
}

export interface AuthHeaderProps {
  title: string;
  description: string;
}

export interface AppLabelProps extends Omit<TextProps, "style"> {
  label: string;
  required?: boolean;
  style?: TextProps["style"];
}

export interface AppTextInputProps extends Omit<TextInputProps, "style"> {
  label?: string;
  required?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: string;
  containerStyle?: StyleProp<ViewStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  style?: TextInputProps["style"];
}

export interface AppCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  error?: string;
  style?: StyleProp<ViewStyle>;
}

export interface AppDividerProps {
  label?: string;
  style?: StyleProp<ViewStyle>;
}

export interface AppChipProps {
  label: string;
  selected?: boolean;
  /** Accent color; chips without one fall back to a neutral treatment. */
  color?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

export interface AppBackButtonProps extends TouchableOpacityProps {
  label: string;
}

export interface AppOtpInputProps {
  value: string;
  onChange: (value: string) => void;
  length?: number;
  error?: string;
  autoFocus?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}

export interface ScreenProps extends NativeSafeAreaViewProps {
  children: React.ReactNode;
}

export interface IconProps {
  fill?: string;
  [key: string]: unknown;
}
