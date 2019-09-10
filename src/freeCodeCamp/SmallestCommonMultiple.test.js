import { smallestCommons } from "./SmallestCommonMultiple";

describe("smallestCommons", () => {
  it("returns smallest common multiple", () => {
    expect(smallestCommons([5, 1])).toBe(60);
    expect(smallestCommons([23, 18])).toBe(6056820);
  });
});
