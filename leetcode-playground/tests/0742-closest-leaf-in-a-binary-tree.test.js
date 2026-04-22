import { findClosestLeaf } from '../0742-closest-leaf-in-a-binary-tree.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0742-closest-leaf-in-a-binary-tree', () => {
  it("findClosestLeaf([3, 9, 20, null, null, 15, 7], 2)", () => {
    const result = findClosestLeaf(arrayToTree([3, 9, 20, null, null, 15, 7]), 2);
    expect(result).toEqual(-1);
  });

  it("findClosestLeaf([1], 2)", () => {
    const result = findClosestLeaf(arrayToTree([1]), 2);
    expect(result).toEqual(-1);
  });

  it("findClosestLeaf([], 2)", () => {
    const result = findClosestLeaf(arrayToTree([]), 2);
    expect(result).toEqual(-1);
  });

  it("findClosestLeaf([1, 2, 3, 4, 5], 2)", () => {
    const result = findClosestLeaf(arrayToTree([1, 2, 3, 4, 5]), 2);
    expect(result).toEqual(4);
  });

  it("findClosestLeaf([1, null, 2, 3], 2)", () => {
    const result = findClosestLeaf(arrayToTree([1, null, 2, 3]), 2);
    expect(result).toEqual(3);
  });

  it("findClosestLeaf([1, 2], 2)", () => {
    const result = findClosestLeaf(arrayToTree([1, 2]), 2);
    expect(result).toEqual(2);
  });
});
