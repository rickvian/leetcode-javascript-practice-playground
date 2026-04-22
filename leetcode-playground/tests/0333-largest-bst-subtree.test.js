import { largestBSTSubtree } from '../0333-largest-bst-subtree.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0333-largest-bst-subtree', () => {
  it("largestBSTSubtree([3, 9, 20, null, null, 15, 7])", () => {
    const result = largestBSTSubtree(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual(1);
  });

  it("largestBSTSubtree([1])", () => {
    const result = largestBSTSubtree(arrayToTree([1]));
    expect(result).toEqual(1);
  });

  it("largestBSTSubtree([])", () => {
    const result = largestBSTSubtree(arrayToTree([]));
    expect(result).toEqual(0);
  });

  it("largestBSTSubtree([1, 2, 3, 4, 5])", () => {
    const result = largestBSTSubtree(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual(1);
  });

  it("largestBSTSubtree([1, null, 2, 3])", () => {
    const result = largestBSTSubtree(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual(1);
  });

  it("largestBSTSubtree([1, 2])", () => {
    const result = largestBSTSubtree(arrayToTree([1, 2]));
    expect(result).toEqual(1);
  });
});
