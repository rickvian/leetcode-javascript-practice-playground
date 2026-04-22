import { minDepth } from '../0111-minimum-depth-of-binary-tree.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0111-minimum-depth-of-binary-tree', () => {
  it("minDepth([3, 9, 20, null, null, 15, 7])", () => {
    const result = minDepth(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual(2);
  });

  it("minDepth([1])", () => {
    const result = minDepth(arrayToTree([1]));
    expect(result).toEqual(1);
  });

  it("minDepth([])", () => {
    const result = minDepth(arrayToTree([]));
    expect(result).toEqual(0);
  });

  it("minDepth([1, 2, 3, 4, 5])", () => {
    const result = minDepth(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual(2);
  });

  it("minDepth([1, null, 2, 3])", () => {
    const result = minDepth(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual(3);
  });

  it("minDepth([1, 2])", () => {
    const result = minDepth(arrayToTree([1, 2]));
    expect(result).toEqual(2);
  });
});
