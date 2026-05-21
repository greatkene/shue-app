import { useState, useEffect, useCallback } from "react";
import {
  useFonts,
  Geist_100Thin,
  Geist_300Light,
  Geist_400Regular,
  Geist_500Medium,
  Geist_600SemiBold,
  Geist_700Bold,
} from "@expo-google-fonts/geist";
import { UseCachedResourcesResult } from "../types";

export const useCachedResources = (): UseCachedResourcesResult => {
  const [fontsLoaded] = useFonts({
    Geist_100Thin,
    Geist_300Light,
    Geist_400Regular,
    Geist_500Medium,
    Geist_600SemiBold,
    Geist_700Bold,
  });

  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const [splashDone, setSplashDone] = useState(false);

  useEffect(() => {
    if (fontsLoaded) {
      setIsLoadingComplete(true);
    }
  }, [fontsLoaded]);

  const onSplashFinish = useCallback(() => {
    setSplashDone(true);
  }, []);

  const isLoaded = isLoadingComplete;
  const isReady = isLoaded && splashDone;

  return {
    isLoaded,
    isReady,
    onSplashFinish,
  };
};
