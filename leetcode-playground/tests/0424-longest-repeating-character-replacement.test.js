import { characterReplacement } from '../0424-longest-repeating-character-replacement.js';

describe('0424-longest-repeating-character-replacement', () => {
  it("characterReplacement(\"abcdef\", 2)", () => {
    const result = characterReplacement("abcdef", 2);
    expect(result).toEqual(3);
  });

  it("characterReplacement(\"\", 1)", () => {
    const result = characterReplacement("", 1);
    expect(result).toEqual(0);
  });

  it("characterReplacement(\"a\", 1)", () => {
    const result = characterReplacement("a", 1);
    expect(result).toEqual(1);
  });

  it("characterReplacement(\"abba\", 3)", () => {
    const result = characterReplacement("abba", 3);
    expect(result).toEqual(4);
  });

  it("characterReplacement(\"  hello  \", 2)", () => {
    const result = characterReplacement("  hello  ", 2);
    expect(result).toEqual(4);
  });
});
