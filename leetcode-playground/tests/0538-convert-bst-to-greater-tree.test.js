import { convertBST } from '../0538-convert-bst-to-greater-tree.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0538-convert-bst-to-greater-tree', () => {
  it("convertBST([3, 9, 20, null, null, 15, 7])", () => {
    const result = convertBST(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(treeToArray(result)).toEqual([45, 54, 27, null, null, 42, 7]);
  });

  it("convertBST([1])", () => {
    const result = convertBST(arrayToTree([1]));
    expect(treeToArray(result)).toEqual([1]);
  });

  it("convertBST([])", () => {
    const result = convertBST(arrayToTree([]));
    expect(treeToArray(result)).toEqual([]);
  });

  it("convertBST([1, 2, 3, 4, 5])", () => {
    const result = convertBST(arrayToTree([1, 2, 3, 4, 5]));
    expect(treeToArray(result)).toEqual([4, 11, 3, 15, 9]);
  });

  it("convertBST([1, null, 2, 3])", () => {
    const result = convertBST(arrayToTree([1, null, 2, 3]));
    expect(treeToArray(result)).toEqual([6, null, 2, 5]);
  });

  it("convertBST([1, 2])", () => {
    const result = convertBST(arrayToTree([1, 2]));
    expect(treeToArray(result)).toEqual([1, 3]);
  });
});
