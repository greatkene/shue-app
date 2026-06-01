import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import { LoginMethodTabsProps } from "../../types";
import { COLORS, Sizes, getColorAlphaChannel } from "@/shared/theme";
import { AppText } from "@/shared/ui/atom";

const LoginMethodTabs: React.FC<LoginMethodTabsProps> = ({
  tabs,
  value,
  onChange,
}) => {
  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = tab.value === value;
        return (
          <TouchableOpacity
            key={tab.value}
            activeOpacity={0.8}
            onPress={() => onChange(tab.value)}
            style={[styles.tab, isActive && styles.tabActive]}
          >
            <AppText
              variant="label"
              color={isActive ? COLORS.background : COLORS.textSecondary}
            >
              {tab.label}
            </AppText>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default memo(LoginMethodTabs);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: Sizes.font4,
    borderRadius: Sizes.radius,
    backgroundColor: getColorAlphaChannel("backgroundSecondary"),
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: Sizes.small,
    borderRadius: Sizes.base,
  },
  tabActive: {
    backgroundColor: "#F0F1F3",
  },
});
