import { maximumAverageSubtree } from '../1120-maximum-average-subtree.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('1120-maximum-average-subtree', () => {
  it("maximumAverageSubtree([3, 9, 20, null, null, 15, 7])", () => {
    const result = maximumAverageSubtree(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual(15);
  });

  it("maximumAverageSubtree([1])", () => {
    const result = maximumAverageSubtree(arrayToTree([1]));
    expect(result).toEqual(1);
  });

  it("maximumAverageSubtree([])", () => {
    const result = maximumAverageSubtree(arrayToTree([]));
    expect(result).toEqual(0);
  });

  it("maximumAverageSubtree([1, 2, 3, 4, 5])", () => {
    const result = maximumAverageSubtree(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual(5);
  });

  it("maximumAverageSubtree([1, null, 2, 3])", () => {
    const result = maximumAverageSubtree(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual(3);
  });

  it("maximumAverageSubtree([1, 2])", () => {
    const result = maximumAverageSubtree(arrayToTree([1, 2]));
    expect(result).toEqual(2);
  });
});
