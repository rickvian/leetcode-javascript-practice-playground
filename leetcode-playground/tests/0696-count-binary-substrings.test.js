import { countBinarySubstrings } from '../0696-count-binary-substrings.js';

describe('0696-count-binary-substrings', () => {
  it("countBinarySubstrings(\"abcabcbb\")", () => {
    const result = countBinarySubstrings("abcabcbb");
    expect(result).toEqual(6);
  });

  it("countBinarySubstrings(\"bbbbb\")", () => {
    const result = countBinarySubstrings("bbbbb");
    expect(result).toEqual(0);
  });

  it("countBinarySubstrings(\"pwwkew\")", () => {
    const result = countBinarySubstrings("pwwkew");
    expect(result).toEqual(4);
  });

  it("countBinarySubstrings(\"\")", () => {
    const result = countBinarySubstrings("");
    expect(result).toEqual(0);
  });

  it("countBinarySubstrings(\" \")", () => {
    const result = countBinarySubstrings(" ");
    expect(result).toEqual(0);
  });

  it("countBinarySubstrings(\"a\")", () => {
    const result = countBinarySubstrings("a");
    expect(result).toEqual(0);
  });

  it("countBinarySubstrings(\"aaaaaa\")", () => {
    const result = countBinarySubstrings("aaaaaa");
    expect(result).toEqual(0);
  });
});
