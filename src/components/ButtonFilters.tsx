import { useCallback } from "react";
import { StyleSheet, View } from "react-native";

import CustomButton from "./CustomButton";

export enum Filter {
  ALL = "Todos",
  GAINED = "Ganados",
  REDEEMED = "Canjeados",
}

const ButtonFilters = ({
  selectedFilter,
  onSelectedFilter,
}: {
  selectedFilter: Filter;
  onSelectedFilter: (arg0: Filter) => void;
}) => {
  const hasFilter = selectedFilter !== Filter.ALL;

  const handleGainedFilterPress = useCallback(() => {
    onSelectedFilter(Filter.GAINED);
  }, []);

  const handleRedeemedFilterPress = useCallback(() => {
    onSelectedFilter(Filter.REDEEMED);
  }, []);

  const handleAllPress = useCallback(() => {
    onSelectedFilter(Filter.ALL);
  }, []);

  return (
    <View>
      <View style={styles.buttonFiltersContainer}>
        {!hasFilter && (
          <>
            <CustomButton
              buttonText={Filter.GAINED}
              onPress={handleGainedFilterPress}
            />
            <View style={styles.spacer} />
            <CustomButton
              buttonText={Filter.REDEEMED}
              onPress={handleRedeemedFilterPress}
            />
          </>
        )}
        {hasFilter && (
          <CustomButton buttonText={Filter.ALL} onPress={handleAllPress} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonFiltersContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  spacer: {
    width: 13,
  },
});

export default ButtonFilters;
