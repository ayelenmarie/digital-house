import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Text, ScrollView } from "react-native";

import CustomButton from "./src/components/CustomButton";
import Header from "./src/components/Header";
import PointMovementsList from "./src/components/PointMovementsList";
import PointsSummary from "./src/components/PointsSummary";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.contentContainer}>
        <Header />
        <PointsSummary />
        <PointMovementsList />
        <CustomButton>
          <Text>Todos</Text>
        </CustomButton>
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
});
