import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";

const HomeHeader = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    height: Constants.statusBarHeight,
    backgroundColor: "#F8F8F8",
  },
});

export default HomeHeader;
