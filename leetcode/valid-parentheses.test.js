import { isValid } from "./valid-parentheses";

describe("validParentheses", () => {
  it("returns true when balanced", () => {
    expect(isValid("{([({[]}[])()])}")).toBe(true);
    expect(isValid("[]()[]{}{}()[]")).toBe(true);
  });

  it("returns false when not balanced", () => {
    expect(isValid("{{[[(((")).toBe(false);
    expect(isValid("[](){}(){}[]]]]")).toBe(false);
  });
});
