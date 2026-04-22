import { findLongestWord } from '../0524-longest-word-in-dictionary-through-deleting.js';

describe('0524-longest-word-in-dictionary-through-deleting', () => {
  it("findLongestWord(\"abpcplea\", [\"ale\", \"apple\", \"monkey\", \"plea\"])", () => {
    const result = findLongestWord("abpcplea", ["ale", "apple", "monkey", "plea"]);
    expect(result).toEqual("apple");
  });

  it("findLongestWord(\"abpcplea\", [\"a\", \"b\", \"c\"])", () => {
    const result = findLongestWord("abpcplea", ["a", "b", "c"]);
    expect(result).toEqual("a");
  });

  it("findLongestWord(\"a\", [\"b\", \"a\"])", () => {
    const result = findLongestWord("a", ["b", "a"]);
    expect(result).toEqual("a");
  });

  it("findLongestWord(\"\", [\"a\", \"b\"])", () => {
    const result = findLongestWord("", ["a", "b"]);
    expect(result).toEqual("");
  });

  it("findLongestWord(\"abc\", [\"ab\", \"abc\", \"a\"])", () => {
    const result = findLongestWord("abc", ["ab", "abc", "a"]);
    expect(result).toEqual("abc");
  });

  it("findLongestWord(\"aewfafwafjlwajflwajflwafj\", [\"apple\", \"ewaf\", \"awef\", \"awefe\"])", () => {
    const result = findLongestWord("aewfafwafjlwajflwajflwafj", ["apple", "ewaf", "awef", "awefe"]);
    expect(result).toEqual("ewaf");
  });
});
