import { insertIntoBST } from '../0701-insert-into-a-binary-search-tree.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0701-insert-into-a-binary-search-tree', () => {
  it("insertIntoBST([3, 9, 20, null, null, 15, 7], 2)", () => {
    const result = insertIntoBST(arrayToTree([3, 9, 20, null, null, 15, 7]), 2);
    expect(treeToArray(result)).toEqual([3, 9, 20, 2, null, 15, 7]);
  });

  it("insertIntoBST([1], 2)", () => {
    const result = insertIntoBST(arrayToTree([1]), 2);
    expect(treeToArray(result)).toEqual([1, null, 2]);
  });

  it("insertIntoBST([], 2)", () => {
    const result = insertIntoBST(arrayToTree([]), 2);
    expect(treeToArray(result)).toEqual([2]);
  });

  it("insertIntoBST([1, 2, 3, 4, 5], 2)", () => {
    const result = insertIntoBST(arrayToTree([1, 2, 3, 4, 5]), 2);
    expect(treeToArray(result)).toEqual([1, 2, 3, 4, 5, 2]);
  });

  it("insertIntoBST([1, null, 2, 3], 2)", () => {
    const result = insertIntoBST(arrayToTree([1, null, 2, 3]), 2);
    expect(treeToArray(result)).toEqual([1, null, 2, 3, null, 2]);
  });

  it("insertIntoBST([1, 2], 2)", () => {
    const result = insertIntoBST(arrayToTree([1, 2]), 2);
    expect(treeToArray(result)).toEqual([1, 2, 2]);
  });
});
