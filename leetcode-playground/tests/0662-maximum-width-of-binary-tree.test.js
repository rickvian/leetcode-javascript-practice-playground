import { widthOfBinaryTree } from '../0662-maximum-width-of-binary-tree.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0662-maximum-width-of-binary-tree', () => {
  it("widthOfBinaryTree([3, 9, 20, null, null, 15, 7])", () => {
    const result = widthOfBinaryTree(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual(2);
  });

  it("widthOfBinaryTree([1])", () => {
    const result = widthOfBinaryTree(arrayToTree([1]));
    expect(result).toEqual(1);
  });

  it("widthOfBinaryTree([1, 2, 3, 4, 5])", () => {
    const result = widthOfBinaryTree(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual(2);
  });

  it("widthOfBinaryTree([1, null, 2, 3])", () => {
    const result = widthOfBinaryTree(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual(1);
  });

  it("widthOfBinaryTree([1, 2])", () => {
    const result = widthOfBinaryTree(arrayToTree([1, 2]));
    expect(result).toEqual(1);
  });
});
