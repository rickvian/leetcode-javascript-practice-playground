import { lcaDeepestLeaves } from '../1123-lowest-common-ancestor-of-deepest-leaves.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('1123-lowest-common-ancestor-of-deepest-leaves', () => {
  it("lcaDeepestLeaves([3, 9, 20, null, null, 15, 7])", () => {
    const result = lcaDeepestLeaves(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(treeToArray(result)).toEqual([20, 15, 7]);
  });

  it("lcaDeepestLeaves([1])", () => {
    const result = lcaDeepestLeaves(arrayToTree([1]));
    expect(treeToArray(result)).toEqual([1]);
  });

  it("lcaDeepestLeaves([])", () => {
    const result = lcaDeepestLeaves(arrayToTree([]));
    expect(treeToArray(result)).toEqual([]);
  });

  it("lcaDeepestLeaves([1, 2, 3, 4, 5])", () => {
    const result = lcaDeepestLeaves(arrayToTree([1, 2, 3, 4, 5]));
    expect(treeToArray(result)).toEqual([2, 4, 5]);
  });

  it("lcaDeepestLeaves([1, null, 2, 3])", () => {
    const result = lcaDeepestLeaves(arrayToTree([1, null, 2, 3]));
    expect(treeToArray(result)).toEqual([3]);
  });

  it("lcaDeepestLeaves([1, 2])", () => {
    const result = lcaDeepestLeaves(arrayToTree([1, 2]));
    expect(treeToArray(result)).toEqual([2]);
  });
});
