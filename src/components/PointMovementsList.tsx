import { View, StyleSheet, FlatList } from "react-native";

import CategoryText from "./CategoryText";
import PointMovementItem from "./PointMovementItem";
import { Product } from "../types";

interface Props {
  list: Product[];
  error: Error;
  isLoading: boolean;
}

const PointMovementsList = ({ list, error, isLoading }: Props) => {
  return (
    <View style={styles.container}>
      <CategoryText>TUS MOVIMIENTOS</CategoryText>
      <FlatList
        style={styles.contentContainer}
        data={list}
        renderItem={({ item }) => (
          <PointMovementItem item={item} key={item.id} onPress={() => {}} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: "100%",
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
