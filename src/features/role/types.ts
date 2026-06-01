import { ComponentType } from "react";

export interface RoleIconProps {
  size?: number;
  color?: string;
}

export interface RoleCardProps {
  Icon: ComponentType<RoleIconProps>;
  label: string;
  description: string;
  isSelected: boolean;
  onPress?: () => void;
}

export type RoleValue = "buyer" | "seller";

export interface RoleOption {
  value: RoleValue;
  label: string;
  description: string;
  Icon: ComponentType<RoleIconProps>;
}
