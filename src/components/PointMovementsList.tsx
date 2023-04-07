import { View, StyleSheet, FlatList } from "react-native";

import CategoryText from "./CategoryText";
import PointMovementItem from "./PointMovementItem";
import { Product } from "../types";

interface Props {
  list: Product[];
  error: Error;
  isLoading: boolean;
  onItemPress: () => void;
}

const PointMovementsList = ({ list, error, isLoading, onItemPress }: Props) => {
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
            onPress={() => onItemPress()}
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
