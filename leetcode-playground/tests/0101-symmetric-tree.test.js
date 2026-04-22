import { isSymmetric } from '../0101-symmetric-tree.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0101-symmetric-tree', () => {
  it("isSymmetric([3, 9, 20, null, null, 15, 7])", () => {
    const result = isSymmetric(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual(false);
  });

  it("isSymmetric([1])", () => {
    const result = isSymmetric(arrayToTree([1]));
    expect(result).toEqual(true);
  });

  it("isSymmetric([1, 2, 3, 4, 5])", () => {
    const result = isSymmetric(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual(false);
  });

  it("isSymmetric([1, null, 2, 3])", () => {
    const result = isSymmetric(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual(false);
  });

  it("isSymmetric([1, 2])", () => {
    const result = isSymmetric(arrayToTree([1, 2]));
    expect(result).toEqual(false);
  });
});
