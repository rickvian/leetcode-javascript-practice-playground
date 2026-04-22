import { increasingBST } from '../0897-increasing-order-search-tree.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0897-increasing-order-search-tree', () => {
  it("increasingBST([3, 9, 20, null, null, 15, 7])", () => {
    const result = increasingBST(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(treeToArray(result)).toEqual([9, null, 3, null, 15, null, 20, null, 7]);
  });

  it("increasingBST([1])", () => {
    const result = increasingBST(arrayToTree([1]));
    expect(treeToArray(result)).toEqual([1]);
  });

  it("increasingBST([])", () => {
    const result = increasingBST(arrayToTree([]));
    expect(treeToArray(result)).toEqual([]);
  });

  it("increasingBST([1, 2, 3, 4, 5])", () => {
    const result = increasingBST(arrayToTree([1, 2, 3, 4, 5]));
    expect(treeToArray(result)).toEqual([4, null, 2, null, 5, null, 1, null, 3]);
  });

  it("increasingBST([1, null, 2, 3])", () => {
    const result = increasingBST(arrayToTree([1, null, 2, 3]));
    expect(treeToArray(result)).toEqual([1, null, 3, null, 2]);
  });

  it("increasingBST([1, 2])", () => {
    const result = increasingBST(arrayToTree([1, 2]));
    expect(treeToArray(result)).toEqual([2, null, 1]);
  });
});
