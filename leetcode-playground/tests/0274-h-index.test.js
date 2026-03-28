import { hIndex } from "../0274-h-index.js";

describe("0274-h-index", () => {
  it("should return 3 for [3,0,6,1,5]", () => {
    expect(hIndex([3, 0, 6, 1, 5])).toBe(3);
  });

  it("should return 1 for [1,3,1]", () => {
    expect(hIndex([1, 3, 1])).toBe(1);
  });

  it("should return 0 for all zero citations [0,0,0]", () => {
    expect(hIndex([0, 0, 0])).toBe(0);
  });

  it("should return 1 for single paper with citations [100]", () => {
    expect(hIndex([100])).toBe(1);
  });

  it("should return 0 for single paper with no citations [0]", () => {
    expect(hIndex([0])).toBe(0);
  });

  it("should return 3 for all equal citations [3,3,3]", () => {
    expect(hIndex([3, 3, 3])).toBe(3);
  });

  it("should return 2 for [1,2,2]", () => {
    expect(hIndex([1, 2, 2])).toBe(2);
  });

  it("should handle large input", () => {
    const citations = Array(1000).fill(1000);
    expect(hIndex(citations)).toBe(1000);
  });

  it("should handle large input with mixed values", () => {
    const citations = Array.from({ length: 5000 }, (_, i) => i);
    expect(hIndex(citations)).toBe(2500);
  });

  it("should return 0 for empty array", () => {
    expect(hIndex([])).toBe(0);
  });
});
