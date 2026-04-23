import { maxFreq } from '../1297-maximum-number-of-occurrences-of-a-substring.js';

describe('1297-maximum-number-of-occurrences-of-a-substring', () => {
  it("maxFreq(\"abcdef\", 2)", () => {
    const result = maxFreq("abcdef", 2);
    expect(result).toEqual(0);
  });

  it("maxFreq(\"\", 1)", () => {
    const result = maxFreq("", 1);
    expect(result).toEqual(0);
  });

  it("maxFreq(\"a\", 1)", () => {
    const result = maxFreq("a", 1);
    expect(result).toEqual(0);
  });

  it("maxFreq(\"abba\", 3)", () => {
    const result = maxFreq("abba", 3);
    expect(result).toEqual(0);
  });
});
