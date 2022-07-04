import { integerToRoman } from "./integer-to-roman";

describe("integerToRoman", () => {
  it("returns roman numerals", () => {
    expect(integerToRoman(1)).toBe("I");
    expect(integerToRoman(58)).toBe("LVIII");
    expect(integerToRoman(1994)).toBe("MCMXCIV");
  });
});
