import { View, StyleSheet } from "react-native";

import CategoryText from "./CategoryText";
import CustomText from "./CustomText";

const PointsSummary = ({ points }: { points: number }) => {
  const formattedPoints = points.toLocaleString("en-US");
  return (
    <View style={styles.container}>
      <CategoryText>TUS PUNTOS</CategoryText>
      <View style={styles.box}>
        <CustomText style={styles.month}>Diciembre</CustomText>
        <CustomText
          style={styles.points}
        >{`${formattedPoints} pts`}</CustomText>
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
    fontFamily: "avenir-bold",
    color: "white",
    fontSize: 16,
    lineHeight: 22,
  },
  points: {
    fontFamily: "avenir-bold",
    marginTop: 7,
    color: "white",
    textAlign: "center",
    fontSize: 32,
    lineHeight: 44,
  },
});

export default PointsSummary;
