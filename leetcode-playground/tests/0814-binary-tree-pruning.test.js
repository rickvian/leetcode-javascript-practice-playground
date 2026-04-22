import { pruneTree } from '../0814-binary-tree-pruning.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0814-binary-tree-pruning', () => {
  it("pruneTree([3, 9, 20, null, null, 15, 7])", () => {
    const result = pruneTree(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(treeToArray(result)).toEqual([3, 9, 20, null, null, 15, 7]);
  });

  it("pruneTree([1])", () => {
    const result = pruneTree(arrayToTree([1]));
    expect(treeToArray(result)).toEqual([1]);
  });

  it("pruneTree([])", () => {
    const result = pruneTree(arrayToTree([]));
    expect(treeToArray(result)).toEqual([]);
  });

  it("pruneTree([1, 2, 3, 4, 5])", () => {
    const result = pruneTree(arrayToTree([1, 2, 3, 4, 5]));
    expect(treeToArray(result)).toEqual([1, 2, 3, 4, 5]);
  });

  it("pruneTree([1, null, 2, 3])", () => {
    const result = pruneTree(arrayToTree([1, null, 2, 3]));
    expect(treeToArray(result)).toEqual([1, null, 2, 3]);
  });

  it("pruneTree([1, 2])", () => {
    const result = pruneTree(arrayToTree([1, 2]));
    expect(treeToArray(result)).toEqual([1, 2]);
  });
});
