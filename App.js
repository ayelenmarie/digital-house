import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";

import CustomButton from "./src/components/CustomButton";
import Header from "./src/components/Header";
import PointMovementsList from "./src/components/PointMovementsList";
import PointsSummary from "./src/components/PointsSummary";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded] = useFonts({
    avenir: require("./assets/fonts/Avenir_Roman.otf"),
    "avenir-bold": require("./assets/fonts/Avenir_Black.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (loaded) {
      await SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <ScrollView style={styles.contentContainer}>
        <Header />
        <PointsSummary />
        <PointMovementsList />
        <CustomButton buttonText="Todos" />
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  buttonText: {
    fontWeight: "800",
    fontSize: 16,
    color: "#FFFFFF",
  },
});
