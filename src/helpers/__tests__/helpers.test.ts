import { formatDate } from "../index";

const testTimestamp = "2022-12-09T10:20:00.909Z";

describe("test helpers", () => {
  it("formats date correctly", () => {
    expect(formatDate(testTimestamp)).toBe("09 de diciembre, 2022");
  });
});
