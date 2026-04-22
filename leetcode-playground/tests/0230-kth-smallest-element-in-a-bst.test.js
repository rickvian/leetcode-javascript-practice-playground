import { kthSmallest } from '../0230-kth-smallest-element-in-a-bst.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0230-kth-smallest-element-in-a-bst', () => {
  it("kthSmallest([3, 9, 20, null, null, 15, 7], 2)", () => {
    const result = kthSmallest(arrayToTree([3, 9, 20, null, null, 15, 7]), 2);
    expect(result).toEqual(3);
  });

  it("kthSmallest([1, 2, 3, 4, 5], 2)", () => {
    const result = kthSmallest(arrayToTree([1, 2, 3, 4, 5]), 2);
    expect(result).toEqual(2);
  });

  it("kthSmallest([1, null, 2, 3], 2)", () => {
    const result = kthSmallest(arrayToTree([1, null, 2, 3]), 2);
    expect(result).toEqual(3);
  });

  it("kthSmallest([1, 2], 2)", () => {
    const result = kthSmallest(arrayToTree([1, 2]), 2);
    expect(result).toEqual(1);
  });
});
