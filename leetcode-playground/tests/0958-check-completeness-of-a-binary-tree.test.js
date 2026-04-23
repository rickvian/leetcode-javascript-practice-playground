import { isCompleteTree } from '../0958-check-completeness-of-a-binary-tree.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0958-check-completeness-of-a-binary-tree', () => {
  it("isCompleteTree([3, 9, 20, null, null, 15, 7])", () => {
    const result = isCompleteTree(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual(false);
  });

  it("isCompleteTree([1])", () => {
    const result = isCompleteTree(arrayToTree([1]));
    expect(result).toEqual(true);
  });

  it("isCompleteTree([])", () => {
    const result = isCompleteTree(arrayToTree([]));
    expect(result).toEqual(true);
  });

  it("isCompleteTree([1, 2, 3, 4, 5])", () => {
    const result = isCompleteTree(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual(true);
  });

  it("isCompleteTree([1, null, 2, 3])", () => {
    const result = isCompleteTree(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual(false);
  });

  it("isCompleteTree([1, 2])", () => {
    const result = isCompleteTree(arrayToTree([1, 2]));
    expect(result).toEqual(true);
  });
});
