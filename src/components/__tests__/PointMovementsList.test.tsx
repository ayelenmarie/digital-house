import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { render } from "@testing-library/react-native";

import { RootStackParamList } from "../../Home";
import PointMovementsList from "../PointMovementsList";

export const MOCKED_DATA = [
  {
    createdAt: "2022-12-09T10:20:00.909Z",
    product: "Fantastic Granite Bacon",
    points: 100,
    image: "https://loremflickr.com/640/480/technics",
    isRedemption: false,
    id: "3",
  },
  {
    createdAt: "2022-12-09T10:20:00.909Z",
    product: "Handmade Metal Shoes",
    points: 200,
    image: "https://loremflickr.com/640/480/transport",
    isRedemption: true,
    id: "4",
  },
  {
    createdAt: "2022-12-09T10:20:00.909Z",
    product: "Fantastic Fresh Gloves",
    points: 300,
    image: "https://loremflickr.com/640/480/city",
    isRedemption: false,
    id: "5",
  },
  {
    createdAt: "2022-12-09T10:20:00.909Z",
    product: "Rustic Rubber Bacon",
    points: 50,
    image: "https://loremflickr.com/640/480/people",
    isRedemption: true,
    id: "6",
  },
];

export type TestNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  "Home"
>;

test("List renders correctly when passed a list", async () => {
  let navigation: Partial<TestNavigationProps>;

  const { queryByText } = render(
    <PointMovementsList
      list={MOCKED_DATA}
      isLoading={false}
      //@ts-ignore
      navigation={navigation as TestNavigationProps}
    />
  );

  const label = queryByText("Rustic Rubber Bacon");
  expect(label).toBeTruthy();
});

test("List shows spinner while loading", async () => {
  let navigation: Partial<TestNavigationProps>;

  const { queryByTestId } = render(
    <PointMovementsList
      isLoading
      //@ts-ignore
      navigation={navigation as TestNavigationProps}
    />
  );

  const label = queryByTestId("list-spinner");
  expect(label).toBeTruthy();
});

test("List shows error message when error", async () => {
  let navigation: Partial<TestNavigationProps>;

  const { queryByText } = render(
    <PointMovementsList
      error={new Error()}
      //@ts-ignore
      navigation={navigation as TestNavigationProps}
    />
  );

  const label = queryByText(
    "Ha ocurrido un error. Por favor, intentalo nuevamente."
  );
  expect(label).toBeTruthy();
});
