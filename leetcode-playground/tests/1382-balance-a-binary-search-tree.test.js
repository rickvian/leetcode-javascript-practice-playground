import { balanceBST } from '../1382-balance-a-binary-search-tree.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('1382-balance-a-binary-search-tree', () => {
  it("balanceBST([3, 9, 20, null, null, 15, 7])", () => {
    const result = balanceBST(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(treeToArray(result)).toEqual([15, 9, 20, null, 3, null, 7]);
  });

  it("balanceBST([1])", () => {
    const result = balanceBST(arrayToTree([1]));
    expect(treeToArray(result)).toEqual([1]);
  });

  it("balanceBST([])", () => {
    const result = balanceBST(arrayToTree([]));
    expect(treeToArray(result)).toEqual([]);
  });

  it("balanceBST([1, 2, 3, 4, 5])", () => {
    const result = balanceBST(arrayToTree([1, 2, 3, 4, 5]));
    expect(treeToArray(result)).toEqual([5, 4, 1, null, 2, null, 3]);
  });

  it("balanceBST([1, null, 2, 3])", () => {
    const result = balanceBST(arrayToTree([1, null, 2, 3]));
    expect(treeToArray(result)).toEqual([3, 1, 2]);
  });

  it("balanceBST([1, 2])", () => {
    const result = balanceBST(arrayToTree([1, 2]));
    expect(treeToArray(result)).toEqual([2, null, 1]);
  });
});
