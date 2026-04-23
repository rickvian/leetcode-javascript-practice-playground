import { twoSumBSTs } from '../1214-two-sum-bsts.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('1214-two-sum-bsts', () => {
  it("twoSumBSTs([1, 2, 3], [1, 2, 3]...)", () => {
    const result = twoSumBSTs(arrayToTree([1, 2, 3]), arrayToTree([1, 2, 3]), 1);
    expect(result).toEqual(false);
  });

  it("twoSumBSTs([1], [1]...)", () => {
    const result = twoSumBSTs(arrayToTree([1]), arrayToTree([1]), 1);
    expect(result).toEqual(false);
  });

  it("twoSumBSTs([], []...)", () => {
    const result = twoSumBSTs(arrayToTree([]), arrayToTree([]), 1);
    expect(result).toEqual(false);
  });

  it("twoSumBSTs([1, 2], [1, null, 2]...)", () => {
    const result = twoSumBSTs(arrayToTree([1, 2]), arrayToTree([1, null, 2]), 1);
    expect(result).toEqual(false);
  });
});
