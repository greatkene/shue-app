import { FlatList, Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { memo, useMemo, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppText, AppTextInput } from "@/shared/ui/atom";
import {
  COLORS,
  Sizes,
  getColorAlphaChannel,
  moderateScale,
} from "@/shared/theme";
import AddressListItem from "./AddressListItem";
import { AddressOption, SelectAddressModalProps } from "../../types";
import { signUpScreenStrings } from "../../strings";

const { selectAddress } = signUpScreenStrings;

const SelectAddressModal: React.FC<SelectAddressModalProps> = ({
  visible,
  addresses,
  onSelect,
  onClose,
}) => {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return addresses;
    return addresses.filter(
      (item) =>
        item.title.toLowerCase().includes(term) ||
        item.address.toLowerCase().includes(term),
    );
  }, [addresses, query]);

  const renderItem = ({ item }: { item: AddressOption }) => (
    <AddressListItem
      title={item.title}
      address={item.address}
      distance={item.distance}
      onPress={() => onSelect(item)}
    />
  );

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      statusBarTranslucent
      onRequestClose={onClose}
    >
      <View style={styles.backdrop}>
        <SafeAreaView edges={["top", "bottom"]} style={styles.sheet}>
          <View style={styles.header}>
            <AppText variant="h4" color={COLORS.text} style={styles.headerTitle}>
              {selectAddress.title}
            </AppText>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={onClose}
              style={styles.closeButton}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            >
              <Feather
                name="x-circle"
                size={moderateScale(24)}
                color={COLORS.text}
              />
            </TouchableOpacity>
          </View>

          <AppTextInput
            value={query}
            onChangeText={setQuery}
            placeholder={selectAddress.searchPlaceholder}
            autoCorrect={false}
            leftIcon={
              <Feather
                name="search"
                size={moderateScale(20)}
                color={getColorAlphaChannel("textSecondary")}
              />
            }
          />

          <FlatList
            data={results}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
            ListEmptyComponent={
              <AppText
                variant="body2"
                color={COLORS.textSecondary}
                style={styles.empty}
              >
                {selectAddress.emptyState}
              </AppText>
            }
          />
        </SafeAreaView>
      </View>
    </Modal>
  );
};

export default memo(SelectAddressModal);

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    paddingTop: moderateScale(40),
    backgroundColor: getColorAlphaChannel("black", 40),
  },
  sheet: {
    flex: 1,
    backgroundColor: COLORS.background,
    borderTopLeftRadius: Sizes.radiusLarge,
    borderTopRightRadius: Sizes.radiusLarge,
    paddingHorizontal: Sizes.padding,
    gap: Sizes.large,
  },
  header: {
    minHeight: moderateScale(32),
    justifyContent: "center",
    paddingTop: Sizes.base,
  },
  headerTitle: {
    textAlign: "center",
  },
  closeButton: {
    position: "absolute",
    right: 0,
  },
  listContent: {
    paddingBottom: Sizes.large,
  },
  empty: {
    textAlign: "center",
    paddingVertical: Sizes.xxl,
  },
});
