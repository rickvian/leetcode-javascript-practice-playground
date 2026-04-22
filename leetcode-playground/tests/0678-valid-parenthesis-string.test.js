import { checkValidString } from '../0678-valid-parenthesis-string.js';

describe('0678-valid-parenthesis-string', () => {
  it("checkValidString(\"abcabcbb\")", () => {
    const result = checkValidString("abcabcbb");
    expect(result).toEqual(true);
  });

  it("checkValidString(\"bbbbb\")", () => {
    const result = checkValidString("bbbbb");
    expect(result).toEqual(true);
  });

  it("checkValidString(\"pwwkew\")", () => {
    const result = checkValidString("pwwkew");
    expect(result).toEqual(true);
  });

  it("checkValidString(\"\")", () => {
    const result = checkValidString("");
    expect(result).toEqual(true);
  });

  it("checkValidString(\" \")", () => {
    const result = checkValidString(" ");
    expect(result).toEqual(true);
  });

  it("checkValidString(\"a\")", () => {
    const result = checkValidString("a");
    expect(result).toEqual(true);
  });

  it("checkValidString(\"aaaaaa\")", () => {
    const result = checkValidString("aaaaaa");
    expect(result).toEqual(true);
  });
});
