import { partition } from '../0131-palindrome-partitioning.js';

describe('0131-palindrome-partitioning', () => {
  it("partition(\"abcabcbb\")", () => {
    const result = partition("abcabcbb");
    expect(result).toEqual([["a", "b", "c", "a", "b", "c", "b", "b"], ["a", "b", "c", "a", "b", "c", "bb"], ["a", "b", "c", "a", "bcb", "b"]]);
  });

  it("partition(\"bbbbb\")", () => {
    const result = partition("bbbbb");
    expect(result).toEqual([["b", "b", "b", "b", "b"], ["b", "b", "b", "bb"], ["b", "b", "bb", "b"], ["b", "b", "bbb"], ["b", "bb", "b", "b"], ["b", "bb", "bb"], ["b", "bbb", "b"], ["b", "bbbb"], ["bb", "b", "b", "b"], ["bb", "b", "bb"], ["bb", "bb", "b"], ["bb", "bbb"], ["bbb", "b", "b"], ["bbb", "bb"], ["bbbb", "b"], ["bbbbb"]]);
  });

  it("partition(\"pwwkew\")", () => {
    const result = partition("pwwkew");
    expect(result).toEqual([["p", "w", "w", "k", "e", "w"], ["p", "ww", "k", "e", "w"]]);
  });

  it("partition(\"\")", () => {
    const result = partition("");
    expect(result).toEqual([[]]);
  });

  it("partition(\" \")", () => {
    const result = partition(" ");
    expect(result).toEqual([[" "]]);
  });

  it("partition(\"a\")", () => {
    const result = partition("a");
    expect(result).toEqual([["a"]]);
  });

  it("partition(\"aaaaaa\")", () => {
    const result = partition("aaaaaa");
    expect(result).toEqual([["a", "a", "a", "a", "a", "a"], ["a", "a", "a", "a", "aa"], ["a", "a", "a", "aa", "a"], ["a", "a", "a", "aaa"], ["a", "a", "aa", "a", "a"], ["a", "a", "aa", "aa"], ["a", "a", "aaa", "a"], ["a", "a", "aaaa"], ["a", "aa", "a", "a", "a"], ["a", "aa", "a", "aa"], ["a", "aa", "aa", "a"], ["a", "aa", "aaa"], ["a", "aaa", "a", "a"], ["a", "aaa", "aa"], ["a", "aaaa", "a"], ["a", "aaaaa"], ["aa", "a", "a", "a", "a"], ["aa", "a", "a", "aa"], ["aa", "a", "aa", "a"], ["aa", "a", "aaa"], ["aa", "aa", "a", "a"], ["aa", "aa", "aa"], ["aa", "aaa", "a"], ["aa", "aaaa"], ["aaa", "a", "a", "a"], ["aaa", "a", "aa"], ["aaa", "aa", "a"], ["aaa", "aaa"], ["aaaa", "a", "a"], ["aaaa", "aa"], ["aaaaa", "a"], ["aaaaaa"]]);
  });
});
