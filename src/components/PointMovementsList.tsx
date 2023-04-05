import { View, Text, StyleSheet } from "react-native";

import PointMovementItem from "./PointMovementItem";

const PointMovementsList = () => {
  return (
    <View style={styles.container}>
      <Text>TUS MOVIMIENTOS</Text>
      <View style={styles.contentContainer}>
        <PointMovementItem />
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
