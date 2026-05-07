import { minimumTotal } from "../0120-triangle";

describe("0120-triangle", () => {
  it("should handle LeetCode official example 1", () => {
    const triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
    expect(minimumTotal(triangle)).toBe(11);
  });

  it("should handle LeetCode official example 2", () => {
    const triangle = [[-10]];
    expect(minimumTotal(triangle)).toBe(-10);
  });

  it("should handle single-element triangle", () => {
    const triangle = [[5]];
    expect(minimumTotal(triangle)).toBe(5);
  });

  it("should handle single-element triangle with negative value", () => {
    const triangle = [[-3]];
    expect(minimumTotal(triangle)).toBe(-3);
  });

  it("should handle two-row triangle", () => {
    const triangle = [[1], [2, 3]];
    expect(minimumTotal(triangle)).toBe(3);
  });

  it("should handle two-row triangle where left is optimal", () => {
    const triangle = [[1], [5, 2]];
    expect(minimumTotal(triangle)).toBe(3);
  });

  it("should handle three-row triangle", () => {
    const triangle = [[1], [2, 3], [4, 5, 6]];
    expect(minimumTotal(triangle)).toBe(7);
  });

  it("should handle all-negative values", () => {
    const triangle = [[-1], [-2, -3], [-4, -5, -6]];
    expect(minimumTotal(triangle)).toBe(-10);
  });

  it("should handle all-negative values with different path", () => {
    const triangle = [[-5], [-2, -1], [-3, -4, -6]];
    expect(minimumTotal(triangle)).toBe(-12);
  });

  it("should handle greedy-fails case (local greedy not global optimal)", () => {
    // Triangle where greedy (always pick min at each level) fails
    // [1], [2, 1], [3, 10, 1] - greedy picks 1->1->1=3
    // but optimal is 1->2->3=6 or 1->2->10=13 or 1->2->1=4
    // Actually optimal is 1->1->1=3, so need different case
    // [1], [100, 2], [100, 100, 1] - greedy picks 1->100->1=101
    // but optimal is 1->2->1=4
    const triangle = [[1], [100, 2], [100, 100, 1]];
    expect(minimumTotal(triangle)).toBe(4);
  });

  it("should handle large first column values", () => {
    const triangle = [[1], [10, 2], [20, 3, 1]];
    expect(minimumTotal(triangle)).toBe(4);
  });

  it("should handle right path is optimal", () => {
    const triangle = [[1], [10, 2], [20, 10, 3]];
    expect(minimumTotal(triangle)).toBe(6);
  });

  it("should handle four-row triangle", () => {
    const triangle = [[1], [2, 3], [4, 5, 6], [7, 8, 9, 10]];
    expect(minimumTotal(triangle)).toBe(14);
  });

  it("should handle four-row triangle with negative values", () => {
    const triangle = [[10], [-5, -8], [3, 2, -1], [0, -4, 5, -2]];
    expect(minimumTotal(triangle)).toBe(-1);
  });

  it("should handle all positive values", () => {
    const triangle = [[1], [1, 1], [1, 1, 1]];
    expect(minimumTotal(triangle)).toBe(3);
  });

  it("should handle all same values", () => {
    const triangle = [[5], [5, 5], [5, 5, 5], [5, 5, 5, 5]];
    expect(minimumTotal(triangle)).toBe(20);
  });

  it("should handle five-row triangle", () => {
    const triangle = [[1], [2, 3], [1, 5, 1], [4, 3, 2, 6], [1, 7, 1, 8, 9]];
    expect(minimumTotal(triangle)).toBe(8);
  });

  it("should handle path where left side is optimal", () => {
    const triangle = [[1], [2, 100], [3, 100, 100], [4, 100, 100, 100]];
    expect(minimumTotal(triangle)).toBe(10);
  });

  it("should handle mixed positive and negative with strategic path", () => {
    const triangle = [[5], [-1, 3], [2, -4, 1]];
    expect(minimumTotal(triangle)).toBe(0);
  });

  it("should handle all negative where all paths sum to negative", () => {
    const triangle = [[-10], [-5, -3], [-2, -1, -4]];
    expect(minimumTotal(triangle)).toBe(-17);
  });

  it("should handle wide triangle (many elements per row)", () => {
    const triangle = [[1], [2, 3], [1, 5, 1, 4], [2, 3, 6, 1, 7]];
    expect(minimumTotal(triangle)).toBe(6);
  });

  it("should handle large numbers", () => {
    const triangle = [[100], [200, 150], [300, 250, 200]];
    expect(minimumTotal(triangle)).toBe(450);
  });

  it("should handle zeros in triangle", () => {
    const triangle = [[0], [1, 0], [1, 1, 0]];
    expect(minimumTotal(triangle)).toBe(0);
  });

  it("should handle path with zeros optimal", () => {
    const triangle = [[1], [0, 5], [0, 1, 2]];
    expect(minimumTotal(triangle)).toBe(1);
  });

  it("should handle complex DP case", () => {
    // Case where multiple paths have similar sums but one is optimal
    const triangle = [[1], [5, 2], [7, 6, 3], [9, 8, 4, 5]];
    expect(minimumTotal(triangle)).toBe(10);
  });
});
