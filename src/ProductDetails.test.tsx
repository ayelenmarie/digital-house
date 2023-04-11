import { render } from "@testing-library/react-native";

import ProductDetails from "./ProductDetails";
import { TestNavigationProps } from "./components/__tests__/PointMovementsList.test";

const MOCKED_ROUTE = {
  params: {
    item: {
      createdAt: "2022-12-09T10:20:00.909Z",
      product: "Fantastic Granite Bacon",
      points: 100,
      image: "https://loremflickr.com/640/480/technics",
      isRedemption: false,
      id: "3",
    },
  },
};
test("Shows mocked data in details page", async () => {
  const navigation: Partial<TestNavigationProps> = {};
  const { queryByText } = render(
    <ProductDetails
      navigation={navigation as any}
      route={MOCKED_ROUTE as any}
    />
  );

  const date = queryByText("100 puntos");
  expect(date).toBeTruthy();
});
