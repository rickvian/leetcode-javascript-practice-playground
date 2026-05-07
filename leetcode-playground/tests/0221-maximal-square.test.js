import { maximalSquare } from "../0221-maximal-square";

describe("0221-maximal-square", () => {
  it("should handle LeetCode example 1 - matrix with mixed 0s and 1s", () => {
    const matrix = [
      ["1", "0", "1", "0", "0"],
      ["1", "0", "1", "1", "1"],
      ["1", "1", "1", "1", "1"],
      ["1", "0", "0", "1", "0"],
    ];
    expect(maximalSquare(matrix)).toEqual(4);
  });

  it("should handle LeetCode example 2 - single 0", () => {
    const matrix = [["0"]];
    expect(maximalSquare(matrix)).toEqual(0);
  });

  it("should handle LeetCode example 3 - single 1", () => {
    const matrix = [["1"]];
    expect(maximalSquare(matrix)).toEqual(1);
  });

  it("should return 0 for all zeros matrix", () => {
    const matrix = [
      ["0", "0", "0"],
      ["0", "0", "0"],
      ["0", "0", "0"],
    ];
    expect(maximalSquare(matrix)).toEqual(0);
  });

  it("should handle all ones matrix - square is entire matrix", () => {
    const matrix = [
      ["1", "1", "1"],
      ["1", "1", "1"],
      ["1", "1", "1"],
    ];
    expect(maximalSquare(matrix)).toEqual(9);
  });

  it("should handle 1x1 matrix with 1", () => {
    const matrix = [["1"]];
    expect(maximalSquare(matrix)).toEqual(1);
  });

  it("should handle single row matrix", () => {
    const matrix = [["1", "1", "1", "0", "1"]];
    expect(maximalSquare(matrix)).toEqual(1);
  });

  it("should handle non-square rectangle of all ones", () => {
    const matrix = [
      ["1", "1", "1"],
      ["1", "1", "1"],
    ];
    expect(maximalSquare(matrix)).toEqual(4);
  });
});
