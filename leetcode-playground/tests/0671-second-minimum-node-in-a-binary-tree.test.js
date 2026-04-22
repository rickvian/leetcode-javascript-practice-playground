import { findSecondMinimumValue } from '../0671-second-minimum-node-in-a-binary-tree.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0671-second-minimum-node-in-a-binary-tree', () => {
  it("findSecondMinimumValue([3, 9, 20, null, null, 15, 7])", () => {
    const result = findSecondMinimumValue(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual(9);
  });

  it("findSecondMinimumValue([1])", () => {
    const result = findSecondMinimumValue(arrayToTree([1]));
    expect(result).toEqual(-1);
  });

  it("findSecondMinimumValue([])", () => {
    const result = findSecondMinimumValue(arrayToTree([]));
    expect(result).toEqual(-1);
  });

  it("findSecondMinimumValue([1, 2, 3, 4, 5])", () => {
    const result = findSecondMinimumValue(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual(2);
  });

  it("findSecondMinimumValue([1, null, 2, 3])", () => {
    const result = findSecondMinimumValue(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual(2);
  });

  it("findSecondMinimumValue([1, 2])", () => {
    const result = findSecondMinimumValue(arrayToTree([1, 2]));
    expect(result).toEqual(2);
  });
});
