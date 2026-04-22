import { sortedListToBST } from '../0109-convert-sorted-list-to-binary-search-tree.js';
import { arrayToList, arrayToTree, listToArray, treeToArray } from './__helpers__/test_helpers.js';

describe('0109-convert-sorted-list-to-binary-search-tree', () => {
  it("sortedListToBST([1, 2, 3, 4, 5])", () => {
    const result = sortedListToBST(arrayToList([1, 2, 3, 4, 5]));
    expect(treeToArray(result)).toEqual([3, 2, 5, 1, null, 4]);
  });

  it("sortedListToBST([1])", () => {
    const result = sortedListToBST(arrayToList([1]));
    expect(treeToArray(result)).toEqual([1]);
  });

  it("sortedListToBST([])", () => {
    const result = sortedListToBST(arrayToList([]));
    expect(treeToArray(result)).toEqual([]);
  });

  it("sortedListToBST([1, 1, 2])", () => {
    const result = sortedListToBST(arrayToList([1, 1, 2]));
    expect(treeToArray(result)).toEqual([1, 1, 2]);
  });

  it("sortedListToBST([1, 2])", () => {
    const result = sortedListToBST(arrayToList([1, 2]));
    expect(treeToArray(result)).toEqual([2, 1]);
  });

  it("sortedListToBST([1, 1, 1, 1])", () => {
    const result = sortedListToBST(arrayToList([1, 1, 1, 1]));
    expect(treeToArray(result)).toEqual([1, 1, 1, 1]);
  });
});
