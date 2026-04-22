import { customSortString } from '../0791-custom-sort-string.js';

describe('0791-custom-sort-string', () => {
  it("customSortString(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = customSortString("ADOBECODEBANC", "ABC");
    expect(result).toEqual("BAC");
  });

  it("customSortString(\"a\", \"a\")", () => {
    const result = customSortString("a", "a");
    expect(result).toEqual("a");
  });

  it("customSortString(\"a\", \"aa\")", () => {
    const result = customSortString("a", "aa");
    expect(result).toEqual("aa");
  });

  it("customSortString(\"\", \"A\")", () => {
    const result = customSortString("", "A");
    expect(result).toEqual("A");
  });
});
