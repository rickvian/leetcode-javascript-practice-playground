import { closestKValues } from '../0272-closest-binary-search-tree-value-ii.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0272-closest-binary-search-tree-value-ii', () => {
  it("closestKValues([3, 9, 20, null, null, 15, 7], 1...)", () => {
    const result = closestKValues(arrayToTree([3, 9, 20, null, null, 15, 7]), 1, 2);
    expect(result).toEqual([3, 7]);
  });

  it("closestKValues([1], 1...)", () => {
    const result = closestKValues(arrayToTree([1]), 1, 2);
    expect(result).toEqual([1]);
  });

  it("closestKValues([], 1...)", () => {
    const result = closestKValues(arrayToTree([]), 1, 2);
    expect(result).toEqual([]);
  });

  it("closestKValues([1, 2, 3, 4, 5], 1...)", () => {
    const result = closestKValues(arrayToTree([1, 2, 3, 4, 5]), 1, 2);
    expect(result).toEqual([1, 2]);
  });

  it("closestKValues([1, null, 2, 3], 1...)", () => {
    const result = closestKValues(arrayToTree([1, null, 2, 3]), 1, 2);
    expect(result).toEqual([1, 2]);
  });

  it("closestKValues([1, 2], 1...)", () => {
    const result = closestKValues(arrayToTree([1, 2]), 1, 2);
    expect(result).toEqual([1, 2]);
  });
});
