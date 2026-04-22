import { findReplaceString } from '../0833-find-and-replace-in-string.js';

describe('0833-find-and-replace-in-string', () => {
  it("findReplaceString(\"abcd\", [0, 2]...)", () => {
    const result = findReplaceString("abcd", [0, 2], ["ab", "ec"], ["eee", "ffff"]);
    expect(result).toEqual("eeecd");
  });

  it("findReplaceString(\"abcd\", [0, 2]...)", () => {
    const result = findReplaceString("abcd", [0, 2], ["ab", "cd"], ["eee", "ffff"]);
    expect(result).toEqual("eeeffff");
  });

  it("findReplaceString(\"vmokgggqzp\", [3, 5, 1]...)", () => {
    const result = findReplaceString("vmokgggqzp", [3, 5, 1], ["kg", "ggq", "mo"], ["s", "so", "bfr"]);
    expect(result).toEqual("vbfrssozp");
  });

  it("findReplaceString(\"abc\", []...)", () => {
    const result = findReplaceString("abc", [], [], []);
    expect(result).toEqual("abc");
  });

  it("findReplaceString(\"aaa\", [0]...)", () => {
    const result = findReplaceString("aaa", [0], ["aaa"], ["b"]);
    expect(result).toEqual("b");
  });

  it("findReplaceString(\"a\", [0]...)", () => {
    const result = findReplaceString("a", [0], ["b"], ["c"]);
    expect(result).toEqual("a");
  });
});
