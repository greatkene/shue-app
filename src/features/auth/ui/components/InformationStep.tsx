import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import { Feather } from "@expo/vector-icons";
import { Controller } from "react-hook-form";
import AppButton from "@/shared/ui/atom/AppButton";
import { AppText, AppTextInput } from "@/shared/ui/atom";
import {
  COLORS,
  Sizes,
  getColorAlphaChannel,
  moderateScale,
} from "@/shared/theme";
import OfferingChips from "./OfferingChips";
import { InformationStepProps } from "../../types";
import { signUpScreenStrings } from "../../strings";
import { SELLER_OFFERINGS } from "../../variables";

const { information, primaryCta } = signUpScreenStrings;

const ICON_SIZE = moderateScale(20);
const ICON_COLOR = getColorAlphaChannel("textSecondary");

const InformationStep: React.FC<InformationStepProps> = ({
  control,
  errors,
  onContinue,
  onOpenAddress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerBlock}>
        <AppText variant="h2" color={COLORS.text}>
          {information.title}
        </AppText>
        <AppText variant="body2" color={COLORS.textSecondary}>
          {information.subtitle}
        </AppText>
      </View>

      <View style={styles.form}>
        <Controller
          control={control}
          name="shopName"
          render={({ field: { value, onChange, onBlur } }) => (
            <AppTextInput
              label={information.shopNameLabel}
              required
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              error={errors.shopName?.message}
              placeholder={information.shopNamePlaceholder}
              autoCapitalize="words"
              autoCorrect={false}
              leftIcon={
                <Feather name="user" size={ICON_SIZE} color={ICON_COLOR} />
              }
            />
          )}
        />

        <Controller
          control={control}
          name="bio"
          render={({ field: { value, onChange, onBlur } }) => (
            <AppTextInput
              label={information.bioLabel}
              required
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              error={errors.bio?.message}
              placeholder={information.bioPlaceholder}
              multiline
              numberOfLines={5}
              inputContainerStyle={styles.bioInputContainer}
              style={styles.bioInput}
            />
          )}
        />

        <Controller
          control={control}
          name="address"
          render={({ field: { value } }) => (
            <TouchableOpacity activeOpacity={0.8} onPress={onOpenAddress}>
              <View pointerEvents="none">
                <AppTextInput
                  label={information.addressLabel}
                  required
                  value={value}
                  editable={false}
                  error={errors.address?.message}
                  placeholder={information.addressPlaceholder}
                  rightIcon={
                    <Feather
                      name="chevron-down"
                      size={ICON_SIZE}
                      color={ICON_COLOR}
                    />
                  }
                />
              </View>
            </TouchableOpacity>
          )}
        />

        <Controller
          control={control}
          name="phone"
          render={({ field: { value, onChange, onBlur } }) => (
            <AppTextInput
              label={information.phoneLabel}
              required
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              error={errors.phone?.message}
              placeholder={information.phonePlaceholder}
              keyboardType="phone-pad"
              textContentType="telephoneNumber"
              autoComplete="tel"
              autoCorrect={false}
              leftIcon={
                <Feather name="phone" size={ICON_SIZE} color={ICON_COLOR} />
              }
            />
          )}
        />
      </View>

      <View style={styles.offeringsBlock}>
        <View style={styles.offeringsHeader}>
          <AppText variant="h6" color={COLORS.text}>
            {information.offeringsTitle}
          </AppText>
          <View style={styles.offeringsLine} />
        </View>

        <Controller
          control={control}
          name="offerings"
          render={({ field: { value, onChange } }) => (
            <OfferingChips
              options={SELLER_OFFERINGS}
              value={value}
              onChange={onChange}
              error={errors.offerings?.message}
            />
          )}
        />
      </View>

      <AppButton
        onPress={onContinue}
        icon={
          <Feather name="arrow-right" size={ICON_SIZE} color={COLORS.white} />
        }
      >
        {primaryCta.next}
      </AppButton>
    </View>
  );
};

export default memo(InformationStep);

const styles = StyleSheet.create({
  container: {
    gap: Sizes.extraLarge,
  },
  headerBlock: {
    gap: Sizes.base,
  },
  form: {
    gap: Sizes.large,
  },
  bioInputContainer: {
    alignItems: "flex-start",
    minHeight: moderateScale(120),
  },
  bioInput: {
    height: "100%",
    minHeight: moderateScale(96),
    textAlignVertical: "top",
  },
  offeringsBlock: {
    gap: Sizes.medium,
  },
  offeringsHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: Sizes.medium,
  },
  offeringsLine: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: COLORS.border,
  },
});
