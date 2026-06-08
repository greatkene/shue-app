import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import { Feather } from "@expo/vector-icons";
import { AppText } from "@/shared/ui/atom";
import { COLORS, Sizes, moderateScale } from "@/shared/theme";
import { SignUpHeaderProps } from "../../types";

const CIRCLE_SIZE = moderateScale(44);

const SignUpHeader: React.FC<SignUpHeaderProps> = ({ title, onBack }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onBack}
        style={styles.backCircle}
      >
        <Feather
          name="chevrons-left"
          size={moderateScale(20)}
          color={COLORS.text}
        />
      </TouchableOpacity>

      <AppText variant="h4" color={COLORS.text} style={styles.title}>
        {title}
      </AppText>
    </View>
  );
};

export default memo(SignUpHeader);

const styles = StyleSheet.create({
  container: {
    minHeight: CIRCLE_SIZE,
    justifyContent: "center",
  },
  backCircle: {
    position: "absolute",
    left: 0,
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE,
    backgroundColor: COLORS.backgroundSecondary,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
  },
});
