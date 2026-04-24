import { isSubPath } from '../1367-linked-list-in-binary-tree.js';
import { arrayToList, arrayToTree, listToArray, treeToArray } from './__helpers__/test_helpers.js';

describe('1367-linked-list-in-binary-tree', () => {
  it("isSubPath([1, 2, 3, 4, 5], 0)", () => {
    const result = isSubPath(arrayToList([1, 2, 3, 4, 5]), 0);
    expect(result).toEqual(false);
  });

  it("isSubPath([1], 0)", () => {
    const result = isSubPath(arrayToList([1]), 0);
    expect(result).toEqual(false);
  });

  it("isSubPath([], 0)", () => {
    const result = isSubPath(arrayToList([]), 0);
    expect(result).toEqual(true);
  });

  it("isSubPath([1, 1, 2], 0)", () => {
    const result = isSubPath(arrayToList([1, 1, 2]), 0);
    expect(result).toEqual(false);
  });

  it("isSubPath([1, 2], 0)", () => {
    const result = isSubPath(arrayToList([1, 2]), 0);
    expect(result).toEqual(false);
  });

  it("isSubPath([1, 1, 1, 1], 0)", () => {
    const result = isSubPath(arrayToList([1, 1, 1, 1]), 0);
    expect(result).toEqual(false);
  });
});
