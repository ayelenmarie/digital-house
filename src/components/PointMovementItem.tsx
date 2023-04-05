import { View, Text, StyleSheet } from "react-native";

const PointMovementItem = () => {
  return (
    <View style={styles.container}>
      <Text>IMAGE</Text>
      <View>
        <Text>Nombre del producto</Text>
        <Text>Fecha</Text>
      </View>
      <Text>+100</Text>
      <Text>{`>`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default PointMovementItem;
