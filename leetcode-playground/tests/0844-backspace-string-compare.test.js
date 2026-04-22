import { backspaceCompare } from '../0844-backspace-string-compare.js';

describe('0844-backspace-string-compare', () => {
  it("backspaceCompare(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = backspaceCompare("ADOBECODEBANC", "ABC");
    expect(result).toEqual(false);
  });

  it("backspaceCompare(\"a\", \"a\")", () => {
    const result = backspaceCompare("a", "a");
    expect(result).toEqual(true);
  });

  it("backspaceCompare(\"a\", \"aa\")", () => {
    const result = backspaceCompare("a", "aa");
    expect(result).toEqual(false);
  });

  it("backspaceCompare(\"\", \"A\")", () => {
    const result = backspaceCompare("", "A");
    expect(result).toEqual(false);
  });
});
