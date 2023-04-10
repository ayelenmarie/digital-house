import { format } from "date-fns";
import { es } from "date-fns/locale";
import {
  View,
  StyleSheet,
  Pressable,
  GestureResponderEvent,
  Image,
} from "react-native";

import CustomText from "./CustomText";
import { Product } from "../types";

const PointMovementItem = ({
  item,
  onPress,
}: {
  item: Product;
  onPress: (event: GestureResponderEvent) => void;
}) => {
  const { image, createdAt, points, product, isRedemption } = item;
  const formattedDate = format(new Date(createdAt), "dd 'de' MMMM, yyyy", {
    locale: es,
  });

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.productInfoContainer}>
        <CustomText style={styles.productName}>{product}</CustomText>
        <CustomText style={styles.date}>{formattedDate}</CustomText>
      </View>
      <View style={styles.pointsContainer}>
        <CustomText
          style={[
            styles.pointsIndicator,
            isRedemption ? styles.negativePoint : styles.positivePoint,
          ]}
        >
          {isRedemption ? `-` : `+`}
        </CustomText>
        <CustomText style={styles.pointsText}>{points}</CustomText>
      </View>
      <CustomText style={styles.arrow}>{`>`}</CustomText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 13,
    width: "100%",
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 10,
  },
  productInfoContainer: {
    marginLeft: 11,
    width: "50%",
  },
  productName: {
    fontFamily: "avenir-bold",
    fontSize: 14,
    lineHeight: 19.12,
    marginBottom: 7,
  },
  date: {
    fontSize: 12,
    lineHeight: 16.39,
  },
  pointsContainer: {
    flexDirection: "row",
  },
  pointsIndicator: {
    fontSize: 16,
    fontFamily: "avenir-bold",
    marginRight: 4,
  },
  negativePoint: {
    color: "#FF0000",
  },
  positivePoint: {
    color: "#00B833",
  },
  pointsText: {
    fontFamily: "avenir-bold",
    marginRight: 12,
    fontSize: 16,
  },
  arrow: {
    fontFamily: "avenir-bold",
    color: "#070707",
    fontSize: 16,
  },
});

export default PointMovementItem;
