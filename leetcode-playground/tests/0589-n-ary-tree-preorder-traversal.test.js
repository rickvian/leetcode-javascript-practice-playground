import { preorder } from '../0589-n-ary-tree-preorder-traversal.js';
import { arrayToNaryNode } from './__helpers__/test_helpers.js';

describe('0589-n-ary-tree-preorder-traversal', () => {
  it("preorder(arrayToNaryNode([1, null, 3, 2, 4, null, 5, 6]))", () => {
    const result = preorder(arrayToNaryNode([1, null, 3, 2, 4, null, 5, 6]));
    expect(result).toEqual([1, 3, 5, 6, 2, 4]);
  });

  it("preorder(arrayToNaryNode([1, null, 3, 2]))", () => {
    const result = preorder(arrayToNaryNode([1, null, 3, 2]));
    expect(result).toEqual([1, 3, 2]);
  });

  it("preorder(arrayToNaryNode([1]))", () => {
    const result = preorder(arrayToNaryNode([1]));
    expect(result).toEqual([1]);
  });

  it("preorder(arrayToNaryNode([]))", () => {
    const result = preorder(arrayToNaryNode([]));
    expect(result).toEqual([]);
  });

  it("preorder(arrayToNaryNode([1, null, 2]))", () => {
    const result = preorder(arrayToNaryNode([1, null, 2]));
    expect(result).toEqual([1, 2]);
  });

  it("preorder(arrayToNaryNode([1, null, 1, 1, 1]))", () => {
    const result = preorder(arrayToNaryNode([1, null, 1, 1, 1]));
    expect(result).toEqual([1, 1, 1, 1]);
  });
});
