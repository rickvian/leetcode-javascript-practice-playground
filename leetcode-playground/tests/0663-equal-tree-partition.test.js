import { checkEqualTree } from '../0663-equal-tree-partition.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0663-equal-tree-partition', () => {
  it("checkEqualTree([3, 9, 20, null, null, 15, 7])", () => {
    const result = checkEqualTree(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual(false);
  });

  it("checkEqualTree([1])", () => {
    const result = checkEqualTree(arrayToTree([1]));
    expect(result).toEqual(false);
  });

  it("checkEqualTree([])", () => {
    const result = checkEqualTree(arrayToTree([]));
    expect(result).toEqual(false);
  });

  it("checkEqualTree([1, 2, 3, 4, 5])", () => {
    const result = checkEqualTree(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual(false);
  });

  it("checkEqualTree([1, null, 2, 3])", () => {
    const result = checkEqualTree(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual(true);
  });

  it("checkEqualTree([1, 2])", () => {
    const result = checkEqualTree(arrayToTree([1, 2]));
    expect(result).toEqual(false);
  });
});
