import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import { Feather } from "@expo/vector-icons";
import { AppText } from "@/shared/ui/atom";
import { COLORS, Sizes, moderateScale } from "@/shared/theme";
import { AddressListItemProps } from "../../types";

const AddressListItem: React.FC<AddressListItemProps> = ({
  title,
  address,
  distance,
  onPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.row}>
      <Feather name="map-pin" size={moderateScale(20)} color={COLORS.text} />

      <View style={styles.texts}>
        <AppText variant="h5" color={COLORS.text}>
          {title}
        </AppText>
        <AppText variant="body2" color={COLORS.textSecondary}>
          {address}
        </AppText>
      </View>

      <AppText variant="body2" color={COLORS.text}>
        {distance}
      </AppText>
    </TouchableOpacity>
  );
};

export default memo(AddressListItem);

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: Sizes.medium,
    paddingVertical: Sizes.medium,
  },
  texts: {
    flex: 1,
    gap: Sizes.font2,
  },
});
