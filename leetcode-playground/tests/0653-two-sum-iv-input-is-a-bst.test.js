import { findTarget } from '../0653-two-sum-iv-input-is-a-bst.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0653-two-sum-iv-input-is-a-bst', () => {
  it("findTarget([3, 9, 20, null, null, 15, 7], 2)", () => {
    const result = findTarget(arrayToTree([3, 9, 20, null, null, 15, 7]), 2);
    expect(result).toEqual(false);
  });

  it("findTarget([1], 2)", () => {
    const result = findTarget(arrayToTree([1]), 2);
    expect(result).toEqual(false);
  });

  it("findTarget([], 2)", () => {
    const result = findTarget(arrayToTree([]), 2);
    expect(result).toEqual(false);
  });

  it("findTarget([1, 2, 3, 4, 5], 2)", () => {
    const result = findTarget(arrayToTree([1, 2, 3, 4, 5]), 2);
    expect(result).toEqual(false);
  });

  it("findTarget([1, null, 2, 3], 2)", () => {
    const result = findTarget(arrayToTree([1, null, 2, 3]), 2);
    expect(result).toEqual(false);
  });

  it("findTarget([1, 2], 2)", () => {
    const result = findTarget(arrayToTree([1, 2]), 2);
    expect(result).toEqual(false);
  });
});
