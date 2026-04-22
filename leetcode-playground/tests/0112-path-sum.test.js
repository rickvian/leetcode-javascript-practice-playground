import { hasPathSum } from '../0112-path-sum.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0112-path-sum', () => {
  it("hasPathSum([3, 9, 20, null, null, 15, 7], 1)", () => {
    const result = hasPathSum(arrayToTree([3, 9, 20, null, null, 15, 7]), 1);
    expect(result).toEqual(false);
  });

  it("hasPathSum([1], 1)", () => {
    const result = hasPathSum(arrayToTree([1]), 1);
    expect(result).toEqual(true);
  });

  it("hasPathSum([], 1)", () => {
    const result = hasPathSum(arrayToTree([]), 1);
    expect(result).toEqual(false);
  });

  it("hasPathSum([1, 2, 3, 4, 5], 1)", () => {
    const result = hasPathSum(arrayToTree([1, 2, 3, 4, 5]), 1);
    expect(result).toEqual(false);
  });

  it("hasPathSum([1, null, 2, 3], 1)", () => {
    const result = hasPathSum(arrayToTree([1, null, 2, 3]), 1);
    expect(result).toEqual(false);
  });

  it("hasPathSum([1, 2], 1)", () => {
    const result = hasPathSum(arrayToTree([1, 2]), 1);
    expect(result).toEqual(false);
  });
});
