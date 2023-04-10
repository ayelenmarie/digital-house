import { isError } from "lodash";
import { ActivityIndicator, Text } from "react-native";

const ListFooter = ({
  isLoading,
  error,
}: {
  isLoading: boolean;
  error?: Error;
}) => {
  const hasError = isError(error);

  return (
    <>
      {hasError && !isLoading && (
        <Text>Ha ocurrido un error. Por favor, intentalo nuevamente.</Text>
      )}
      {isLoading && (
        <ActivityIndicator testID="list-spinner" color="#334FFA" size="large" />
      )}
    </>
  );
};

export default ListFooter;
