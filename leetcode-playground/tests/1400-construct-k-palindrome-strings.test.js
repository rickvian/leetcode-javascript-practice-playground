import { canConstruct } from '../1400-construct-k-palindrome-strings.js';

describe('1400-construct-k-palindrome-strings', () => {
  it("canConstruct(\"abcdef\", 2)", () => {
    const result = canConstruct("abcdef", 2);
    expect(result).toEqual(false);
  });

  it("canConstruct(\"\", 1)", () => {
    const result = canConstruct("", 1);
    expect(result).toEqual(false);
  });

  it("canConstruct(\"a\", 1)", () => {
    const result = canConstruct("a", 1);
    expect(result).toEqual(true);
  });

  it("canConstruct(\"abba\", 3)", () => {
    const result = canConstruct("abba", 3);
    expect(result).toEqual(true);
  });

  it("canConstruct(\"  hello  \", 2)", () => {
    const result = canConstruct("  hello  ", 2);
    expect(result).toEqual(false);
  });
});
