import { render } from "@testing-library/react-native";

import ButtonFilters, { Filter } from "../ButtonFilters";

test("Shows correct buttons when passing Filter.ALL", async () => {
  const { queryByText } = render(
    <ButtonFilters selectedFilter={Filter.ALL} onSelectedFilter={() => {}} />
  );

  const gainedButtonLabel = queryByText("Ganados");
  const redeemedButtonLabel = queryByText("Canjeados");

  expect(gainedButtonLabel).toBeTruthy();
  expect(redeemedButtonLabel).toBeTruthy();
});

test("Shows correct ALL button when passing Filter.GAINED", async () => {
  const { queryByText } = render(
    <ButtonFilters selectedFilter={Filter.GAINED} onSelectedFilter={() => {}} />
  );

  const allButtonLabel = queryByText("Todos");

  expect(allButtonLabel).toBeTruthy();
});

test.only("Shows correct ALL button when passing Filter.REDEEMED", async () => {
  const { queryByText } = render(
    <ButtonFilters
      selectedFilter={Filter.REDEEMED}
      onSelectedFilter={() => {}}
    />
  );

  const allButtonLabel = queryByText("Todos");

  expect(allButtonLabel).toBeTruthy();
});
