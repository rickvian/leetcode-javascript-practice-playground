import { findMode } from '../0501-find-mode-in-binary-search-tree.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0501-find-mode-in-binary-search-tree', () => {
  it("findMode([3, 9, 20, null, null, 15, 7])", () => {
    const result = findMode(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual([3, 9, 20, 15, 7]);
  });

  it("findMode([1])", () => {
    const result = findMode(arrayToTree([1]));
    expect(result).toEqual([1]);
  });

  it("findMode([])", () => {
    const result = findMode(arrayToTree([]));
    expect(result).toEqual([]);
  });

  it("findMode([1, 2, 3, 4, 5])", () => {
    const result = findMode(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual([1, 2, 4, 5, 3]);
  });

  it("findMode([1, null, 2, 3])", () => {
    const result = findMode(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual([1, 2, 3]);
  });

  it("findMode([1, 2])", () => {
    const result = findMode(arrayToTree([1, 2]));
    expect(result).toEqual([1, 2]);
  });
});
