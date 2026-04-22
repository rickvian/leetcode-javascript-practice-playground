import { upsideDownBinaryTree } from '../0156-binary-tree-upside-down.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0156-binary-tree-upside-down', () => {
  it("upsideDownBinaryTree([3, 9, 20, null, null, 15, 7])", () => {
    const result = upsideDownBinaryTree(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(treeToArray(result)).toEqual([9, 20, 3, 15, 7]);
  });

  it("upsideDownBinaryTree([1])", () => {
    const result = upsideDownBinaryTree(arrayToTree([1]));
    expect(treeToArray(result)).toEqual([1]);
  });

  it("upsideDownBinaryTree([])", () => {
    const result = upsideDownBinaryTree(arrayToTree([]));
    expect(treeToArray(result)).toEqual([]);
  });

  it("upsideDownBinaryTree([1, 2, 3, 4, 5])", () => {
    const result = upsideDownBinaryTree(arrayToTree([1, 2, 3, 4, 5]));
    expect(treeToArray(result)).toEqual([4, 5, 2, null, null, 3, 1]);
  });

  it("upsideDownBinaryTree([1, null, 2, 3])", () => {
    const result = upsideDownBinaryTree(arrayToTree([1, null, 2, 3]));
    expect(treeToArray(result)).toEqual([1, null, 2, 3]);
  });

  it("upsideDownBinaryTree([1, 2])", () => {
    const result = upsideDownBinaryTree(arrayToTree([1, 2]));
    expect(treeToArray(result)).toEqual([2, null, 1]);
  });
});
