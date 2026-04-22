import { sortedArrayToBST } from '../0108-convert-sorted-array-to-binary-search-tree.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0108-convert-sorted-array-to-binary-search-tree', () => {
  it("sortedArrayToBST([1, 2, 3, 4, 5])", () => {
    const result = sortedArrayToBST([1, 2, 3, 4, 5]);
    expect(treeToArray(result)).toEqual([3, 2, 5, 1, null, 4]);
  });

  it("sortedArrayToBST([])", () => {
    const result = sortedArrayToBST([]);
    expect(treeToArray(result)).toEqual([]);
  });

  it("sortedArrayToBST([1])", () => {
    const result = sortedArrayToBST([1]);
    expect(treeToArray(result)).toEqual([1]);
  });

  it("sortedArrayToBST([1, 1])", () => {
    const result = sortedArrayToBST([1, 1]);
    expect(treeToArray(result)).toEqual([1, 1]);
  });

  it("sortedArrayToBST([3, 1, 4, 1, 5])", () => {
    const result = sortedArrayToBST([3, 1, 4, 1, 5]);
    expect(treeToArray(result)).toEqual([4, 1, 5, 3, null, 1]);
  });

  it("sortedArrayToBST([-1, 0, 1])", () => {
    const result = sortedArrayToBST([-1, 0, 1]);
    expect(treeToArray(result)).toEqual([0, -1, 1]);
  });
});
