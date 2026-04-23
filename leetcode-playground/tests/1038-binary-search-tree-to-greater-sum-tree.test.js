import { bstToGst } from '../1038-binary-search-tree-to-greater-sum-tree.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('1038-binary-search-tree-to-greater-sum-tree', () => {
  it("bstToGst([3, 9, 20, null, null, 15, 7])", () => {
    const result = bstToGst(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(treeToArray(result)).toEqual([45, 54, 27, null, null, 42, 7]);
  });

  it("bstToGst([1])", () => {
    const result = bstToGst(arrayToTree([1]));
    expect(treeToArray(result)).toEqual([1]);
  });

  it("bstToGst([])", () => {
    const result = bstToGst(arrayToTree([]));
    expect(treeToArray(result)).toEqual([]);
  });

  it("bstToGst([1, 2, 3, 4, 5])", () => {
    const result = bstToGst(arrayToTree([1, 2, 3, 4, 5]));
    expect(treeToArray(result)).toEqual([4, 11, 3, 15, 9]);
  });

  it("bstToGst([1, null, 2, 3])", () => {
    const result = bstToGst(arrayToTree([1, null, 2, 3]));
    expect(treeToArray(result)).toEqual([6, null, 2, 5]);
  });

  it("bstToGst([1, 2])", () => {
    const result = bstToGst(arrayToTree([1, 2]));
    expect(treeToArray(result)).toEqual([1, 3]);
  });
});
