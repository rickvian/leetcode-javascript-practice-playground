import { isUnivalTree } from '../0965-univalued-binary-tree.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0965-univalued-binary-tree', () => {
  it("isUnivalTree([3, 9, 20, null, null, 15, 7])", () => {
    const result = isUnivalTree(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual(false);
  });

  it("isUnivalTree([1])", () => {
    const result = isUnivalTree(arrayToTree([1]));
    expect(result).toEqual(true);
  });

  it("isUnivalTree([1, 2, 3, 4, 5])", () => {
    const result = isUnivalTree(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual(false);
  });

  it("isUnivalTree([1, null, 2, 3])", () => {
    const result = isUnivalTree(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual(false);
  });

  it("isUnivalTree([1, 2])", () => {
    const result = isUnivalTree(arrayToTree([1, 2]));
    expect(result).toEqual(false);
  });
});
