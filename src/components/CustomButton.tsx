import { Pressable, PressableProps, StyleSheet } from "react-native";

const CustomButton = ({ ...props }: PressableProps) => {
  return <Pressable style={styles.button} {...props} />;
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#334FFA",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});

export default CustomButton;
