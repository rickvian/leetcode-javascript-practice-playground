import { pathSum } from '../0113-path-sum-ii.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0113-path-sum-ii', () => {
  it("pathSum([3, 9, 20, null, null, 15, 7], 1)", () => {
    const result = pathSum(arrayToTree([3, 9, 20, null, null, 15, 7]), 1);
    expect(result).toEqual([]);
  });

  it("pathSum([1], 1)", () => {
    const result = pathSum(arrayToTree([1]), 1);
    expect(result).toEqual([[1]]);
  });

  it("pathSum([], 1)", () => {
    const result = pathSum(arrayToTree([]), 1);
    expect(result).toEqual([]);
  });

  it("pathSum([1, 2, 3, 4, 5], 1)", () => {
    const result = pathSum(arrayToTree([1, 2, 3, 4, 5]), 1);
    expect(result).toEqual([]);
  });

  it("pathSum([1, null, 2, 3], 1)", () => {
    const result = pathSum(arrayToTree([1, null, 2, 3]), 1);
    expect(result).toEqual([]);
  });

  it("pathSum([1, 2], 1)", () => {
    const result = pathSum(arrayToTree([1, 2]), 1);
    expect(result).toEqual([]);
  });
});
