import { inorderTraversal } from '../0094-binary-tree-inorder-traversal.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0094-binary-tree-inorder-traversal', () => {
  it("inorderTraversal([3, 9, 20, null, null, 15, 7])", () => {
    const result = inorderTraversal(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual([9, 3, 15, 20, 7]);
  });

  it("inorderTraversal([1])", () => {
    const result = inorderTraversal(arrayToTree([1]));
    expect(result).toEqual([1]);
  });

  it("inorderTraversal([])", () => {
    const result = inorderTraversal(arrayToTree([]));
    expect(result).toEqual([]);
  });

  it("inorderTraversal([1, 2, 3, 4, 5])", () => {
    const result = inorderTraversal(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual([4, 2, 5, 1, 3]);
  });

  it("inorderTraversal([1, null, 2, 3])", () => {
    const result = inorderTraversal(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual([1, 3, 2]);
  });

  it("inorderTraversal([1, 2])", () => {
    const result = inorderTraversal(arrayToTree([1, 2]));
    expect(result).toEqual([2, 1]);
  });
});
