import { StyleSheet, View } from "react-native";
import React, { memo } from "react";
import { Feather } from "@expo/vector-icons";
import AppButton from "@/shared/ui/atom/AppButton";
import { AppText } from "@/shared/ui/atom";
import {
  COLORS,
  Sizes,
  getColorAlphaChannel,
  moderateScale,
} from "@/shared/theme";
import IdUploadCard from "./IdUploadCard";
import { VerificationStepProps } from "../../types";
import { signUpScreenStrings } from "../../strings";

const { verification } = signUpScreenStrings;

const ICON_SIZE = moderateScale(20);

const VerificationStep: React.FC<VerificationStepProps> = ({
  frontIdUri,
  backIdUri,
  onPickFront,
  onPickBack,
  onContinue,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerBlock}>
        <AppText variant="h2" color={COLORS.text}>
          {verification.title}
        </AppText>
        <AppText variant="body2" color={COLORS.textSecondary}>
          {verification.subtitle}
        </AppText>
      </View>

      <View style={styles.cards}>
        <IdUploadCard
          title={verification.frontTitle}
          description={verification.idHint}
          ctaLabel={verification.uploadCta}
          imageUri={frontIdUri}
          onPress={onPickFront}
        />
        <IdUploadCard
          title={verification.backTitle}
          description={verification.idHint}
          ctaLabel={verification.uploadCta}
          imageUri={backIdUri}
          onPress={onPickBack}
        />
      </View>

      <View style={styles.notice}>
        <Feather name="lock" size={ICON_SIZE} color={COLORS.primary} />
        <AppText variant="body2" color={COLORS.primary} style={styles.noticeText}>
          {verification.securityNote}
        </AppText>
      </View>

      <AppButton
        onPress={onContinue}
        icon={
          <Feather name="arrow-right" size={ICON_SIZE} color={COLORS.white} />
        }
      >
        {verification.continueCta}
      </AppButton>
    </View>
  );
};

export default memo(VerificationStep);

const styles = StyleSheet.create({
  container: {
    gap: Sizes.extraLarge,
  },
  headerBlock: {
    gap: Sizes.base,
  },
  cards: {
    gap: Sizes.extraLarge,
  },
  notice: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: Sizes.small,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: Sizes.radius,
    backgroundColor: getColorAlphaChannel("primary", 10),
    padding: Sizes.medium,
  },
  noticeText: {
    flex: 1,
  },
});
