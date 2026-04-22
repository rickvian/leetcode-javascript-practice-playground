import { findMinHeightTrees } from '../0310-minimum-height-trees.js';

describe('0310-minimum-height-trees', () => {
  it("findMinHeightTrees(4, [[1, 0], [1, 2], [1, 3]])", () => {
    const result = findMinHeightTrees(4, [[1, 0], [1, 2], [1, 3]]);
    expect(result).toEqual([1]);
  });

  it("findMinHeightTrees(6, [[3, 0], [3, 1], [3, 2], [3, 4], [5, 4]])", () => {
    const result = findMinHeightTrees(6, [[3, 0], [3, 1], [3, 2], [3, 4], [5, 4]]);
    expect(result).toEqual([3, 4]);
  });

  it("findMinHeightTrees(1, [])", () => {
    const result = findMinHeightTrees(1, []);
    expect(result).toEqual([0]);
  });

  it("findMinHeightTrees(2, [[0, 1]])", () => {
    const result = findMinHeightTrees(2, [[0, 1]]);
    expect(result).toEqual([0, 1]);
  });

  it("findMinHeightTrees(3, [[1, 0], [1, 2]])", () => {
    const result = findMinHeightTrees(3, [[1, 0], [1, 2]]);
    expect(result).toEqual([1]);
  });
});
