import { levelOrder } from '../0102-binary-tree-level-order-traversal.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0102-binary-tree-level-order-traversal', () => {
  it("levelOrder([3, 9, 20, null, null, 15, 7])", () => {
    const result = levelOrder(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual([[3], [9, 20], [15, 7]]);
  });

  it("levelOrder([1])", () => {
    const result = levelOrder(arrayToTree([1]));
    expect(result).toEqual([[1]]);
  });

  it("levelOrder([])", () => {
    const result = levelOrder(arrayToTree([]));
    expect(result).toEqual([]);
  });

  it("levelOrder([1, 2, 3, 4, 5])", () => {
    const result = levelOrder(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual([[1], [2, 3], [4, 5]]);
  });

  it("levelOrder([1, null, 2, 3])", () => {
    const result = levelOrder(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual([[1], [2], [3]]);
  });

  it("levelOrder([1, 2])", () => {
    const result = levelOrder(arrayToTree([1, 2]));
    expect(result).toEqual([[1], [2]]);
  });
});
