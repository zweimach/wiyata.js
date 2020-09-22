import { validParentheses } from "@/leetcode/valid-parentheses";

describe("validParentheses", () => {
  it("returns true when balanced", () => {
    expect(validParentheses("{([({[]}[])()])}")).toBe(true);
    expect(validParentheses("[]()[]{}{}()[]")).toBe(true);
  });

  it("returns false when not balanced", () => {
    expect(validParentheses("{{[[(((")).toBe(false);
    expect(validParentheses("[](){}(){}[]]]]")).toBe(false);
  });
});
