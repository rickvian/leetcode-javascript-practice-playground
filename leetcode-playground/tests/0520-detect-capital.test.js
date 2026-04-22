import { detectCapitalUse } from '../0520-detect-capital.js';

describe('0520-detect-capital', () => {
  it("detectCapitalUse(\"abcabcbb\")", () => {
    const result = detectCapitalUse("abcabcbb");
    expect(result).toEqual(true);
  });

  it("detectCapitalUse(\"bbbbb\")", () => {
    const result = detectCapitalUse("bbbbb");
    expect(result).toEqual(true);
  });

  it("detectCapitalUse(\"pwwkew\")", () => {
    const result = detectCapitalUse("pwwkew");
    expect(result).toEqual(true);
  });

  it("detectCapitalUse(\"\")", () => {
    const result = detectCapitalUse("");
    expect(result).toEqual(false);
  });

  it("detectCapitalUse(\" \")", () => {
    const result = detectCapitalUse(" ");
    expect(result).toEqual(false);
  });

  it("detectCapitalUse(\"a\")", () => {
    const result = detectCapitalUse("a");
    expect(result).toEqual(true);
  });

  it("detectCapitalUse(\"aaaaaa\")", () => {
    const result = detectCapitalUse("aaaaaa");
    expect(result).toEqual(true);
  });
});
