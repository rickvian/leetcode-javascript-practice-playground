import { findDuplicateSubtrees } from '../0652-find-duplicate-subtrees.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0652-find-duplicate-subtrees', () => {
  it("findDuplicateSubtrees([3, 9, 20, null, null, 15, 7])", () => {
    const result = findDuplicateSubtrees(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result.map(t => treeToArray(t))).toEqual([]);
  });

  it("findDuplicateSubtrees([1])", () => {
    const result = findDuplicateSubtrees(arrayToTree([1]));
    expect(result.map(t => treeToArray(t))).toEqual([]);
  });

  it("findDuplicateSubtrees([])", () => {
    const result = findDuplicateSubtrees(arrayToTree([]));
    expect(result.map(t => treeToArray(t))).toEqual([]);
  });

  it("findDuplicateSubtrees([1, 2, 3, 4, 5])", () => {
    const result = findDuplicateSubtrees(arrayToTree([1, 2, 3, 4, 5]));
    expect(result.map(t => treeToArray(t))).toEqual([]);
  });

  it("findDuplicateSubtrees([1, null, 2, 3])", () => {
    const result = findDuplicateSubtrees(arrayToTree([1, null, 2, 3]));
    expect(result.map(t => treeToArray(t))).toEqual([]);
  });

  it("findDuplicateSubtrees([1, 2])", () => {
    const result = findDuplicateSubtrees(arrayToTree([1, 2]));
    expect(result.map(t => treeToArray(t))).toEqual([]);
  });
});
