import { findFrequentTreeSum } from '../0508-most-frequent-subtree-sum.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0508-most-frequent-subtree-sum', () => {
  it("findFrequentTreeSum([3, 9, 20, null, null, 15, 7])", () => {
    const result = findFrequentTreeSum(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual([9, 15, 7, 42, 54]);
  });

  it("findFrequentTreeSum([1])", () => {
    const result = findFrequentTreeSum(arrayToTree([1]));
    expect(result).toEqual([1]);
  });

  it("findFrequentTreeSum([])", () => {
    const result = findFrequentTreeSum(arrayToTree([]));
    expect(result).toEqual([]);
  });

  it("findFrequentTreeSum([1, 2, 3, 4, 5])", () => {
    const result = findFrequentTreeSum(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual([4, 5, 11, 3, 15]);
  });

  it("findFrequentTreeSum([1, null, 2, 3])", () => {
    const result = findFrequentTreeSum(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual([3, 5, 6]);
  });

  it("findFrequentTreeSum([1, 2])", () => {
    const result = findFrequentTreeSum(arrayToTree([1, 2]));
    expect(result).toEqual([2, 3]);
  });
});
