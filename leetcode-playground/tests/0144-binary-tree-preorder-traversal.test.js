import { preorderTraversal } from '../0144-binary-tree-preorder-traversal.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0144-binary-tree-preorder-traversal', () => {
  it("preorderTraversal([3, 9, 20, null, null, 15, 7])", () => {
    const result = preorderTraversal(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual([3, 9, 20, 15, 7]);
  });

  it("preorderTraversal([1])", () => {
    const result = preorderTraversal(arrayToTree([1]));
    expect(result).toEqual([1]);
  });

  it("preorderTraversal([])", () => {
    const result = preorderTraversal(arrayToTree([]));
    expect(result).toEqual([]);
  });

  it("preorderTraversal([1, 2, 3, 4, 5])", () => {
    const result = preorderTraversal(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual([1, 2, 4, 5, 3]);
  });

  it("preorderTraversal([1, null, 2, 3])", () => {
    const result = preorderTraversal(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual([1, 2, 3]);
  });

  it("preorderTraversal([1, 2])", () => {
    const result = preorderTraversal(arrayToTree([1, 2]));
    expect(result).toEqual([1, 2]);
  });
});
