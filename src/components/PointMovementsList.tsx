import { View, StyleSheet } from "react-native";

import CategoryText from "./CategoryText";
import PointMovementItem from "./PointMovementItem";

const PointMovementsList = () => {
  return (
    <View style={styles.container}>
      <CategoryText>TUS MOVIMIENTOS</CategoryText>
      <View style={styles.contentContainer}>
        <PointMovementItem onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  contentContainer: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginBottom: 43,
    borderRadius: 10,
  },
});

export default PointMovementsList;
