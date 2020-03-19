import { oddOccurrencesInArray } from "./oddOccurrencesInArray";

describe("oddOccurrencesInArray", () => {
  it("returns longest sequence of consecutive zeros", () => {
    expect(oddOccurrencesInArray([9, 9, 3, 3, 9, 9, 7])).toBe(7);
    expect(oddOccurrencesInArray([2, 3, 4, 6, 7, 7, 6, 4, 3, 2, 9])).toBe(9);
  });
});
