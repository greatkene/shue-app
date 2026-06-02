import { useCachedResources } from "@/shared/hooks";
import { StyleSheet, View } from "react-native";
import { QueryClientProvider } from "@tanstack/react-query";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { ToastProvider } from "@/app/providers";
import { queryClient } from "@/shared/lib/queryClient";
import Router from "@/app/navigation/Router";

export default function App() {
  const { isLoaded, isReady, onSplashFinish } = useCachedResources();

  if (!isLoaded) {
    return <View style={{ flex: 1 }} />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <ToastProvider>
            <Router />
          </ToastProvider>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
