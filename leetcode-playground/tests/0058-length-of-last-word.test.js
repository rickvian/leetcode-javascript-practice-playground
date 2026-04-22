import { lengthOfLastWord } from '../0058-length-of-last-word.js';

describe('0058-length-of-last-word', () => {
  it("lengthOfLastWord(\"abcabcbb\")", () => {
    const result = lengthOfLastWord("abcabcbb");
    expect(result).toEqual(8);
  });

  it("lengthOfLastWord(\"bbbbb\")", () => {
    const result = lengthOfLastWord("bbbbb");
    expect(result).toEqual(5);
  });

  it("lengthOfLastWord(\"pwwkew\")", () => {
    const result = lengthOfLastWord("pwwkew");
    expect(result).toEqual(6);
  });

  it("lengthOfLastWord(\"\")", () => {
    const result = lengthOfLastWord("");
    expect(result).toEqual(0);
  });

  it("lengthOfLastWord(\" \")", () => {
    const result = lengthOfLastWord(" ");
    expect(result).toEqual(0);
  });

  it("lengthOfLastWord(\"a\")", () => {
    const result = lengthOfLastWord("a");
    expect(result).toEqual(1);
  });

  it("lengthOfLastWord(\"aaaaaa\")", () => {
    const result = lengthOfLastWord("aaaaaa");
    expect(result).toEqual(6);
  });
});
