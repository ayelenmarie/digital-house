import {
  View,
  Text,
  StyleSheet,
  Pressable,
  GestureResponderEvent,
} from "react-native";

import CustomText from "./CustomText";

const PointMovementItem = ({
  onPress,
}: {
  onPress: (event: GestureResponderEvent) => void;
}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text>IMAGE</Text>
      <View>
        <CustomText style={styles.productName}>Nombre del producto</CustomText>
        <CustomText>Fecha</CustomText>
      </View>
      <CustomText style={styles.points}>+100</CustomText>
      <CustomText>{`>`}</CustomText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productName: {
    fontFamily: "avenir-bold",
  },
  points: {
    fontFamily: "avenir-bold",
  },
});

export default PointMovementItem;
