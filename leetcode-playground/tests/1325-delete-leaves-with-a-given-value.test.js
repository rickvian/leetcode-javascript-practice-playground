import { removeLeafNodes } from '../1325-delete-leaves-with-a-given-value.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('1325-delete-leaves-with-a-given-value', () => {
  it("removeLeafNodes([3, 9, 20, null, null, 15, 7], 1)", () => {
    const result = removeLeafNodes(arrayToTree([3, 9, 20, null, null, 15, 7]), 1);
    expect(treeToArray(result)).toEqual([3, 9, 20, null, null, 15, 7]);
  });

  it("removeLeafNodes([1], 1)", () => {
    const result = removeLeafNodes(arrayToTree([1]), 1);
    expect(treeToArray(result)).toEqual([]);
  });

  it("removeLeafNodes([], 1)", () => {
    const result = removeLeafNodes(arrayToTree([]), 1);
    expect(treeToArray(result)).toEqual([]);
  });

  it("removeLeafNodes([1, 2, 3, 4, 5], 1)", () => {
    const result = removeLeafNodes(arrayToTree([1, 2, 3, 4, 5]), 1);
    expect(treeToArray(result)).toEqual([1, 2, 3, 4, 5]);
  });

  it("removeLeafNodes([1, null, 2, 3], 1)", () => {
    const result = removeLeafNodes(arrayToTree([1, null, 2, 3]), 1);
    expect(treeToArray(result)).toEqual([1, null, 2, 3]);
  });

  it("removeLeafNodes([1, 2], 1)", () => {
    const result = removeLeafNodes(arrayToTree([1, 2]), 1);
    expect(treeToArray(result)).toEqual([1, 2]);
  });
});
