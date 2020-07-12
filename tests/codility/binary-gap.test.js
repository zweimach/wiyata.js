import { binaryGap } from "@/codility/binary-gap";

describe("binaryGap", () => {
  it("returns longest sequence of consecutive zeros", () => {
    expect(binaryGap(9)).toBe(2);
    expect(binaryGap(8)).toBe(0);
    expect(binaryGap(529)).toBe(4);
    expect(binaryGap(1001)).toBe(2);
    expect(binaryGap(32)).toBe(0);
    expect(binaryGap(42)).toBe(1);
    expect(binaryGap(328)).toBe(2);
  });
});
