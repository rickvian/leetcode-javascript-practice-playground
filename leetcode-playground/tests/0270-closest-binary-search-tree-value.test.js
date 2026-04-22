import { closestValue } from '../0270-closest-binary-search-tree-value.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0270-closest-binary-search-tree-value', () => {
  it("closestValue([3, 9, 20, null, null, 15, 7], 1)", () => {
    const result = closestValue(arrayToTree([3, 9, 20, null, null, 15, 7]), 1);
    expect(result).toEqual(3);
  });

  it("closestValue([1], 1)", () => {
    const result = closestValue(arrayToTree([1]), 1);
    expect(result).toEqual(1);
  });

  it("closestValue([1, 2, 3, 4, 5], 1)", () => {
    const result = closestValue(arrayToTree([1, 2, 3, 4, 5]), 1);
    expect(result).toEqual(1);
  });

  it("closestValue([1, null, 2, 3], 1)", () => {
    const result = closestValue(arrayToTree([1, null, 2, 3]), 1);
    expect(result).toEqual(1);
  });

  it("closestValue([1, 2], 1)", () => {
    const result = closestValue(arrayToTree([1, 2]), 1);
    expect(result).toEqual(1);
  });
});
