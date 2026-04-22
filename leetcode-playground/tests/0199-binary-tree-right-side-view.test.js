import { rightSideView } from '../0199-binary-tree-right-side-view.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0199-binary-tree-right-side-view', () => {
  it("rightSideView([3, 9, 20, null, null, 15, 7])", () => {
    const result = rightSideView(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual([3, 20, 7]);
  });

  it("rightSideView([1])", () => {
    const result = rightSideView(arrayToTree([1]));
    expect(result).toEqual([1]);
  });

  it("rightSideView([])", () => {
    const result = rightSideView(arrayToTree([]));
    expect(result).toEqual([]);
  });

  it("rightSideView([1, 2, 3, 4, 5])", () => {
    const result = rightSideView(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual([1, 3, 5]);
  });

  it("rightSideView([1, null, 2, 3])", () => {
    const result = rightSideView(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual([1, 2, 3]);
  });

  it("rightSideView([1, 2])", () => {
    const result = rightSideView(arrayToTree([1, 2]));
    expect(result).toEqual([1, 2]);
  });
});
