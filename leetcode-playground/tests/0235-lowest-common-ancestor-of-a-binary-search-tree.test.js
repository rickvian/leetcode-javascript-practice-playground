import { lowestCommonAncestor } from '../0235-lowest-common-ancestor-of-a-binary-search-tree.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0235-lowest-common-ancestor-of-a-binary-search-tree', () => {
  it("lowestCommonAncestor([1, 2, 3], [1, 2, 3])", () => {
    const result = lowestCommonAncestor(arrayToTree([1, 2, 3]), arrayToTree([1, 2, 3]));
    expect(treeToArray(result)).toEqual([1, 2, 3]);
  });

  it("lowestCommonAncestor([1], [1])", () => {
    const result = lowestCommonAncestor(arrayToTree([1]), arrayToTree([1]));
    expect(treeToArray(result)).toEqual([1]);
  });

  it("lowestCommonAncestor([1, 2], [1, null, 2])", () => {
    const result = lowestCommonAncestor(arrayToTree([1, 2]), arrayToTree([1, null, 2]));
    expect(treeToArray(result)).toEqual([1, 2]);
  });
});
