import { rot13 } from "./caesars-cipher";

describe("rot13", () => {
  it("returns encrypted string", () => {
    expect(rot13("ABC")).toBe("NOP");
  });

  it("returns original string", () => {
    expect(rot13(rot13("ABC"))).toBe("ABC");
  });
});
