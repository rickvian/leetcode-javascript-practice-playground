import { countCharacters } from '../1160-find-words-that-can-be-formed-by-characters.js';

describe('1160-find-words-that-can-be-formed-by-characters', () => {
  it("countCharacters([\"cat\", \"bt\", \"hat\", \"tree\"], \"atach\")", () => {
    const result = countCharacters(["cat", "bt", "hat", "tree"], "atach");
    expect(result).toEqual(6);
  });

  it("countCharacters([\"hello\", \"world\", \"leetcode\"], \"welldonehoneyr\")", () => {
    const result = countCharacters(["hello", "world", "leetcode"], "welldonehoneyr");
    expect(result).toEqual(10);
  });

  it("countCharacters([\"a\", \"b\", \"c\"], \"abc\")", () => {
    const result = countCharacters(["a", "b", "c"], "abc");
    expect(result).toEqual(3);
  });

  it("countCharacters([], \"abc\")", () => {
    const result = countCharacters([], "abc");
    expect(result).toEqual(0);
  });

  it("countCharacters([\"aa\", \"bb\"], \"ab\")", () => {
    const result = countCharacters(["aa", "bb"], "ab");
    expect(result).toEqual(0);
  });

  it("countCharacters([\"a\"], \"\")", () => {
    const result = countCharacters(["a"], "");
    expect(result).toEqual(0);
  });
});
