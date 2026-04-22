import { constructMaximumBinaryTree } from '../0654-maximum-binary-tree.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0654-maximum-binary-tree', () => {
  it("constructMaximumBinaryTree([1, 2, 3, 4, 5])", () => {
    const result = constructMaximumBinaryTree([1, 2, 3, 4, 5]);
    expect(treeToArray(result)).toEqual([5, 4, null, 3, null, 2, null, 1]);
  });

  it("constructMaximumBinaryTree([])", () => {
    const result = constructMaximumBinaryTree([]);
    expect(treeToArray(result)).toEqual([]);
  });

  it("constructMaximumBinaryTree([1])", () => {
    const result = constructMaximumBinaryTree([1]);
    expect(treeToArray(result)).toEqual([1]);
  });

  it("constructMaximumBinaryTree([1, 1])", () => {
    const result = constructMaximumBinaryTree([1, 1]);
    expect(treeToArray(result)).toEqual([1, null, 1]);
  });

  it("constructMaximumBinaryTree([3, 1, 4, 1, 5])", () => {
    const result = constructMaximumBinaryTree([3, 1, 4, 1, 5]);
    expect(treeToArray(result)).toEqual([5, 4, null, 3, 1, null, 1]);
  });

  it("constructMaximumBinaryTree([-1, 0, 1])", () => {
    const result = constructMaximumBinaryTree([-1, 0, 1]);
    expect(treeToArray(result)).toEqual([1, 0, null, -1]);
  });
});
