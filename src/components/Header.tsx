import { View, StyleSheet, Text } from "react-native";

const Header = () => {
  return (
    <View>
      <Text style={styles.title}>Bienvenido de vuelta!</Text>
      <Text style={styles.name}>Ruben Rodriguez</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontFamily: "avenir-bold",
    lineHeight: 27.32,
  },
  name: {
    fontFamily: "avenir",
    fontSize: 16,
    lineHeight: 21.86,
  },
});

export default Header;
