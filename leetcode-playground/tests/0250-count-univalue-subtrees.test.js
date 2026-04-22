import { countUnivalSubtrees } from '../0250-count-univalue-subtrees.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0250-count-univalue-subtrees', () => {
  it("countUnivalSubtrees([3, 9, 20, null, null, 15, 7])", () => {
    const result = countUnivalSubtrees(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual(3);
  });

  it("countUnivalSubtrees([1])", () => {
    const result = countUnivalSubtrees(arrayToTree([1]));
    expect(result).toEqual(1);
  });

  it("countUnivalSubtrees([])", () => {
    const result = countUnivalSubtrees(arrayToTree([]));
    expect(result).toEqual(0);
  });

  it("countUnivalSubtrees([1, 2, 3, 4, 5])", () => {
    const result = countUnivalSubtrees(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual(3);
  });

  it("countUnivalSubtrees([1, null, 2, 3])", () => {
    const result = countUnivalSubtrees(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual(1);
  });

  it("countUnivalSubtrees([1, 2])", () => {
    const result = countUnivalSubtrees(arrayToTree([1, 2]));
    expect(result).toEqual(1);
  });
});
