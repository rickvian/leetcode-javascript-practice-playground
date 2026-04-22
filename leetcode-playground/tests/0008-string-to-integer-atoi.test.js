import { myAtoi } from '../0008-string-to-integer-atoi.js';

describe('0008-string-to-integer-atoi', () => {
  it("myAtoi(\"abcabcbb\")", () => {
    const result = myAtoi("abcabcbb");
    expect(result).toEqual(0);
  });

  it("myAtoi(\"bbbbb\")", () => {
    const result = myAtoi("bbbbb");
    expect(result).toEqual(0);
  });

  it("myAtoi(\"pwwkew\")", () => {
    const result = myAtoi("pwwkew");
    expect(result).toEqual(0);
  });

  it("myAtoi(\"\")", () => {
    const result = myAtoi("");
    expect(result).toEqual(0);
  });

  it("myAtoi(\" \")", () => {
    const result = myAtoi(" ");
    expect(result).toEqual(0);
  });

  it("myAtoi(\"a\")", () => {
    const result = myAtoi("a");
    expect(result).toEqual(0);
  });

  it("myAtoi(\"aaaaaa\")", () => {
    const result = myAtoi("aaaaaa");
    expect(result).toEqual(0);
  });
});
