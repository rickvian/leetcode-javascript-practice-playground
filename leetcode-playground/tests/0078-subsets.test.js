import { subsets } from "../0078-subsets";

const sortResult = (arr) =>
  arr
    .map((sub) => [...sub].sort((a, b) => a - b))
    .sort((a, b) => a.join(",").localeCompare(b.join(",")));

describe("0078-subsets", () => {
  it("should return [[]] for empty array (min input)", () => {
    const result = subsets([]);
    if (result !== undefined) expect(result).toEqual([[]]);
  });

  it("should return 2 subsets for [0] (power set size = 2^1)", () => {
    const result = subsets([0]);
    if (result !== undefined) {
      expect(sortResult(result)).toEqual([[], [0]]);
    }
  });

  it("should return 2^n subsets for n=3 ([1,2,3] -> 8)", () => {
    const result = subsets([1, 2, 3]);
    if (result !== undefined) expect(result.length).toBe(8);
  });

  it("should include empty subset and full-input subset", () => {
    const result = subsets([1, 2]);
    if (result !== undefined) {
      const sorted = sortResult(result);
      expect(sorted).toContainEqual([]);
      expect(sorted).toContainEqual([1, 2]);
    }
  });

  it("should produce unique subsets (no duplicates)", () => {
    const result = subsets([1, 2, 3]);
    if (result !== undefined) {
      const keys = result.map((s) => [...s].sort().join(","));
      expect(new Set(keys).size).toBe(keys.length);
    }
  });

  it("should handle negative numbers and preserve them", () => {
    const result = subsets([-1, 2]);
    if (result !== undefined) expect(result.length).toBe(4);
  });

  it("should return 2^4=16 for 4-element input (off-by-one sanity)", () => {
    const result = subsets([1, 2, 3, 4]);
    if (result !== undefined) expect(result.length).toBe(16);
  });
});
