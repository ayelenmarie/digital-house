import { render } from "@testing-library/react-native";

import PointsSummary from "../PointsSummary";

const MOCKED_POINTS = 248938;

test("Shows formatted points when passed number", async () => {
  const { queryByText } = render(
    <PointsSummary points={MOCKED_POINTS} isLoading={false} />
  );

  const points = queryByText("248,938 pts");

  expect(points).toBeTruthy();
});
