import { StyleSheet } from "react-native";
import { memo } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { getColorAlphaChannel } from "@/shared/theme";
import { ScreenProps } from "@/shared/types";

const Screen = ({
  children,
  style,
  edges = ["top", "bottom"],
  ...props
}: ScreenProps) => {
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView edges={edges} style={[styles.container, style]} {...props}>
        {children}
      </SafeAreaView>
    </>
  );
};

export default memo(Screen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: getColorAlphaChannel("background"),
  },
});
