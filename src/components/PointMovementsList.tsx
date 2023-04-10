import { View, StyleSheet, FlatList } from "react-native";

import CategoryText from "./CategoryText";
import PointMovementItem from "./PointMovementItem";
import { HomeScreenNavigationProp } from "../Home";
import { Product } from "../types";

interface Props {
  list: Product[];
  error: Error;
  isLoading: boolean;
  navigation: HomeScreenNavigationProp;
}

const PointMovementsList = ({ list, error, isLoading, navigation }: Props) => {
  return (
    <View style={styles.container}>
      <CategoryText>TUS MOVIMIENTOS</CategoryText>
      <FlatList
        style={styles.contentContainer}
        data={list}
        renderItem={({ item }) => (
          <PointMovementItem
            item={item}
            key={item.id}
            onPress={() => navigation.navigate("ProductDetails", { item })}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "62%",
  },
  contentContainer: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginBottom: 43,
    paddingBottom: 20,
    borderRadius: 10,
  },
});

export default PointMovementsList;
