import { shortestToChar } from '../0821-shortest-distance-to-a-character.js';

describe('0821-shortest-distance-to-a-character', () => {
  it("shortestToChar(\"loveleetcode\", \"e\")", () => {
    const result = shortestToChar("loveleetcode", "e");
    expect(result).toEqual([3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]);
  });

  it("shortestToChar(\"aaab\", \"b\")", () => {
    const result = shortestToChar("aaab", "b");
    expect(result).toEqual([3, 2, 1, 0]);
  });

  it("shortestToChar(\"a\", \"a\")", () => {
    const result = shortestToChar("a", "a");
    expect(result).toEqual([0]);
  });

  it("shortestToChar(\"aaa\", \"a\")", () => {
    const result = shortestToChar("aaa", "a");
    expect(result).toEqual([0, 0, 0]);
  });

  it("shortestToChar(\"abcde\", \"a\")", () => {
    const result = shortestToChar("abcde", "a");
    expect(result).toEqual([0, 1, 2, 3, 4]);
  });

  it("shortestToChar(\"abcde\", \"e\")", () => {
    const result = shortestToChar("abcde", "e");
    expect(result).toEqual([4, 3, 2, 1, 0]);
  });

  it("shortestToChar(\"zbcd\", \"z\")", () => {
    const result = shortestToChar("zbcd", "z");
    expect(result).toEqual([0, 1, 2, 3]);
  });
});
