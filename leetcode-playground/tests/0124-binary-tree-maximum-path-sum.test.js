import { maxPathSum } from '../0124-binary-tree-maximum-path-sum.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0124-binary-tree-maximum-path-sum', () => {
  it("maxPathSum([3, 9, 20, null, null, 15, 7])", () => {
    const result = maxPathSum(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual(47);
  });

  it("maxPathSum([1])", () => {
    const result = maxPathSum(arrayToTree([1]));
    expect(result).toEqual(1);
  });

  it("maxPathSum([1, 2, 3, 4, 5])", () => {
    const result = maxPathSum(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual(11);
  });

  it("maxPathSum([1, null, 2, 3])", () => {
    const result = maxPathSum(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual(6);
  });

  it("maxPathSum([1, 2])", () => {
    const result = maxPathSum(arrayToTree([1, 2]));
    expect(result).toEqual(3);
  });
});
