import { maxLevelSum } from '../1161-maximum-level-sum-of-a-binary-tree.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('1161-maximum-level-sum-of-a-binary-tree', () => {
  it("maxLevelSum([3, 9, 20, null, null, 15, 7])", () => {
    const result = maxLevelSum(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual(2);
  });

  it("maxLevelSum([1])", () => {
    const result = maxLevelSum(arrayToTree([1]));
    expect(result).toEqual(1);
  });

  it("maxLevelSum([])", () => {
    const result = maxLevelSum(arrayToTree([]));
    expect(result).toEqual(0);
  });

  it("maxLevelSum([1, 2, 3, 4, 5])", () => {
    const result = maxLevelSum(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual(3);
  });

  it("maxLevelSum([1, null, 2, 3])", () => {
    const result = maxLevelSum(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual(3);
  });

  it("maxLevelSum([1, 2])", () => {
    const result = maxLevelSum(arrayToTree([1, 2]));
    expect(result).toEqual(2);
  });
});
