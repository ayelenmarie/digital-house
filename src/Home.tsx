import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";

import CustomButton from "./components/CustomButton";
import Header from "./components/Header";
import PointMovementsList from "./components/PointMovementsList";
import PointsSummary from "./components/PointsSummary";
import { useProducts } from "./hooks/useProducts";
import { Product } from "./types";

SplashScreen.preventAutoHideAsync();

export type RootStackParamList = {
  Home: undefined;
  ProductDetails: { item: Product };
};

type NavigationProps = NativeStackScreenProps<RootStackParamList, "Home">;

export type HomeScreenNavigationProp = NavigationProps["navigation"];

const Home = ({ navigation }: { navigation: HomeScreenNavigationProp }) => {
  const { data, accumulatedPoints, error, isLoading } = useProducts();
  const [loaded] = useFonts({
    avenir: require("../assets/fonts/Avenir_Roman.otf"),
    "avenir-bold": require("../assets/fonts/Avenir_Black.otf"),
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
        <PointsSummary points={accumulatedPoints} />
        <PointMovementsList
          list={data as Product[]}
          error={error}
          isLoading={isLoading}
          navigation={navigation}
        />
        <CustomButton buttonText="Todos" />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
};

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

export default Home;
