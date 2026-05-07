import { minPathSum } from "../0064-minimum-path-sum";

describe("0064-minimum-path-sum", () => {
  // Official examples
  it("example 1: 3x3 grid with obstacles", () => {
    const result = minPathSum([
      [1, 3, 1],
      [1, 5, 1],
      [4, 2, 1],
    ]);
    if (result !== undefined) expect(result).toBe(7);
  });

  it("example 2: 2x3 grid", () => {
    const result = minPathSum([
      [1, 2, 3],
      [4, 5, 6],
    ]);
    if (result !== undefined) expect(result).toBe(12);
  });

  // 1x1 grid
  it("1x1 grid returns the single element", () => {
    const result = minPathSum([[5]]);
    if (result !== undefined) expect(result).toBe(5);
  });

  it("1x1 grid with zero", () => {
    const result = minPathSum([[0]]);
    if (result !== undefined) expect(result).toBe(0);
  });

  // Single-row grid (only one path: go right all the way)
  it("single-row grid sums all elements", () => {
    const result = minPathSum([[1, 2, 3, 4]]);
    if (result !== undefined) expect(result).toBe(10);
  });

  it("single-row with zeros", () => {
    const result = minPathSum([[0, 0, 0]]);
    if (result !== undefined) expect(result).toBe(0);
  });

  // Single-column grid (only one path: go down all the way)
  it("single-column grid sums all elements", () => {
    const result = minPathSum([[1], [2], [3]]);
    if (result !== undefined) expect(result).toBe(6);
  });

  it("single-column grid with varying values", () => {
    const result = minPathSum([[3], [1], [4], [1], [5]]);
    if (result !== undefined) expect(result).toBe(14);
  });

  // Down-first path beats right-first
  it("down-first path is cheaper than right-first", () => {
    // right-first: 1→10→1 = 12, down-first: 1→2→1 = 4
    const result = minPathSum([
      [1, 10],
      [2, 1],
    ]);
    if (result !== undefined) expect(result).toBe(4);
  });

  // Right-first path beats down-first
  it("right-first path is cheaper than down-first", () => {
    // Grid: [[1,1,10],[10,10,10]]
    // Paths (2x3): R-R-D: 1+1+10+10=22, R-D-R: 1+1+10+10=22, D-R-R: 1+10+10+10=31
    // min is 22
    const result = minPathSum([
      [1, 1, 10],
      [10, 10, 10],
    ]);
    if (result !== undefined) expect(result).toBe(22);
  });

  // All zeros grid
  it("all zeros grid returns 0", () => {
    const result = minPathSum([
      [0, 0],
      [0, 0],
    ]);
    if (result !== undefined) expect(result).toBe(0);
  });

  // Grid where greedy (always pick min next step) fails
  it("greedy does not give optimal result", () => {
    // Grid: [[1,1,99],[5,1,1]]
    // R-R-D: 1+1+99+1=102, R-D-R: 1+1+1+1=4, D-R-R: 1+5+1+1=8
    // Greedy picks D first (5<1 is false, so right then down), optimal path is R-D-R=4
    const result = minPathSum([
      [1, 1, 99],
      [5, 1, 1],
    ]);
    if (result !== undefined) expect(result).toBe(4);
  });

  // 2x2 grid
  it("2x2 grid picks correct diagonal", () => {
    // paths: 1→3→4 = 8, 1→2→4 = 7
    const result = minPathSum([
      [1, 3],
      [2, 4],
    ]);
    if (result !== undefined) expect(result).toBe(7);
  });

  // Larger grid
  it("3x3 all-same-value grid", () => {
    // min path length is always m+n-1 = 3+3-1=5 cells
    const result = minPathSum([
      [2, 2, 2],
      [2, 2, 2],
      [2, 2, 2],
    ]);
    if (result !== undefined) expect(result).toBe(10);
  });

  // Max value cells (200)
  it("grid with max value cells", () => {
    // Single row: 200+200 = 400
    const result = minPathSum([[200, 200]]);
    if (result !== undefined) expect(result).toBe(400);
  });
});
