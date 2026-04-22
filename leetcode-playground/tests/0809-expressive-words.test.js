import { expressiveWords } from '../0809-expressive-words.js';

describe('0809-expressive-words', () => {
  it("expressiveWords(\"heeellooo\", [\"hello\", \"hi\", \"helo\"])", () => {
    const result = expressiveWords("heeellooo", ["hello", "hi", "helo"]);
    expect(result).toEqual(1);
  });

  it("expressiveWords(\"heeellooo\", [\"hello\", \"helo\"])", () => {
    const result = expressiveWords("heeellooo", ["hello", "helo"]);
    expect(result).toEqual(1);
  });

  it("expressiveWords(\"zzzzzyyyyy\", [\"zzyy\", \"zy\", \"zyy\"])", () => {
    const result = expressiveWords("zzzzzyyyyy", ["zzyy", "zy", "zyy"]);
    expect(result).toEqual(3);
  });

  it("expressiveWords(\"abc\", [\"a\", \"abc\", \"ab\"])", () => {
    const result = expressiveWords("abc", ["a", "abc", "ab"]);
    expect(result).toEqual(1);
  });

  it("expressiveWords(\"aaa\", [\"a\", \"aaaa\", \"aa\"])", () => {
    const result = expressiveWords("aaa", ["a", "aaaa", "aa"]);
    expect(result).toEqual(2);
  });

  it("expressiveWords(\"a\", [\"a\", \"b\"])", () => {
    const result = expressiveWords("a", ["a", "b"]);
    expect(result).toEqual(1);
  });
});
