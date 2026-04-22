import { diameterOfBinaryTree } from '../0543-diameter-of-binary-tree.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0543-diameter-of-binary-tree', () => {
  it("diameterOfBinaryTree([3, 9, 20, null, null, 15, 7])", () => {
    const result = diameterOfBinaryTree(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual(3);
  });

  it("diameterOfBinaryTree([1])", () => {
    const result = diameterOfBinaryTree(arrayToTree([1]));
    expect(result).toEqual(0);
  });

  it("diameterOfBinaryTree([])", () => {
    const result = diameterOfBinaryTree(arrayToTree([]));
    expect(result).toEqual(0);
  });

  it("diameterOfBinaryTree([1, 2, 3, 4, 5])", () => {
    const result = diameterOfBinaryTree(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual(3);
  });

  it("diameterOfBinaryTree([1, null, 2, 3])", () => {
    const result = diameterOfBinaryTree(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual(2);
  });

  it("diameterOfBinaryTree([1, 2])", () => {
    const result = diameterOfBinaryTree(arrayToTree([1, 2]));
    expect(result).toEqual(1);
  });
});
