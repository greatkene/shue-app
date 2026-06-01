import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

export default function MainRouter() {
  const isLoading = false;
  const isAuthenticated = false;
  const accessToken = null;
  const _hasHydrated = true;

  if (!_hasHydrated || isLoading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppStack /> : <AuthStack key="auth-entry" />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
