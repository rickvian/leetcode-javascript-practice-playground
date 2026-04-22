import { isBalanced } from '../0110-balanced-binary-tree.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0110-balanced-binary-tree', () => {
  it("isBalanced([3, 9, 20, null, null, 15, 7])", () => {
    const result = isBalanced(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual(true);
  });

  it("isBalanced([1])", () => {
    const result = isBalanced(arrayToTree([1]));
    expect(result).toEqual(true);
  });

  it("isBalanced([])", () => {
    const result = isBalanced(arrayToTree([]));
    expect(result).toEqual(true);
  });

  it("isBalanced([1, 2, 3, 4, 5])", () => {
    const result = isBalanced(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual(true);
  });

  it("isBalanced([1, null, 2, 3])", () => {
    const result = isBalanced(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual(false);
  });

  it("isBalanced([1, 2])", () => {
    const result = isBalanced(arrayToTree([1, 2]));
    expect(result).toEqual(true);
  });
});
