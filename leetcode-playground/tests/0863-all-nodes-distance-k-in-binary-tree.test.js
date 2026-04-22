import { distanceK } from '../0863-all-nodes-distance-k-in-binary-tree.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0863-all-nodes-distance-k-in-binary-tree', () => {
  it("distanceK([1, 2, 3], [1, 2, 3]...)", () => {
    const result = distanceK(arrayToTree([1, 2, 3]), arrayToTree([1, 2, 3]), 2);
    expect(result).toEqual([]);
  });

  it("distanceK([1], [1]...)", () => {
    const result = distanceK(arrayToTree([1]), arrayToTree([1]), 2);
    expect(result).toEqual([]);
  });

  it("distanceK([1, 2], [1, null, 2]...)", () => {
    const result = distanceK(arrayToTree([1, 2]), arrayToTree([1, null, 2]), 2);
    expect(result).toEqual([]);
  });
});
