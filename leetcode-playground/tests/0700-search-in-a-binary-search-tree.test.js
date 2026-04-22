import { searchBST } from '../0700-search-in-a-binary-search-tree.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0700-search-in-a-binary-search-tree', () => {
  it("searchBST([3, 9, 20, null, null, 15, 7], 2)", () => {
    const result = searchBST(arrayToTree([3, 9, 20, null, null, 15, 7]), 2);
    expect(treeToArray(result)).toEqual([]);
  });

  it("searchBST([1], 2)", () => {
    const result = searchBST(arrayToTree([1]), 2);
    expect(treeToArray(result)).toEqual([]);
  });

  it("searchBST([], 2)", () => {
    const result = searchBST(arrayToTree([]), 2);
    expect(treeToArray(result)).toEqual([]);
  });

  it("searchBST([1, 2, 3, 4, 5], 2)", () => {
    const result = searchBST(arrayToTree([1, 2, 3, 4, 5]), 2);
    expect(treeToArray(result)).toEqual([]);
  });

  it("searchBST([1, null, 2, 3], 2)", () => {
    const result = searchBST(arrayToTree([1, null, 2, 3]), 2);
    expect(treeToArray(result)).toEqual([2, 3]);
  });

  it("searchBST([1, 2], 2)", () => {
    const result = searchBST(arrayToTree([1, 2]), 2);
    expect(treeToArray(result)).toEqual([]);
  });
});
