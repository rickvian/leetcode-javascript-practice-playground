import { getMinimumDifference } from '../0530-minimum-absolute-difference-in-bst.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0530-minimum-absolute-difference-in-bst', () => {
  it("getMinimumDifference([3, 9, 20, null, null, 15, 7])", () => {
    const result = getMinimumDifference(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual(-13);
  });

  it("getMinimumDifference([1, 2, 3, 4, 5])", () => {
    const result = getMinimumDifference(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual(-4);
  });

  it("getMinimumDifference([1, null, 2, 3])", () => {
    const result = getMinimumDifference(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual(-1);
  });

  it("getMinimumDifference([1, 2])", () => {
    const result = getMinimumDifference(arrayToTree([1, 2]));
    expect(result).toEqual(-1);
  });
});
