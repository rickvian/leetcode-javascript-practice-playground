import { subtreeWithAllDeepest } from '../0865-smallest-subtree-with-all-the-deepest-nodes.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0865-smallest-subtree-with-all-the-deepest-nodes', () => {
  it("subtreeWithAllDeepest([3, 9, 20, null, null, 15, 7])", () => {
    const result = subtreeWithAllDeepest(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(treeToArray(result)).toEqual([20, 15, 7]);
  });

  it("subtreeWithAllDeepest([1])", () => {
    const result = subtreeWithAllDeepest(arrayToTree([1]));
    expect(treeToArray(result)).toEqual([1]);
  });

  it("subtreeWithAllDeepest([])", () => {
    const result = subtreeWithAllDeepest(arrayToTree([]));
    expect(treeToArray(result)).toEqual([]);
  });

  it("subtreeWithAllDeepest([1, 2, 3, 4, 5])", () => {
    const result = subtreeWithAllDeepest(arrayToTree([1, 2, 3, 4, 5]));
    expect(treeToArray(result)).toEqual([2, 4, 5]);
  });

  it("subtreeWithAllDeepest([1, null, 2, 3])", () => {
    const result = subtreeWithAllDeepest(arrayToTree([1, null, 2, 3]));
    expect(treeToArray(result)).toEqual([3]);
  });

  it("subtreeWithAllDeepest([1, 2])", () => {
    const result = subtreeWithAllDeepest(arrayToTree([1, 2]));
    expect(treeToArray(result)).toEqual([2]);
  });
});
