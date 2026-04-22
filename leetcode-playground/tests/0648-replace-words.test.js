import { replaceWords } from '../0648-replace-words.js';

describe('0648-replace-words', () => {
  it("replaceWords([\"cat\", \"bat\", \"rat\"], \"the cattle was rattled by the battery\")", () => {
    const result = replaceWords(["cat", "bat", "rat"], "the cattle was rattled by the battery");
    expect(result).toEqual("the cat was rat by the bat");
  });

  it("replaceWords([\"a\", \"aa\", \"aaa\", \"aaaa\"], \"a aa aaa aaaa\")", () => {
    const result = replaceWords(["a", "aa", "aaa", "aaaa"], "a aa aaa aaaa");
    expect(result).toEqual("a a a a");
  });

  it("replaceWords([\"cat\"], \"catt catss cats\")", () => {
    const result = replaceWords(["cat"], "catt catss cats");
    expect(result).toEqual("cat cat cat");
  });

  it("replaceWords([\"c\"], \"cat\")", () => {
    const result = replaceWords(["c"], "cat");
    expect(result).toEqual("c");
  });

  it("replaceWords([], \"hello world\")", () => {
    const result = replaceWords([], "hello world");
    expect(result).toEqual("hello world");
  });

  it("replaceWords([\"hello\"], \"hello world\")", () => {
    const result = replaceWords(["hello"], "hello world");
    expect(result).toEqual("hello world");
  });
});
