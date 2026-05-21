import { TypographyVariant } from "../theme/tokens";
import type {
  StyleProp,
  TextInputProps,
  TextProps,
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

export interface IconProps {
    fill?: string;
    [key: string]: unknown;
}
  