import { insertIntoMaxTree } from '../0998-maximum-binary-tree-ii.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0998-maximum-binary-tree-ii', () => {
  it("insertIntoMaxTree([3, 9, 20, null, null, 15, 7], 2)", () => {
    const result = insertIntoMaxTree(arrayToTree([3, 9, 20, null, null, 15, 7]), 2);
    expect(treeToArray(result)).toEqual([3, 9, 20, null, null, 15, 7, null, null, null, 2]);
  });

  it("insertIntoMaxTree([1], 2)", () => {
    const result = insertIntoMaxTree(arrayToTree([1]), 2);
    expect(treeToArray(result)).toEqual([2, 1]);
  });

  it("insertIntoMaxTree([], 2)", () => {
    const result = insertIntoMaxTree(arrayToTree([]), 2);
    expect(treeToArray(result)).toEqual([2]);
  });

  it("insertIntoMaxTree([1, 2, 3, 4, 5], 2)", () => {
    const result = insertIntoMaxTree(arrayToTree([1, 2, 3, 4, 5]), 2);
    expect(treeToArray(result)).toEqual([2, 1, null, 2, 3, 4, 5]);
  });

  it("insertIntoMaxTree([1, null, 2, 3], 2)", () => {
    const result = insertIntoMaxTree(arrayToTree([1, null, 2, 3]), 2);
    expect(treeToArray(result)).toEqual([2, 1, null, null, 2, 3]);
  });

  it("insertIntoMaxTree([1, 2], 2)", () => {
    const result = insertIntoMaxTree(arrayToTree([1, 2]), 2);
    expect(treeToArray(result)).toEqual([2, 1, null, 2]);
  });
});
