import { rangeSumBST } from '../0938-range-sum-of-bst.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0938-range-sum-of-bst', () => {
  it("rangeSumBST([3, 9, 20, null, null, 15, 7], 1...)", () => {
    const result = rangeSumBST(arrayToTree([3, 9, 20, null, null, 15, 7]), 1, 1);
    expect(result).toEqual(0);
  });

  it("rangeSumBST([1], 1...)", () => {
    const result = rangeSumBST(arrayToTree([1]), 1, 1);
    expect(result).toEqual(1);
  });

  it("rangeSumBST([], 1...)", () => {
    const result = rangeSumBST(arrayToTree([]), 1, 1);
    expect(result).toEqual(0);
  });

  it("rangeSumBST([1, 2, 3, 4, 5], 1...)", () => {
    const result = rangeSumBST(arrayToTree([1, 2, 3, 4, 5]), 1, 1);
    expect(result).toEqual(1);
  });

  it("rangeSumBST([1, null, 2, 3], 1...)", () => {
    const result = rangeSumBST(arrayToTree([1, null, 2, 3]), 1, 1);
    expect(result).toEqual(1);
  });

  it("rangeSumBST([1, 2], 1...)", () => {
    const result = rangeSumBST(arrayToTree([1, 2]), 1, 1);
    expect(result).toEqual(1);
  });
});
