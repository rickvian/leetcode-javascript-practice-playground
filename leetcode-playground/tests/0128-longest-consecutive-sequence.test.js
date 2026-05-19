import { longestConsecutive } from "../0128-longest-consecutive-sequence";

describe("0128-longest-consecutive-sequence", () => {
  it("should return 4 for [100,4,200,1,3,2]", () => {
    expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toBe(4);
  });

  it("should return 9 for [0,3,7,2,5,8,4,6,0,1]", () => {
    expect(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toBe(9);
  });

  it("should return 0 for empty array", () => {
    expect(longestConsecutive([])).toBe(0);
  });

  it("should return 2 with minus number", () => {
    expect(longestConsecutive([0, -1])).toBe(2);
  });
  it("should return 1 for single element", () => {
    expect(longestConsecutive([5])).toBe(1);
  });

  it("should handle duplicates", () => {
    expect(longestConsecutive([1, 2, 0, 1])).toBe(3);
  });

  it("should return 1 when no consecutive elements", () => {
    expect(longestConsecutive([10, 20, 30])).toBe(1);
  });

  it("should handle all consecutive elements", () => {
    expect(longestConsecutive([1, 2, 3, 4, 5])).toBe(5);
  });

  it("should handle negative numbers", () => {
    expect(longestConsecutive([-3, -2, -1, 0, 1])).toBe(5);
  });

  // Extreme edge cases
  it("should handle all duplicates", () => {
    expect(longestConsecutive([1, 1, 1, 1, 1])).toBe(1);
  });

  it("should handle array with only zeros", () => {
    expect(longestConsecutive([0, 0, 0, 0])).toBe(1);
  });

  it("should handle all negative consecutive sequence", () => {
    expect(longestConsecutive([-5, -4, -3, -2, -1])).toBe(5);
  });

  it("should find longest among multiple sequences", () => {
    expect(longestConsecutive([1, 2, 3, 100, 101, 102, 103, 104])).toBe(5);
  });

  it("should handle very large positive numbers", () => {
    expect(longestConsecutive([1000000, 1000001, 1000002])).toBe(3);
  });

  it("should handle very large negative numbers", () => {
    expect(longestConsecutive([-1000000, -999999, -999998])).toBe(3);
  });

  it("should handle mixed large positive and negative with gap", () => {
    expect(longestConsecutive([-1000, -999, 1000, 1001, 1002])).toBe(3);
  });

  it("should handle large array with single long sequence", () => {
    const arr = Array.from({ length: 100 }, (_, i) => i + 1).concat([
      200, 300, 400,
    ]);
    expect(longestConsecutive(arr)).toBe(100);
  });

  it("should handle large array with duplicates and gaps", () => {
    const arr = [1, 2, 3, 3, 3, 10, 10, 11, 11, 12, 100, 100, 101];
    expect(longestConsecutive(arr)).toBe(3);
  });

  it("should handle unordered large sequence", () => {
    const arr = [50, 10, 5, 1, 2, 3, 4, 6, 7, 8, 9, 40, 30];
    expect(longestConsecutive(arr)).toBe(10);
  });

  it("should handle sequence with one-off elements creating gap", () => {
    expect(longestConsecutive([1, 2, 3, 5, 6, 7, 8])).toBe(4);
  });

  it("should handle single large number with small sequence", () => {
    expect(longestConsecutive([1000000000, 1, 2, 3])).toBe(3);
  });
});
