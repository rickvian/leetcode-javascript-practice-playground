import { flipMatchVoyage } from '../0971-flip-binary-tree-to-match-preorder-traversal.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0971-flip-binary-tree-to-match-preorder-traversal', () => {
  it("flipMatchVoyage([3, 9, 20, null, null, 15, 7], 0)", () => {
    const result = flipMatchVoyage(arrayToTree([3, 9, 20, null, null, 15, 7]), 0);
    expect(result).toEqual([-1]);
  });

  it("flipMatchVoyage([1], 0)", () => {
    const result = flipMatchVoyage(arrayToTree([1]), 0);
    expect(result).toEqual([-1]);
  });

  it("flipMatchVoyage([], 0)", () => {
    const result = flipMatchVoyage(arrayToTree([]), 0);
    expect(result).toEqual([]);
  });

  it("flipMatchVoyage([1, 2, 3, 4, 5], 0)", () => {
    const result = flipMatchVoyage(arrayToTree([1, 2, 3, 4, 5]), 0);
    expect(result).toEqual([-1]);
  });

  it("flipMatchVoyage([1, null, 2, 3], 0)", () => {
    const result = flipMatchVoyage(arrayToTree([1, null, 2, 3]), 0);
    expect(result).toEqual([-1]);
  });

  it("flipMatchVoyage([1, 2], 0)", () => {
    const result = flipMatchVoyage(arrayToTree([1, 2]), 0);
    expect(result).toEqual([-1]);
  });
});
