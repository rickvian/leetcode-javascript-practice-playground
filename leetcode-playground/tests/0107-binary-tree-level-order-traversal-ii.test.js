import { levelOrderBottom } from '../0107-binary-tree-level-order-traversal-ii.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0107-binary-tree-level-order-traversal-ii', () => {
  it("levelOrderBottom([3, 9, 20, null, null, 15, 7])", () => {
    const result = levelOrderBottom(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual([[15, 7], [9, 20], [3]]);
  });

  it("levelOrderBottom([1])", () => {
    const result = levelOrderBottom(arrayToTree([1]));
    expect(result).toEqual([[1]]);
  });

  it("levelOrderBottom([])", () => {
    const result = levelOrderBottom(arrayToTree([]));
    expect(result).toEqual([]);
  });

  it("levelOrderBottom([1, 2, 3, 4, 5])", () => {
    const result = levelOrderBottom(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual([[4, 5], [2, 3], [1]]);
  });

  it("levelOrderBottom([1, null, 2, 3])", () => {
    const result = levelOrderBottom(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual([[3], [2], [1]]);
  });

  it("levelOrderBottom([1, 2])", () => {
    const result = levelOrderBottom(arrayToTree([1, 2]));
    expect(result).toEqual([[2], [1]]);
  });
});
