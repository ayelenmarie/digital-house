import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/Home";
import ProductDetails from "./src/ProductDetails";
import HomeHeader from "./src/components/HomeHeader";
import ProductDetailsHeader from "./src/components/ProductDetailsHeader";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={() => ({
            header: () => <HomeHeader />,
          })}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={({ route }) => ({
            title: route.params.item.product,
            header: (props) => (
              <ProductDetailsHeader
                title={route.params.item.product}
                {...props}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
