import { minDiffInBST } from '../0783-minimum-distance-between-bst-nodes.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0783-minimum-distance-between-bst-nodes', () => {
  it("minDiffInBST([3, 9, 20, null, null, 15, 7])", () => {
    const result = minDiffInBST(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual(-13);
  });

  it("minDiffInBST([1, 2, 3, 4, 5])", () => {
    const result = minDiffInBST(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual(-4);
  });

  it("minDiffInBST([1, null, 2, 3])", () => {
    const result = minDiffInBST(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual(-1);
  });

  it("minDiffInBST([1, 2])", () => {
    const result = minDiffInBST(arrayToTree([1, 2]));
    expect(result).toEqual(-1);
  });
});
