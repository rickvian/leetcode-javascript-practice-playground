import { numKLenSubstrNoRepeats } from '../1100-find-k-length-substrings-with-no-repeated-characters.js';

describe('1100-find-k-length-substrings-with-no-repeated-characters', () => {
  it("numKLenSubstrNoRepeats(\"abcdef\", 2)", () => {
    const result = numKLenSubstrNoRepeats("abcdef", 2);
    expect(result).toEqual(5);
  });

  it("numKLenSubstrNoRepeats(\"\", 1)", () => {
    const result = numKLenSubstrNoRepeats("", 1);
    expect(result).toEqual(0);
  });

  it("numKLenSubstrNoRepeats(\"a\", 1)", () => {
    const result = numKLenSubstrNoRepeats("a", 1);
    expect(result).toEqual(1);
  });

  it("numKLenSubstrNoRepeats(\"abba\", 3)", () => {
    const result = numKLenSubstrNoRepeats("abba", 3);
    expect(result).toEqual(0);
  });

  it("numKLenSubstrNoRepeats(\"  hello  \", 2)", () => {
    const result = numKLenSubstrNoRepeats("  hello  ", 2);
    expect(result).toEqual(5);
  });
});
