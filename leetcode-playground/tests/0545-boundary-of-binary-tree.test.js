import { boundaryOfBinaryTree } from '../0545-boundary-of-binary-tree.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0545-boundary-of-binary-tree', () => {
  it("boundaryOfBinaryTree([3, 9, 20, null, null, 15, 7])", () => {
    const result = boundaryOfBinaryTree(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual([3, 9, 15, 7, 20]);
  });

  it("boundaryOfBinaryTree([1])", () => {
    const result = boundaryOfBinaryTree(arrayToTree([1]));
    expect(result).toEqual([1]);
  });

  it("boundaryOfBinaryTree([])", () => {
    const result = boundaryOfBinaryTree(arrayToTree([]));
    expect(result).toEqual([]);
  });

  it("boundaryOfBinaryTree([1, 2, 3, 4, 5])", () => {
    const result = boundaryOfBinaryTree(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual([1, 2, 4, 5, 3]);
  });

  it("boundaryOfBinaryTree([1, null, 2, 3])", () => {
    const result = boundaryOfBinaryTree(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual([1, 3, 2]);
  });

  it("boundaryOfBinaryTree([1, 2])", () => {
    const result = boundaryOfBinaryTree(arrayToTree([1, 2]));
    expect(result).toEqual([1, 2]);
  });
});
