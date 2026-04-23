import { balancedString } from '../1234-replace-the-substring-for-balanced-string.js';

describe('1234-replace-the-substring-for-balanced-string', () => {
  it("balancedString(\"abcabcbb\")", () => {
    const result = balancedString("abcabcbb");
    expect(result).toEqual(8);
  });

  it("balancedString(\"bbbbb\")", () => {
    const result = balancedString("bbbbb");
    expect(result).toEqual(5);
  });

  it("balancedString(\"pwwkew\")", () => {
    const result = balancedString("pwwkew");
    expect(result).toEqual(6);
  });

  it("balancedString(\"\")", () => {
    const result = balancedString("");
    expect(result).toEqual(0);
  });

  it("balancedString(\" \")", () => {
    const result = balancedString(" ");
    expect(result).toEqual(1);
  });

  it("balancedString(\"a\")", () => {
    const result = balancedString("a");
    expect(result).toEqual(1);
  });

  it("balancedString(\"aaaaaa\")", () => {
    const result = balancedString("aaaaaa");
    expect(result).toEqual(6);
  });
});
