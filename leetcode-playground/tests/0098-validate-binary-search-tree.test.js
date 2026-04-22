import { isValidBST } from '../0098-validate-binary-search-tree.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0098-validate-binary-search-tree', () => {
  it("isValidBST([3, 9, 20, null, null, 15, 7])", () => {
    const result = isValidBST(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual(false);
  });

  it("isValidBST([1])", () => {
    const result = isValidBST(arrayToTree([1]));
    expect(result).toEqual(true);
  });

  it("isValidBST([])", () => {
    const result = isValidBST(arrayToTree([]));
    expect(result).toEqual(true);
  });

  it("isValidBST([1, 2, 3, 4, 5])", () => {
    const result = isValidBST(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual(false);
  });

  it("isValidBST([1, null, 2, 3])", () => {
    const result = isValidBST(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual(false);
  });

  it("isValidBST([1, 2])", () => {
    const result = isValidBST(arrayToTree([1, 2]));
    expect(result).toEqual(false);
  });
});
