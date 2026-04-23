import { balancedStringSplit } from '../1221-split-a-string-in-balanced-strings.js';

describe('1221-split-a-string-in-balanced-strings', () => {
  it("balancedStringSplit(\"abcabcbb\")", () => {
    const result = balancedStringSplit("abcabcbb");
    expect(result).toEqual(0);
  });

  it("balancedStringSplit(\"bbbbb\")", () => {
    const result = balancedStringSplit("bbbbb");
    expect(result).toEqual(0);
  });

  it("balancedStringSplit(\"pwwkew\")", () => {
    const result = balancedStringSplit("pwwkew");
    expect(result).toEqual(0);
  });

  it("balancedStringSplit(\"\")", () => {
    const result = balancedStringSplit("");
    expect(result).toEqual(0);
  });

  it("balancedStringSplit(\" \")", () => {
    const result = balancedStringSplit(" ");
    expect(result).toEqual(0);
  });

  it("balancedStringSplit(\"a\")", () => {
    const result = balancedStringSplit("a");
    expect(result).toEqual(0);
  });

  it("balancedStringSplit(\"aaaaaa\")", () => {
    const result = balancedStringSplit("aaaaaa");
    expect(result).toEqual(0);
  });
});
