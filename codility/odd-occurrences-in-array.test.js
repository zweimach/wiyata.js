import { oddOccurrencesInArray } from "./odd-occurrences-in-array";

describe("oddOccurrencesInArray", () => {
  it("returns unpaired element", () => {
    expect(oddOccurrencesInArray([9, 9, 3, 3, 9, 9, 7])).toBe(7);
    expect(oddOccurrencesInArray([2, 3, 4, 6, 7, 7, 6, 4, 3, 2, 9])).toBe(9);
  });
});
