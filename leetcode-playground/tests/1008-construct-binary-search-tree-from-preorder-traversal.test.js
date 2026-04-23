import { bstFromPreorder } from '../1008-construct-binary-search-tree-from-preorder-traversal.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('1008-construct-binary-search-tree-from-preorder-traversal', () => {
  it("bstFromPreorder([1, 2, 3, 4, 5])", () => {
    const result = bstFromPreorder([1, 2, 3, 4, 5]);
    expect(treeToArray(result)).toEqual([1, null, 2, null, 3, null, 4, null, 5]);
  });

  it("bstFromPreorder([])", () => {
    const result = bstFromPreorder([]);
    expect(treeToArray(result)).toEqual([]);
  });

  it("bstFromPreorder([1])", () => {
    const result = bstFromPreorder([1]);
    expect(treeToArray(result)).toEqual([1]);
  });

  it("bstFromPreorder([1, 1])", () => {
    const result = bstFromPreorder([1, 1]);
    expect(treeToArray(result)).toEqual([1, 1]);
  });

  it("bstFromPreorder([3, 1, 4, 1, 5])", () => {
    const result = bstFromPreorder([3, 1, 4, 1, 5]);
    expect(treeToArray(result)).toEqual([3, 1, 4, null, null, 1, 5]);
  });

  it("bstFromPreorder([-1, 0, 1])", () => {
    const result = bstFromPreorder([-1, 0, 1]);
    expect(treeToArray(result)).toEqual([-1, null, 0, null, 1]);
  });
});
