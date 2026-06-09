import { StyleSheet, View } from "react-native";
import React, { memo, useCallback } from "react";
import { AppChip, AppText } from "@/shared/ui/atom";
import If from "@/shared/ui/atom/If";
import { COLORS, Sizes } from "@/shared/theme";
import { OfferingChipsProps } from "../../types";

const OfferingChips: React.FC<OfferingChipsProps> = ({
  options,
  value,
  onChange,
  error,
}) => {
  const toggle = useCallback(
    (optionValue: string) => {
      const next = value.includes(optionValue)
        ? value.filter((item) => item !== optionValue)
        : [...value, optionValue];
      onChange(next);
    },
    [value, onChange],
  );

  return (
    <View style={styles.container}>
      <View style={styles.chips}>
        {options.map((option) => (
          <AppChip
            key={option.value}
            label={option.label}
            color={option.color}
            selected={value.includes(option.value)}
            onPress={() => toggle(option.value)}
          />
        ))}
      </View>

      <If condition={!!error}>
        <AppText variant="body2" color={COLORS.danger}>
          {error}
        </AppText>
      </If>
    </View>
  );
};

export default memo(OfferingChips);

const styles = StyleSheet.create({
  container: {
    gap: Sizes.small,
  },
  chips: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: Sizes.small,
  },
});
