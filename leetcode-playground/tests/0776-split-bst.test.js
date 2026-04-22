import { splitBST } from '../0776-split-bst.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0776-split-bst', () => {
  it("splitBST([3, 9, 20, null, null, 15, 7], 1)", () => {
    const result = splitBST(arrayToTree([3, 9, 20, null, null, 15, 7]), 1);
    expect(result.map(t => treeToArray(t))).toEqual([[], [3, 9, 20, null, null, 15, 7]]);
  });

  it("splitBST([1], 1)", () => {
    const result = splitBST(arrayToTree([1]), 1);
    expect(result.map(t => treeToArray(t))).toEqual([[1], []]);
  });

  it("splitBST([], 1)", () => {
    const result = splitBST(arrayToTree([]), 1);
    expect(result.map(t => treeToArray(t))).toEqual([[], []]);
  });

  it("splitBST([1, 2, 3, 4, 5], 1)", () => {
    const result = splitBST(arrayToTree([1, 2, 3, 4, 5]), 1);
    expect(result.map(t => treeToArray(t))).toEqual([[1, 2, null, 4, 5], [3]]);
  });

  it("splitBST([1, null, 2, 3], 1)", () => {
    const result = splitBST(arrayToTree([1, null, 2, 3]), 1);
    expect(result.map(t => treeToArray(t))).toEqual([[1], [2, 3]]);
  });

  it("splitBST([1, 2], 1)", () => {
    const result = splitBST(arrayToTree([1, 2]), 1);
    expect(result.map(t => treeToArray(t))).toEqual([[1, 2], []]);
  });
});
