import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import AppButton from "@/shared/ui/atom/AppButton";
import { AppText } from "@/shared/ui/atom";
import If from "@/shared/ui/atom/If";
import {
  COLORS,
  Sizes,
  getColorAlphaChannel,
  moderateScale,
} from "@/shared/theme";
import { FinishStepProps } from "../../types";
import { signUpScreenStrings } from "../../strings";

const { finish } = signUpScreenStrings;
const { pending, verified } = finish;

const ICON_SIZE = moderateScale(20);

const VerificationBadge: React.FC = () => (
  <View style={styles.badge}>
    <Ionicons
      name="shield-checkmark-outline"
      size={moderateScale(44)}
      color={COLORS.primary}
    />
  </View>
);

interface StatusCardProps {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

const StatusCard: React.FC<StatusCardProps> = ({
  title,
  subtitle,
  children,
}) => (
  <View style={styles.card}>
    <View style={styles.cardRow}>
      <View style={styles.cardIcon}>
        <Ionicons
          name="shield-checkmark-outline"
          size={ICON_SIZE}
          color={COLORS.primary}
        />
      </View>
      <View style={styles.cardTexts}>
        <AppText variant="h3" color={COLORS.primary}>
          {title}
        </AppText>
        <AppText variant="body2" color={getColorAlphaChannel("primary", 80)}>
          {subtitle}
        </AppText>
      </View>
    </View>
    {children}
  </View>
);

const FinishStep: React.FC<FinishStepProps> = ({
  status,
  onGoToDashboard,
  onPreviewToggle,
}) => {
  const copy = status === "pending" ? pending : verified;

  return (
    <View style={styles.container}>
      {/* TODO (temporary): tapping the badge flips pending/verified for design
          review. Drive `status` from the verification API once it exists. */}
      <TouchableOpacity activeOpacity={1} onPress={onPreviewToggle}>
        <VerificationBadge />
      </TouchableOpacity>

      <View style={styles.headerText}>
        <AppText variant="h1" color={COLORS.text} style={styles.centerText}>
          {copy.title}
        </AppText>
        <AppText
          variant="body1"
          color={COLORS.textSecondary}
          style={styles.centerText}
        >
          {copy.subtitle}
        </AppText>
      </View>

      <If condition={status === "pending"}>
        <StatusCard title={pending.cardTitle} subtitle={pending.cardSubtitle}>
          <View style={styles.approvalPill}>
            <Feather
              name="clock"
              size={moderateScale(16)}
              color={COLORS.primary}
            />
            <AppText
              variant="body2"
              color={getColorAlphaChannel("primary", 85)}
              style={styles.approvalText}
            >
              {pending.expectedApprovalLabel}
              <AppText variant="label" color={COLORS.primary}>
                {pending.expectedApprovalValue}
              </AppText>
            </AppText>
          </View>
        </StatusCard>

        <AppText
          variant="body2"
          color={COLORS.textSecondary}
          style={styles.centerText}
        >
          {pending.footerNote}
        </AppText>
      </If>

      <If condition={status === "verified"}>
        <StatusCard title={verified.cardTitle} subtitle={verified.cardSubtitle} />

        <View style={styles.unlockedHeader}>
          <AppText variant="h6" color={COLORS.text}>
            {verified.unlockedTitle}
          </AppText>
          <View style={styles.unlockedLine} />
        </View>

        <View style={styles.unlockedList}>
          {verified.unlocked.map((feature, index) => (
            <View key={feature.title}>
              <If condition={index > 0}>
                <View style={styles.unlockedDivider} />
              </If>
              <View style={styles.featureRow}>
                {/* TODO: replace with the real product thumbnail asset. */}
                <View style={styles.featureThumb}>
                  <AppText style={styles.featureEmoji}>👟</AppText>
                </View>
                <View style={styles.featureTexts}>
                  <AppText variant="h5" color={COLORS.text}>
                    {feature.title}
                  </AppText>
                  <AppText variant="body2" color={COLORS.textSecondary}>
                    {feature.subtitle}
                  </AppText>
                </View>
              </View>
            </View>
          ))}
        </View>

        <AppButton
          onPress={onGoToDashboard}
          icon={
            <Feather name="arrow-right" size={ICON_SIZE} color={COLORS.white} />
          }
        >
          {verified.cta}
        </AppButton>
      </If>
    </View>
  );
};

export default memo(FinishStep);

const styles = StyleSheet.create({
  container: {
    gap: Sizes.extraLarge,
    paddingTop: Sizes.xxxl,
  },
  badge: {
    alignSelf: "center",
    width: moderateScale(88),
    height: moderateScale(88),
    borderRadius: Sizes.radiusLarge,
    backgroundColor: getColorAlphaChannel("primary", 12),
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    gap: Sizes.base,
  },
  centerText: {
    textAlign: "center",
  },
  card: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: Sizes.radius,
    backgroundColor: getColorAlphaChannel("primary", 8),
    padding: Sizes.medium,
    gap: Sizes.medium,
  },
  cardRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: Sizes.small,
  },
  cardIcon: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: Sizes.radius,
    backgroundColor: getColorAlphaChannel("primary", 15),
    alignItems: "center",
    justifyContent: "center",
  },
  cardTexts: {
    flex: 1,
    gap: Sizes.font2,
  },
  approvalPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: Sizes.base,
    backgroundColor: getColorAlphaChannel("primary", 15),
    borderRadius: Sizes.radius,
    paddingVertical: Sizes.small,
    paddingHorizontal: Sizes.medium,
  },
  approvalText: {
    flex: 1,
  },
  unlockedHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: Sizes.medium,
  },
  unlockedLine: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: COLORS.border,
  },
  unlockedList: {
    backgroundColor: COLORS.backgroundSecondary,
    borderRadius: Sizes.radius,
    paddingHorizontal: Sizes.medium,
  },
  unlockedDivider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: COLORS.border,
  },
  featureRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: Sizes.medium,
    paddingVertical: Sizes.medium,
  },
  featureThumb: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: Sizes.radius,
    backgroundColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
  },
  featureEmoji: {
    fontSize: moderateScale(20),
  },
  featureTexts: {
    flex: 1,
    gap: Sizes.font2,
  },
});
