import Constants from "expo-constants";
import { StyleSheet, Text, View } from "react-native";

const ProductDetailsHeader = ({ title }: { title: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Constants.statusBarHeight + 113,
    paddingHorizontal: 20,
    backgroundColor: "#CFD6FF",
    justifyContent: "flex-end",
  },
  title: {
    marginBottom: 24,
    fontFamily: "avenir-bold",
    fontSize: 24,
  },
});

export default ProductDetailsHeader;
