import { smallestStringWithSwaps } from '../1202-smallest-string-with-swaps.js';

describe('1202-smallest-string-with-swaps', () => {
  it("smallestStringWithSwaps(\"dcab\", [[0, 3], [1, 2]])", () => {
    const result = smallestStringWithSwaps("dcab", [[0, 3], [1, 2]]);
    expect(result).toEqual("bacd");
  });

  it("smallestStringWithSwaps(\"dcab\", [[0, 3], [1, 2], [0, 2]])", () => {
    const result = smallestStringWithSwaps("dcab", [[0, 3], [1, 2], [0, 2]]);
    expect(result).toEqual("abcd");
  });

  it("smallestStringWithSwaps(\"cba\", [[0, 1], [1, 2]])", () => {
    const result = smallestStringWithSwaps("cba", [[0, 1], [1, 2]]);
    expect(result).toEqual("abc");
  });

  it("smallestStringWithSwaps(\"a\", [])", () => {
    const result = smallestStringWithSwaps("a", []);
    expect(result).toEqual("a");
  });

  it("smallestStringWithSwaps(\"ab\", [[0, 1]])", () => {
    const result = smallestStringWithSwaps("ab", [[0, 1]]);
    expect(result).toEqual("ab");
  });

  it("smallestStringWithSwaps(\"zyx\", [[0, 1], [1, 2], [0, 2]])", () => {
    const result = smallestStringWithSwaps("zyx", [[0, 1], [1, 2], [0, 2]]);
    expect(result).toEqual("xyz");
  });
});
