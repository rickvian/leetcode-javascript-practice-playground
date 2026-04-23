import { longestDecomposition } from '../1147-longest-chunked-palindrome-decomposition.js';

describe('1147-longest-chunked-palindrome-decomposition', () => {
  it("longestDecomposition(\"abcabcbb\")", () => {
    const result = longestDecomposition("abcabcbb");
    expect(result).toEqual(1);
  });

  it("longestDecomposition(\"bbbbb\")", () => {
    const result = longestDecomposition("bbbbb");
    expect(result).toEqual(5);
  });

  it("longestDecomposition(\"pwwkew\")", () => {
    const result = longestDecomposition("pwwkew");
    expect(result).toEqual(1);
  });

  it("longestDecomposition(\"\")", () => {
    const result = longestDecomposition("");
    expect(result).toEqual(0);
  });

  it("longestDecomposition(\" \")", () => {
    const result = longestDecomposition(" ");
    expect(result).toEqual(1);
  });

  it("longestDecomposition(\"a\")", () => {
    const result = longestDecomposition("a");
    expect(result).toEqual(1);
  });

  it("longestDecomposition(\"aaaaaa\")", () => {
    const result = longestDecomposition("aaaaaa");
    expect(result).toEqual(6);
  });
});
