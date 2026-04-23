import { removeDuplicates } from '../1209-remove-all-adjacent-duplicates-in-string-ii.js';

describe('1209-remove-all-adjacent-duplicates-in-string-ii', () => {
  it("removeDuplicates(\"abcdef\", 2)", () => {
    const result = removeDuplicates("abcdef", 2);
    expect(result).toEqual("abcdef");
  });

  it("removeDuplicates(\"\", 1)", () => {
    const result = removeDuplicates("", 1);
    expect(result).toEqual("");
  });

  it("removeDuplicates(\"a\", 1)", () => {
    const result = removeDuplicates("a", 1);
    expect(result).toEqual("a");
  });

  it("removeDuplicates(\"abba\", 3)", () => {
    const result = removeDuplicates("abba", 3);
    expect(result).toEqual("abba");
  });

  it("removeDuplicates(\"  hello  \", 2)", () => {
    const result = removeDuplicates("  hello  ", 2);
    expect(result).toEqual("heo");
  });
});
