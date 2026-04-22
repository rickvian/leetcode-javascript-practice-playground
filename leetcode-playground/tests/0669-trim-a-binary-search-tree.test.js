import { trimBST } from '../0669-trim-a-binary-search-tree.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0669-trim-a-binary-search-tree', () => {
  it("trimBST([3, 9, 20, null, null, 15, 7], 1)", () => {
    const result = trimBST(arrayToTree([3, 9, 20, null, null, 15, 7]), 1, 1);
    expect(treeToArray(result)).toEqual([]);
  });

  it("trimBST([1], 1)", () => {
    const result = trimBST(arrayToTree([1]), 1, 1);
    expect(treeToArray(result)).toEqual([1]);
  });

  it("trimBST([], 1)", () => {
    const result = trimBST(arrayToTree([]), 1, 1);
    expect(treeToArray(result)).toEqual([]);
  });

  it("trimBST([1, 2, 3, 4, 5], 1)", () => {
    const result = trimBST(arrayToTree([1, 2, 3, 4, 5]), 1, 1);
    expect(treeToArray(result)).toEqual([1]);
  });

  it("trimBST([1, null, 2, 3], 1)", () => {
    const result = trimBST(arrayToTree([1, null, 2, 3]), 1, 1);
    expect(treeToArray(result)).toEqual([1]);
  });

  it("trimBST([1, 2], 1)", () => {
    const result = trimBST(arrayToTree([1, 2]), 1, 1);
    expect(treeToArray(result)).toEqual([1]);
  });
});
