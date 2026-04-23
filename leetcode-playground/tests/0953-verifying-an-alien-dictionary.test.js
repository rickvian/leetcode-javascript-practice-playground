import { isAlienSorted } from '../0953-verifying-an-alien-dictionary.js';

describe('0953-verifying-an-alien-dictionary', () => {
  it("isAlienSorted([\"hello\", \"leetcode\"], \"hlabcdefgijkmnopqrstuvwxyz\")", () => {
    const result = isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz");
    expect(result).toEqual(true);
  });

  it("isAlienSorted([\"word\", \"world\", \"row\"], \"worldabcefghijkmnpqstuvxyz\")", () => {
    const result = isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz");
    expect(result).toEqual(false);
  });

  it("isAlienSorted([\"apple\", \"app\"], \"abcdefghijklmnopqrstuvwxyz\")", () => {
    const result = isAlienSorted(["apple", "app"], "abcdefghijklmnopqrstuvwxyz");
    expect(result).toEqual(false);
  });

  it("isAlienSorted([\"kuvp\", \"q\"], \"ngrkuqesjclbmiyvxpdfwhoatz\")", () => {
    const result = isAlienSorted(["kuvp", "q"], "ngrkuqesjclbmiyvxpdfwhoatz");
    expect(result).toEqual(true);
  });

  it("isAlienSorted([\"a\"], \"abcdefghijklmnopqrstuvwxyz\")", () => {
    const result = isAlienSorted(["a"], "abcdefghijklmnopqrstuvwxyz");
    expect(result).toEqual(true);
  });

  it("isAlienSorted([], \"abcdefghijklmnopqrstuvwxyz\")", () => {
    const result = isAlienSorted([], "abcdefghijklmnopqrstuvwxyz");
    expect(result).toEqual(true);
  });
});
