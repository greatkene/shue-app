import { Image, StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { AuthHeaderProps } from "@/shared/types";
import { AppText } from "./AppText";
import { Sizes, getColorAlphaChannel } from "@/shared/theme";

const AuthHeader: React.FC<AuthHeaderProps> = ({ title, description }) => {
  return (
    <View style={[styles.container]}>
      <Image
        source={require("@/assets/images/shue-logo-round.png")}
        style={[styles.logo]}
        resizeMode="cover"
      />
      <View style={[styles.contentContainer]}>
        <AppText variant="h2" color={getColorAlphaChannel("text")}>
          {title}
        </AppText>
        <AppText variant="body2" color={getColorAlphaChannel("text")}>
          {description}
        </AppText>
      </View>
    </View>
  );
};

export default memo(AuthHeader);

const styles = StyleSheet.create({
  container: {
    gap: Sizes.medium,
    paddingHorizontal: Sizes.padding,
    paddingTop: Sizes.padding,
  },
  logo: {
    width: Sizes.xxxl,
    height: Sizes.xxxl,
    borderRadius: Sizes.xxxl,
  },
  contentContainer: {
    gap: 1,
  },
});
