import { verticalOrder } from '../0314-binary-tree-vertical-order-traversal.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0314-binary-tree-vertical-order-traversal', () => {
  it("verticalOrder([3, 9, 20, null, null, 15, 7])", () => {
    const result = verticalOrder(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual([[9], [3, 15], [20], [7]]);
  });

  it("verticalOrder([1])", () => {
    const result = verticalOrder(arrayToTree([1]));
    expect(result).toEqual([[1]]);
  });

  it("verticalOrder([])", () => {
    const result = verticalOrder(arrayToTree([]));
    expect(result).toEqual([]);
  });

  it("verticalOrder([1, 2, 3, 4, 5])", () => {
    const result = verticalOrder(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual([[4], [2], [1, 5], [3]]);
  });

  it("verticalOrder([1, null, 2, 3])", () => {
    const result = verticalOrder(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual([[1, 3], [2]]);
  });

  it("verticalOrder([1, 2])", () => {
    const result = verticalOrder(arrayToTree([1, 2]));
    expect(result).toEqual([[2], [1]]);
  });
});
