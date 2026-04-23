import { isRationalEqual } from '../0972-equal-rational-numbers.js';

describe('0972-equal-rational-numbers', () => {
  it("isRationalEqual(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = isRationalEqual("ADOBECODEBANC", "ABC");
    expect(result).toEqual(false);
  });

  it("isRationalEqual(\"a\", \"a\")", () => {
    const result = isRationalEqual("a", "a");
    expect(result).toEqual(false);
  });

  it("isRationalEqual(\"a\", \"aa\")", () => {
    const result = isRationalEqual("a", "aa");
    expect(result).toEqual(false);
  });

  it("isRationalEqual(\"\", \"A\")", () => {
    const result = isRationalEqual("", "A");
    expect(result).toEqual(false);
  });
});
