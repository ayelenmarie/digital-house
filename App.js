import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";

import CustomButton from "./src/components/CustomButton";
import Header from "./src/components/Header";
import PointMovementsList from "./src/components/PointMovementsList";
import PointsSummary from "./src/components/PointsSummary";
import { useProducts } from "./src/hooks/useProducts";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { data, error, isLoading } = useProducts();
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
      <View style={styles.contentContainer}>
        <Header />
        <PointsSummary />
        <PointMovementsList list={data} error={error} isLoading={isLoading} />
        <CustomButton buttonText="Todos" />
        <StatusBar style="auto" />
      </View>
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
