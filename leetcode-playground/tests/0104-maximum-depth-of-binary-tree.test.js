import { maxDepth } from '../0104-maximum-depth-of-binary-tree.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0104-maximum-depth-of-binary-tree', () => {
  it("maxDepth([3, 9, 20, null, null, 15, 7])", () => {
    const result = maxDepth(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual(3);
  });

  it("maxDepth([1])", () => {
    const result = maxDepth(arrayToTree([1]));
    expect(result).toEqual(1);
  });

  it("maxDepth([])", () => {
    const result = maxDepth(arrayToTree([]));
    expect(result).toEqual(0);
  });

  it("maxDepth([1, 2, 3, 4, 5])", () => {
    const result = maxDepth(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual(3);
  });

  it("maxDepth([1, null, 2, 3])", () => {
    const result = maxDepth(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual(3);
  });

  it("maxDepth([1, 2])", () => {
    const result = maxDepth(arrayToTree([1, 2]));
    expect(result).toEqual(2);
  });
});
