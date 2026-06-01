import { Feather } from "@expo/vector-icons";
import { moderateScale } from "@/shared/theme";
import { RoleOption } from "./types";
import { roleScreenStrings } from "./strings";

const { roles } = roleScreenStrings;

export const ROLES: RoleOption[] = [
  {
    value: "buyer",
    label: roles.buyer.label,
    description: roles.buyer.description,
    Icon: ({ size = moderateScale(20), ...props }) => (
      <Feather name="shopping-bag" size={size} {...props} />
    ),
  },
  {
    value: "seller",
    label: roles.seller.label,
    description: roles.seller.description,
    Icon: ({ size = moderateScale(20), ...props }) => (
      <Feather name="trending-up" size={size} {...props} />
    ),
  },
];
