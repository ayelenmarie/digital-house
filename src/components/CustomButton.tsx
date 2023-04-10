import { View, Pressable, PressableProps, StyleSheet } from "react-native";

import CustomText from "./CustomText";

interface Props {
  buttonText: string;
}

const CustomButton = ({ buttonText, ...props }: Props & PressableProps) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} {...props}>
        <CustomText style={styles.buttonText}>{buttonText}</CustomText>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
  },
  button: {
    backgroundColor: "#334FFA",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: "avenir-bold",
    color: "#FFFFFF",
    fontSize: 16,
  },
});

export default CustomButton;
