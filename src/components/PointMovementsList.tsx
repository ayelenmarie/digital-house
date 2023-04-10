import { View, StyleSheet, FlatList, Platform } from "react-native";

import CategoryText from "./CategoryText";
import ListFooter from "./ListFooter";
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
        contentContainerStyle={{ paddingBottom: 20 }}
        ListFooterComponent={() => (
          <ListFooter isLoading={isLoading} error={error} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === "ios" ? "62%" : "50%",
  },
  contentContainer: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginBottom: 43,
    borderRadius: 10,
  },
});

export default PointMovementsList;
