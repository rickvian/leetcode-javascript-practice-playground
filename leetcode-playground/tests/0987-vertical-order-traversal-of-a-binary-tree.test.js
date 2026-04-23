import { verticalTraversal } from '../0987-vertical-order-traversal-of-a-binary-tree.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0987-vertical-order-traversal-of-a-binary-tree', () => {
  it("verticalTraversal([3, 9, 20, null, null, 15, 7])", () => {
    const result = verticalTraversal(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual([[9], [3, 15], [20], [7]]);
  });

  it("verticalTraversal([1])", () => {
    const result = verticalTraversal(arrayToTree([1]));
    expect(result).toEqual([[1]]);
  });

  it("verticalTraversal([1, 2, 3, 4, 5])", () => {
    const result = verticalTraversal(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual([[4], [2], [1, 5], [3]]);
  });

  it("verticalTraversal([1, null, 2, 3])", () => {
    const result = verticalTraversal(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual([[1, 3], [2]]);
  });

  it("verticalTraversal([1, 2])", () => {
    const result = verticalTraversal(arrayToTree([1, 2]));
    expect(result).toEqual([[2], [1]]);
  });
});
