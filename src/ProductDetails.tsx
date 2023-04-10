import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, SafeAreaView, Image, StyleSheet } from "react-native";

import { RootStackParamList } from "./Home";
import CustomButton from "./components/CustomButton";
import { formatDate } from "./helpers";

type Props = NativeStackScreenProps<RootStackParamList, "ProductDetails">;

const ProductDetails = ({ route, navigation }: Props) => {
  const { item } = route.params;
  const { image, createdAt, points } = item;

  console.log(route);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: image }} />
        </View>
        <Text style={styles.title}>Detalles del producto:</Text>
        <Text style={styles.productDetailsDate}>{`Comprado el ${formatDate(
          createdAt
        )}`}</Text>
        <Text style={styles.title}>Con esta compra acumulaste:</Text>
        <Text style={styles.points}>{`${points} puntos`}</Text>
      </View>
      <CustomButton buttonText="Aceptar" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    marginHorizontal: 20,
    justifyContent: "space-between",
  },
  imageContainer: {
    width: 353,
    height: 350,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginTop: 19,
    marginBottom: 32,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    fontFamily: "avenir-bold",
    fontSize: 14,
    lineHeight: 19.12,
    color: "#9B9898",
  },
  productDetailsDate: {
    marginTop: 19,
    marginBottom: 20,
    fontFamily: "avenir-bold",
    fontSize: 16,
    lineHeight: 21.86,
  },
  points: {
    marginTop: 32,
    fontFamily: "avenir-bold",
    fontSize: 24,
    lineHeight: 32.78,
  },
});

export default ProductDetails;
