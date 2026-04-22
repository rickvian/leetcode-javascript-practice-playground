import { isSameTree } from '../0100-same-tree.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0100-same-tree', () => {
  it("isSameTree([1, 2, 3], [1, 2, 3])", () => {
    const result = isSameTree(arrayToTree([1, 2, 3]), arrayToTree([1, 2, 3]));
    expect(result).toEqual(true);
  });

  it("isSameTree([1], [1])", () => {
    const result = isSameTree(arrayToTree([1]), arrayToTree([1]));
    expect(result).toEqual(true);
  });

  it("isSameTree([], [])", () => {
    const result = isSameTree(arrayToTree([]), arrayToTree([]));
    expect(result).toEqual(true);
  });

  it("isSameTree([1, 2], [1, null, 2])", () => {
    const result = isSameTree(arrayToTree([1, 2]), arrayToTree([1, null, 2]));
    expect(result).toEqual(false);
  });
});
