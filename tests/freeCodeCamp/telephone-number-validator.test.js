import { telephoneCheck } from "@/freeCodeCamp/telephone-number-validator";

describe("telephoneCheck", () => {
  it("validates telephone number format", () => {
    expect(telephoneCheck("555-555-5555")).toBe(true);
    expect(telephoneCheck("1 555-555-5555")).toBe(true);
  });

  it("invalidates wrong telephone number format", () => {
    expect(telephoneCheck("(6054756961)")).toBe(false);
    expect(telephoneCheck("1 555)555-5555")).toBe(false);
  });
});
