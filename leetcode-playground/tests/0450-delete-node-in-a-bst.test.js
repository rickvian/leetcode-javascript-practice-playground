import { deleteNode } from '../0450-delete-node-in-a-bst.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0450-delete-node-in-a-bst', () => {
  it("deleteNode([3, 9, 20, null, null, 15, 7], 1)", () => {
    const result = deleteNode(arrayToTree([3, 9, 20, null, null, 15, 7]), 1);
    expect(treeToArray(result)).toEqual([3, 9, 20, null, null, 15, 7]);
  });

  it("deleteNode([1], 1)", () => {
    const result = deleteNode(arrayToTree([1]), 1);
    expect(treeToArray(result)).toEqual([]);
  });

  it("deleteNode([], 1)", () => {
    const result = deleteNode(arrayToTree([]), 1);
    expect(treeToArray(result)).toEqual([]);
  });

  it("deleteNode([1, 2, 3, 4, 5], 1)", () => {
    const result = deleteNode(arrayToTree([1, 2, 3, 4, 5]), 1);
    expect(treeToArray(result)).toEqual([3, 2, null, 4, 5]);
  });

  it("deleteNode([1, null, 2, 3], 1)", () => {
    const result = deleteNode(arrayToTree([1, null, 2, 3]), 1);
    expect(treeToArray(result)).toEqual([2, 3]);
  });

  it("deleteNode([1, 2], 1)", () => {
    const result = deleteNode(arrayToTree([1, 2]), 1);
    expect(treeToArray(result)).toEqual([2]);
  });
});
