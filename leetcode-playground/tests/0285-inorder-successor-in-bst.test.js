import { inorderSuccessor } from '../0285-inorder-successor-in-bst.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0285-inorder-successor-in-bst', () => {
  it("inorderSuccessor([1, 2, 3], [1, 2, 3])", () => {
    const result = inorderSuccessor(arrayToTree([1, 2, 3]), arrayToTree([1, 2, 3]));
    expect(treeToArray(result)).toEqual([3]);
  });

  it("inorderSuccessor([1], [1])", () => {
    const result = inorderSuccessor(arrayToTree([1]), arrayToTree([1]));
    expect(treeToArray(result)).toEqual([]);
  });

  it("inorderSuccessor([], [])", () => {
    const result = inorderSuccessor(arrayToTree([]), arrayToTree([]));
    expect(treeToArray(result)).toEqual([]);
  });

  it("inorderSuccessor([1, 2], [1, null, 2])", () => {
    const result = inorderSuccessor(arrayToTree([1, 2]), arrayToTree([1, null, 2]));
    expect(treeToArray(result)).toEqual([]);
  });
});
