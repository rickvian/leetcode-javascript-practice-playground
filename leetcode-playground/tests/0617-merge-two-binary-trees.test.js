import { mergeTrees } from '../0617-merge-two-binary-trees.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0617-merge-two-binary-trees', () => {
  it("mergeTrees([1, 2, 3], [1, 2, 3])", () => {
    const result = mergeTrees(arrayToTree([1, 2, 3]), arrayToTree([1, 2, 3]));
    expect(treeToArray(result)).toEqual([2, 4, 6]);
  });

  it("mergeTrees([1], [1])", () => {
    const result = mergeTrees(arrayToTree([1]), arrayToTree([1]));
    expect(treeToArray(result)).toEqual([2]);
  });

  it("mergeTrees([], [])", () => {
    const result = mergeTrees(arrayToTree([]), arrayToTree([]));
    expect(treeToArray(result)).toEqual([]);
  });

  it("mergeTrees([1, 2], [1, null, 2])", () => {
    const result = mergeTrees(arrayToTree([1, 2]), arrayToTree([1, null, 2]));
    expect(treeToArray(result)).toEqual([2, 2, 2]);
  });
});
