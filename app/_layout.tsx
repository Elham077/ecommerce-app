import { useFonts } from "expo-font"; // <-- اضافه شد
import { SplashScreen, Stack } from "expo-router";
import React, { useEffect } from "react";
import "react-native-reanimated";
import "./global.css";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Rubik_Bold: require("../assets/fonts/Rubik-Bold.ttf"),
    Rubik_Regular: require("../assets/fonts/Rubik-Regular.ttf"),
    Rubik_Medium: require("../assets/fonts/Rubik-Medium.ttf"),
    Rubik_Light: require("../assets/fonts/Rubik-Light.ttf"),
    Rubik_ExtraBold: require("../assets/fonts/Rubik-ExtraBold.ttf"),
    Rubik_SemiBold: require("../assets/fonts/Rubik-SemiBold.ttf"),
  });
  useEffect(() => {
    if (fontsLoaded) {
      // Fonts are loaded, you can perform any additional actions here if needed
      SplashScreen.hideAsync(); //
    }
  }, [fontsLoaded]);
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="modal"
        options={{ presentation: "modal", title: "Modal" }}
      />
    </Stack>
  );
}
