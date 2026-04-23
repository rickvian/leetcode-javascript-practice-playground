import { deepestLeavesSum } from '../1302-deepest-leaves-sum.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('1302-deepest-leaves-sum', () => {
  it("deepestLeavesSum([3, 9, 20, null, null, 15, 7])", () => {
    const result = deepestLeavesSum(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual(22);
  });

  it("deepestLeavesSum([1])", () => {
    const result = deepestLeavesSum(arrayToTree([1]));
    expect(result).toEqual(1);
  });

  it("deepestLeavesSum([])", () => {
    const result = deepestLeavesSum(arrayToTree([]));
    expect(result).toEqual(0);
  });

  it("deepestLeavesSum([1, 2, 3, 4, 5])", () => {
    const result = deepestLeavesSum(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual(9);
  });

  it("deepestLeavesSum([1, null, 2, 3])", () => {
    const result = deepestLeavesSum(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual(3);
  });

  it("deepestLeavesSum([1, 2])", () => {
    const result = deepestLeavesSum(arrayToTree([1, 2]));
    expect(result).toEqual(2);
  });
});
