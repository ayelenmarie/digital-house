import { View, StyleSheet } from "react-native";

import CategoryText from "./CategoryText";
import CustomText from "./CustomText";

const PointsSummary = () => {
  return (
    <View style={styles.container}>
      <CategoryText>TUS PUNTOS</CategoryText>
      <View style={styles.box}>
        <CustomText style={styles.month}>Diciembre</CustomText>
        <CustomText style={styles.points}>10,00.00 pts</CustomText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  box: {
    width: 268,
    height: 143,
    marginHorizontal: 34,
    paddingHorizontal: 19,
    paddingVertical: 21,
    borderRadius: 20,
    backgroundColor: "#334FFA",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },
  month: {
    color: "white",
    fontSize: 16,
    fontWeight: "800",
  },
  points: {
    marginTop: 7,
    color: "white",
    textAlign: "center",
    fontSize: 32,
    fontWeight: "800",
  },
});

export default PointsSummary;
