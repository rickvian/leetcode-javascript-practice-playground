import { invertTree } from '../0226-invert-binary-tree.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0226-invert-binary-tree', () => {
  it("invertTree([3, 9, 20, null, null, 15, 7])", () => {
    const result = invertTree(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(treeToArray(result)).toEqual([3, 20, 9, 7, 15]);
  });

  it("invertTree([1])", () => {
    const result = invertTree(arrayToTree([1]));
    expect(treeToArray(result)).toEqual([1]);
  });

  it("invertTree([])", () => {
    const result = invertTree(arrayToTree([]));
    expect(treeToArray(result)).toEqual([]);
  });

  it("invertTree([1, 2, 3, 4, 5])", () => {
    const result = invertTree(arrayToTree([1, 2, 3, 4, 5]));
    expect(treeToArray(result)).toEqual([1, 3, 2, null, null, 5, 4]);
  });

  it("invertTree([1, null, 2, 3])", () => {
    const result = invertTree(arrayToTree([1, null, 2, 3]));
    expect(treeToArray(result)).toEqual([1, 2, null, null, 3]);
  });

  it("invertTree([1, 2])", () => {
    const result = invertTree(arrayToTree([1, 2]));
    expect(treeToArray(result)).toEqual([1, null, 2]);
  });
});
