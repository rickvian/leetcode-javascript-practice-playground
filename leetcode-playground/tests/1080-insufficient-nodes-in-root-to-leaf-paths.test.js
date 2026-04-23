import { sufficientSubset } from '../1080-insufficient-nodes-in-root-to-leaf-paths.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('1080-insufficient-nodes-in-root-to-leaf-paths', () => {
  it("sufficientSubset([3, 9, 20, null, null, 15, 7], 1)", () => {
    const result = sufficientSubset(arrayToTree([3, 9, 20, null, null, 15, 7]), 1);
    expect(treeToArray(result)).toEqual([3, 9, 20, null, null, 15, 7]);
  });

  it("sufficientSubset([1], 1)", () => {
    const result = sufficientSubset(arrayToTree([1]), 1);
    expect(treeToArray(result)).toEqual([1]);
  });

  it("sufficientSubset([], 1)", () => {
    const result = sufficientSubset(arrayToTree([]), 1);
    expect(treeToArray(result)).toEqual([]);
  });

  it("sufficientSubset([1, 2, 3, 4, 5], 1)", () => {
    const result = sufficientSubset(arrayToTree([1, 2, 3, 4, 5]), 1);
    expect(treeToArray(result)).toEqual([1, 2, 3, 4, 5]);
  });

  it("sufficientSubset([1, null, 2, 3], 1)", () => {
    const result = sufficientSubset(arrayToTree([1, null, 2, 3]), 1);
    expect(treeToArray(result)).toEqual([1, null, 2, 3]);
  });

  it("sufficientSubset([1, 2], 1)", () => {
    const result = sufficientSubset(arrayToTree([1, 2]), 1);
    expect(treeToArray(result)).toEqual([1, 2]);
  });
});
