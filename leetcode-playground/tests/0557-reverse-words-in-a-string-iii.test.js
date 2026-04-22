import { reverseWords } from '../0557-reverse-words-in-a-string-iii.js';

describe('0557-reverse-words-in-a-string-iii', () => {
  it("reverseWords(\"Let's take LeetCode contest\")", () => {
    const result = reverseWords("Let's take LeetCode contest");
    expect(result).toEqual("s'teL ekat edoCteeL tsetnoc");
  });

  it("reverseWords(\"God Ding\")", () => {
    const result = reverseWords("God Ding");
    expect(result).toEqual("doG gniD");
  });

  it("reverseWords(\"hello world\")", () => {
    const result = reverseWords("hello world");
    expect(result).toEqual("olleh dlrow");
  });

  it("reverseWords(\"a\")", () => {
    const result = reverseWords("a");
    expect(result).toEqual("a");
  });

  it("reverseWords(\"\")", () => {
    const result = reverseWords("");
    expect(result).toEqual("");
  });

  it("reverseWords(\"  leading spaces\")", () => {
    const result = reverseWords("  leading spaces");
    expect(result).toEqual("  gnidael secaps");
  });
});
