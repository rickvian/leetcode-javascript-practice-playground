import { isStrobogrammatic } from '../0246-strobogrammatic-number.js';

describe('0246-strobogrammatic-number', () => {
  it("isStrobogrammatic(\"abcabcbb\")", () => {
    const result = isStrobogrammatic("abcabcbb");
    expect(result).toEqual(false);
  });

  it("isStrobogrammatic(\"bbbbb\")", () => {
    const result = isStrobogrammatic("bbbbb");
    expect(result).toEqual(false);
  });

  it("isStrobogrammatic(\"pwwkew\")", () => {
    const result = isStrobogrammatic("pwwkew");
    expect(result).toEqual(false);
  });

  it("isStrobogrammatic(\"\")", () => {
    const result = isStrobogrammatic("");
    expect(result).toEqual(true);
  });

  it("isStrobogrammatic(\" \")", () => {
    const result = isStrobogrammatic(" ");
    expect(result).toEqual(false);
  });

  it("isStrobogrammatic(\"a\")", () => {
    const result = isStrobogrammatic("a");
    expect(result).toEqual(false);
  });

  it("isStrobogrammatic(\"aaaaaa\")", () => {
    const result = isStrobogrammatic("aaaaaa");
    expect(result).toEqual(false);
  });
});
