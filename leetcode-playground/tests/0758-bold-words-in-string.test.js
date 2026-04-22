import { boldWords } from '../0758-bold-words-in-string.js';

describe('0758-bold-words-in-string', () => {
  it("boldWords([\"ab\", \"bc\"], \"aabcd\")", () => {
    const result = boldWords(["ab", "bc"], "aabcd");
    expect(result).toEqual("a<b>abc</b>d");
  });

  it("boldWords([\"aa\", \"b\"], \"aab\")", () => {
    const result = boldWords(["aa", "b"], "aab");
    expect(result).toEqual("<b>aab</b>");
  });

  it("boldWords([\"a\", \"b\"], \"ab\")", () => {
    const result = boldWords(["a", "b"], "ab");
    expect(result).toEqual("<b>ab</b>");
  });

  it("boldWords([], \"hello\")", () => {
    const result = boldWords([], "hello");
    expect(result).toEqual("hello");
  });

  it("boldWords([\"hello\"], \"hello world\")", () => {
    const result = boldWords(["hello"], "hello world");
    expect(result).toEqual("<b>hello</b> world");
  });

  it("boldWords([\"a\"], \"\")", () => {
    const result = boldWords(["a"], "");
    expect(result).toEqual("");
  });
});
