import { maxSumBST } from '../1373-maximum-sum-bst-in-binary-tree.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('1373-maximum-sum-bst-in-binary-tree', () => {
  it("maxSumBST([3, 9, 20, null, null, 15, 7])", () => {
    const result = maxSumBST(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual(15);
  });

  it("maxSumBST([1])", () => {
    const result = maxSumBST(arrayToTree([1]));
    expect(result).toEqual(1);
  });

  it("maxSumBST([])", () => {
    const result = maxSumBST(arrayToTree([]));
    expect(result).toEqual(0);
  });

  it("maxSumBST([1, 2, 3, 4, 5])", () => {
    const result = maxSumBST(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual(5);
  });

  it("maxSumBST([1, null, 2, 3])", () => {
    const result = maxSumBST(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual(3);
  });

  it("maxSumBST([1, 2])", () => {
    const result = maxSumBST(arrayToTree([1, 2]));
    expect(result).toEqual(2);
  });
});
