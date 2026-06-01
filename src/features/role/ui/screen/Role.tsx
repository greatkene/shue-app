import { ScrollView, StyleSheet, View } from "react-native";
import { memo, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthHeader from "@/shared/ui/atom/AuthHeader";
import { Sizes, getColorAlphaChannel } from "@/shared/theme";
import AppButton from "@/shared/ui/atom/AppButton";
import RoleCard from "../components/RoleCard";
import { RoleValue } from "../../types";
import { roleScreenStrings } from "../../strings";
import { ROLES } from "../../variables";
import useRoleNavigation from "../hooks/use-role-navigation";

const { authHeader, primaryCta } = roleScreenStrings;

const Role = () => {
  const [selectedRole, setSelectedRole] = useState<RoleValue>("buyer");
  const { handleContinue } = useRoleNavigation();

  return (
    <SafeAreaView edges={["top", "bottom"]} style={[styles.container]}>
      <AuthHeader
        title={authHeader.title}
        description={authHeader.subtitle}
      />
      <View style={[styles.contentContainer]}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[styles.scrollViewContentContainer]}
        >
          {ROLES.map((role) => (
            <RoleCard
              key={role.value}
              Icon={role.Icon}
              label={role.label}
              description={role.description}
              isSelected={selectedRole === role.value}
              onPress={() => setSelectedRole(role.value)}
            />
          ))}
        </ScrollView>
      </View>
      <View style={[styles.buttonContainer]}>
        <AppButton onPress={handleContinue}>{primaryCta.continue}</AppButton>
      </View>
    </SafeAreaView>
  );
};

export default memo(Role);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: getColorAlphaChannel("background"),
  },
  contentContainer: {
    flex: 1,
  },
  scrollViewContentContainer: {
    paddingHorizontal: Sizes.padding,
    paddingTop: Sizes.padding,
    gap: Sizes.small,
  },
  buttonContainer: {
    paddingHorizontal: Sizes.padding,
  },
});
