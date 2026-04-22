import { sumOfDistancesInTree } from '../0834-sum-of-distances-in-tree.js';

describe('0834-sum-of-distances-in-tree', () => {
  it("sumOfDistancesInTree(6, [[0, 1], [0, 2], [2, 3], [2, 4], [2, 5]])", () => {
    const result = sumOfDistancesInTree(6, [[0, 1], [0, 2], [2, 3], [2, 4], [2, 5]]);
    expect(result).toEqual([8, 12, 6, 10, 10, 10]);
  });

  it("sumOfDistancesInTree(1, [])", () => {
    const result = sumOfDistancesInTree(1, []);
    expect(result).toEqual([0]);
  });

  it("sumOfDistancesInTree(2, [[1, 0]])", () => {
    const result = sumOfDistancesInTree(2, [[1, 0]]);
    expect(result).toEqual([1, 1]);
  });

  it("sumOfDistancesInTree(3, [[0, 1], [0, 2]])", () => {
    const result = sumOfDistancesInTree(3, [[0, 1], [0, 2]]);
    expect(result).toEqual([2, 3, 3]);
  });

  it("sumOfDistancesInTree(4, [[0, 1], [1, 2], [2, 3]])", () => {
    const result = sumOfDistancesInTree(4, [[0, 1], [1, 2], [2, 3]]);
    expect(result).toEqual([6, 4, 4, 6]);
  });

  it("sumOfDistancesInTree(5, [[0, 1], [0, 2], [1, 3], [1, 4]])", () => {
    const result = sumOfDistancesInTree(5, [[0, 1], [0, 2], [1, 3], [1, 4]]);
    expect(result).toEqual([6, 5, 9, 8, 8]);
  });
});
