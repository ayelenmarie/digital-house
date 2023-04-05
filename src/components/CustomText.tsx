import { Text, StyleSheet, TextProps } from "react-native";

const CustomText = ({ ...props }: TextProps) => {
  return <Text style={styles.text} {...props} />;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "avenir",
  },
});

export default CustomText;
