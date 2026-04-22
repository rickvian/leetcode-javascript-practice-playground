import { zigzagLevelOrder } from '../0103-binary-tree-zigzag-level-order-traversal.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0103-binary-tree-zigzag-level-order-traversal', () => {
  it("zigzagLevelOrder([3, 9, 20, null, null, 15, 7])", () => {
    const result = zigzagLevelOrder(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual([[3], [20, 9], [15, 7]]);
  });

  it("zigzagLevelOrder([1])", () => {
    const result = zigzagLevelOrder(arrayToTree([1]));
    expect(result).toEqual([[1]]);
  });

  it("zigzagLevelOrder([])", () => {
    const result = zigzagLevelOrder(arrayToTree([]));
    expect(result).toEqual([]);
  });

  it("zigzagLevelOrder([1, 2, 3, 4, 5])", () => {
    const result = zigzagLevelOrder(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual([[1], [3, 2], [4, 5]]);
  });

  it("zigzagLevelOrder([1, null, 2, 3])", () => {
    const result = zigzagLevelOrder(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual([[1], [2], [3]]);
  });

  it("zigzagLevelOrder([1, 2])", () => {
    const result = zigzagLevelOrder(arrayToTree([1, 2]));
    expect(result).toEqual([[1], [2]]);
  });
});
