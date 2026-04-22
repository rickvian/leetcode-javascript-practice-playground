import { sumOfLeftLeaves } from '../0404-sum-of-left-leaves.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0404-sum-of-left-leaves', () => {
  it("sumOfLeftLeaves([1, 2, 3], [1, 2, 3])", () => {
    const result = sumOfLeftLeaves(arrayToTree([1, 2, 3]), arrayToTree([1, 2, 3]));
    expect(result).toEqual(2);
  });

  it("sumOfLeftLeaves([1], [1])", () => {
    const result = sumOfLeftLeaves(arrayToTree([1]), arrayToTree([1]));
    expect(result).toEqual(1);
  });

  it("sumOfLeftLeaves([], [])", () => {
    const result = sumOfLeftLeaves(arrayToTree([]), arrayToTree([]));
    expect(result).toEqual(0);
  });

  it("sumOfLeftLeaves([1, 2], [1, null, 2])", () => {
    const result = sumOfLeftLeaves(arrayToTree([1, 2]), arrayToTree([1, null, 2]));
    expect(result).toEqual(2);
  });
});
