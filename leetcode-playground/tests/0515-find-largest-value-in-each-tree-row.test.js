import { largestValues } from '../0515-find-largest-value-in-each-tree-row.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0515-find-largest-value-in-each-tree-row', () => {
  it("largestValues([3, 9, 20, null, null, 15, 7])", () => {
    const result = largestValues(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual([3, 20, 15]);
  });

  it("largestValues([1])", () => {
    const result = largestValues(arrayToTree([1]));
    expect(result).toEqual([1]);
  });

  it("largestValues([])", () => {
    const result = largestValues(arrayToTree([]));
    expect(result).toEqual([]);
  });

  it("largestValues([1, 2, 3, 4, 5])", () => {
    const result = largestValues(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual([1, 3, 5]);
  });

  it("largestValues([1, null, 2, 3])", () => {
    const result = largestValues(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual([1, 2, 3]);
  });

  it("largestValues([1, 2])", () => {
    const result = largestValues(arrayToTree([1, 2]));
    expect(result).toEqual([1, 2]);
  });
});
