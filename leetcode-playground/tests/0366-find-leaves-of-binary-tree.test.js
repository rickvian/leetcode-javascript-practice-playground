import { findLeaves } from '../0366-find-leaves-of-binary-tree.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0366-find-leaves-of-binary-tree', () => {
  it("findLeaves([3, 9, 20, null, null, 15, 7])", () => {
    const result = findLeaves(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual([[9, 15, 7], [20], [3]]);
  });

  it("findLeaves([1])", () => {
    const result = findLeaves(arrayToTree([1]));
    expect(result).toEqual([[1]]);
  });

  it("findLeaves([])", () => {
    const result = findLeaves(arrayToTree([]));
    expect(result).toEqual([]);
  });

  it("findLeaves([1, 2, 3, 4, 5])", () => {
    const result = findLeaves(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual([[4, 5, 3], [2], [1]]);
  });

  it("findLeaves([1, null, 2, 3])", () => {
    const result = findLeaves(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual([[3], [2], [1]]);
  });

  it("findLeaves([1, 2])", () => {
    const result = findLeaves(arrayToTree([1, 2]));
    expect(result).toEqual([[2], [1]]);
  });
});
