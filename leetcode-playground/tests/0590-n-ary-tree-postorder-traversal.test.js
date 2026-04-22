import { postorder } from '../0590-n-ary-tree-postorder-traversal.js';
import { arrayToNaryNode } from './__helpers__/test_helpers.js';

describe('0590-n-ary-tree-postorder-traversal', () => {
  it("postorder(arrayToNaryNode([1, null, 3, 2, 4, null, 5, 6]))", () => {
    const result = postorder(arrayToNaryNode([1, null, 3, 2, 4, null, 5, 6]));
    expect(result).toEqual([5, 6, 3, 2, 4, 1]);
  });

  it("postorder(arrayToNaryNode([1, null, 3, 2]))", () => {
    const result = postorder(arrayToNaryNode([1, null, 3, 2]));
    expect(result).toEqual([3, 2, 1]);
  });

  it("postorder(arrayToNaryNode([1]))", () => {
    const result = postorder(arrayToNaryNode([1]));
    expect(result).toEqual([1]);
  });

  it("postorder(arrayToNaryNode([]))", () => {
    const result = postorder(arrayToNaryNode([]));
    expect(result).toEqual([]);
  });

  it("postorder(arrayToNaryNode([1, null, 2]))", () => {
    const result = postorder(arrayToNaryNode([1, null, 2]));
    expect(result).toEqual([2, 1]);
  });

  it("postorder(arrayToNaryNode([1, null, 1, 1, 1]))", () => {
    const result = postorder(arrayToNaryNode([1, null, 1, 1, 1]));
    expect(result).toEqual([1, 1, 1, 1]);
  });
});
