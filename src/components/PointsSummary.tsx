import { View, Text, StyleSheet } from "react-native";

const PointsSummary = () => {
  return (
    <View style={styles.container}>
      <Text>TUS PUNTOS</Text>
      <View style={styles.box}>
        <Text style={styles.month}>Diciembre</Text>
        <Text style={styles.points}>10,00.00 pts</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
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
