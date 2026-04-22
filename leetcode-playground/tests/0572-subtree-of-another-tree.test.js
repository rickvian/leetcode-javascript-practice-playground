import { isSubtree } from '../0572-subtree-of-another-tree.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0572-subtree-of-another-tree', () => {
  it("isSubtree([1, 2, 3], [1, 2, 3])", () => {
    const result = isSubtree(arrayToTree([1, 2, 3]), arrayToTree([1, 2, 3]));
    expect(result).toEqual(true);
  });

  it("isSubtree([1], [1])", () => {
    const result = isSubtree(arrayToTree([1]), arrayToTree([1]));
    expect(result).toEqual(true);
  });

  it("isSubtree([], [])", () => {
    const result = isSubtree(arrayToTree([]), arrayToTree([]));
    expect(result).toEqual(true);
  });

  it("isSubtree([1, 2], [1, null, 2])", () => {
    const result = isSubtree(arrayToTree([1, 2]), arrayToTree([1, null, 2]));
    expect(result).toEqual(false);
  });
});
