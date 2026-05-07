import { letterCombinations } from "../0017-letter-combinations-of-a-phone-number";

describe("0017-letter-combinations-of-a-phone-number", () => {
  // Official examples
  it('should return all letter combinations for "23"', () => {
    const result = letterCombinations("23");
    const expected = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];
    expect(result?.sort()).toEqual(expected.sort());
  });

  it("should return empty array for empty string", () => {
    const result = letterCombinations("");
    expect(result).toEqual([]);
  });

  it('should return all letter combinations for "234"', () => {
    const result = letterCombinations("234");
    const expected = [
      "adg",
      "adh",
      "adi",
      "aeg",
      "aeh",
      "aei",
      "afg",
      "afh",
      "afi",
      "bdg",
      "bdh",
      "bdi",
      "beg",
      "beh",
      "bei",
      "bfg",
      "bfh",
      "bfi",
      "cdg",
      "cdh",
      "cdi",
      "ceg",
      "ceh",
      "cei",
      "cfg",
      "cfh",
      "cfi",
    ];
    expect(result?.sort()).toEqual(expected.sort());
  });

  // Constraint cases: empty string
  it("should handle empty digits by returning empty array", () => {
    expect(letterCombinations("")).toEqual([]);
  });

  // Single digit cases (3 letters)
  it('should handle single digit "2" (3 letters)', () => {
    const result = letterCombinations("2");
    const expected = ["a", "b", "c"];
    expect(result?.sort()).toEqual(expected.sort());
  });

  it('should handle single digit "3" (3 letters)', () => {
    const result = letterCombinations("3");
    const expected = ["d", "e", "f"];
    expect(result?.sort()).toEqual(expected.sort());
  });

  it('should handle single digit "4" (3 letters)', () => {
    const result = letterCombinations("4");
    const expected = ["g", "h", "i"];
    expect(result?.sort()).toEqual(expected.sort());
  });

  it('should handle single digit "5" (3 letters)', () => {
    const result = letterCombinations("5");
    const expected = ["j", "k", "l"];
    expect(result?.sort()).toEqual(expected.sort());
  });

  it('should handle single digit "6" (3 letters)', () => {
    const result = letterCombinations("6");
    const expected = ["m", "n", "o"];
    expect(result?.sort()).toEqual(expected.sort());
  });

  it('should handle single digit "8" (3 letters)', () => {
    const result = letterCombinations("8");
    const expected = ["t", "u", "v"];
    expect(result?.sort()).toEqual(expected.sort());
  });

  // Single digit cases (4 letters)
  it('should handle single digit "7" (4 letters)', () => {
    const result = letterCombinations("7");
    const expected = ["p", "q", "r", "s"];
    expect(result?.sort()).toEqual(expected.sort());
  });

  it('should handle single digit "9" (4 letters)', () => {
    const result = letterCombinations("9");
    const expected = ["w", "x", "y", "z"];
    expect(result?.sort()).toEqual(expected.sort());
  });

  // Two-digit cases (cross-product)
  it('should handle two digits "22" resulting in cross-product', () => {
    const result = letterCombinations("22");
    const expected = ["aa", "ab", "ac", "ba", "bb", "bc", "ca", "cb", "cc"];
    expect(result?.sort()).toEqual(expected.sort());
  });

  it('should handle "24" (3×3 cross-product)', () => {
    const result = letterCombinations("24");
    const expected = ["ag", "ah", "ai", "bg", "bh", "bi", "cg", "ch", "ci"];
    expect(result?.sort()).toEqual(expected.sort());
  });

  it('should handle "79" (4×4 cross-product)', () => {
    const result = letterCombinations("79");
    const expected = [
      "pw",
      "px",
      "py",
      "pz",
      "qw",
      "qx",
      "qy",
      "qz",
      "rw",
      "rx",
      "ry",
      "rz",
      "sw",
      "sx",
      "sy",
      "sz",
    ];
    expect(result?.sort()).toEqual(expected.sort());
  });

  // Multi-digit cases
  it('should handle three digits "234" (3×3×3=27 combinations)', () => {
    const result = letterCombinations("234");
    expect(result?.length).toBe(27);
    // Verify a few expected combinations
    const sorted = result?.sort();
    expect(sorted?.[0]).toBe("adg");
    expect(sorted?.some((combo) => combo === "cfi")).toBe(true);
  });

  it('should handle four digits "2345" (3×3×3×3=81 combinations)', () => {
    const result = letterCombinations("2345");
    expect(result?.length).toBe(81);
    const sorted = result?.sort();
    expect(sorted?.[0]).toBe("adgj");
  });

  // Edge cases with digits having different letter counts
  it('should handle "27" (3 letters × 4 letters = 12 combinations)', () => {
    const result = letterCombinations("27");
    const expected = [
      "ap",
      "aq",
      "ar",
      "as",
      "bp",
      "bq",
      "br",
      "bs",
      "cp",
      "cq",
      "cr",
      "cs",
    ];
    expect(result?.sort()).toEqual(expected.sort());
  });

  it('should handle "37" (3 letters × 4 letters = 12 combinations)', () => {
    const result = letterCombinations("37");
    const expected = [
      "dp",
      "dq",
      "dr",
      "ds",
      "ep",
      "eq",
      "er",
      "es",
      "fp",
      "fq",
      "fr",
      "fs",
    ];
    expect(result?.sort()).toEqual(expected.sort());
  });

  // All digits sequence
  it('should handle "23456789" (full digit range)', () => {
    const result = letterCombinations("23456789");
    expect(result?.length).toBe(3 * 3 * 3 * 3 * 3 * 4 * 3 * 4); // 6912 combinations
  });
});
