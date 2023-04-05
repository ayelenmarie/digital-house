import { StyleSheet, Text } from "react-native";

const CategoryText = ({ ...props }) => {
  return <Text style={styles.text} {...props} />;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "avenir-bold",
    marginVertical: 20,
    fontSize: 14,
    color: "#9B9898",
  },
});

export default CategoryText;
