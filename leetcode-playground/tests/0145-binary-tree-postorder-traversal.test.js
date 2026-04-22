import { postorderTraversal } from '../0145-binary-tree-postorder-traversal.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0145-binary-tree-postorder-traversal', () => {
  it("postorderTraversal([3, 9, 20, null, null, 15, 7])", () => {
    const result = postorderTraversal(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual([9, 15, 7, 20, 3]);
  });

  it("postorderTraversal([1])", () => {
    const result = postorderTraversal(arrayToTree([1]));
    expect(result).toEqual([1]);
  });

  it("postorderTraversal([])", () => {
    const result = postorderTraversal(arrayToTree([]));
    expect(result).toEqual([]);
  });

  it("postorderTraversal([1, 2, 3, 4, 5])", () => {
    const result = postorderTraversal(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual([4, 5, 2, 3, 1]);
  });

  it("postorderTraversal([1, null, 2, 3])", () => {
    const result = postorderTraversal(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual([3, 2, 1]);
  });

  it("postorderTraversal([1, 2])", () => {
    const result = postorderTraversal(arrayToTree([1, 2]));
    expect(result).toEqual([2, 1]);
  });
});
