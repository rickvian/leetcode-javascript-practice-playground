import { buildTree } from '../0105-construct-binary-tree-from-preorder-and-inorder-traversal.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0105-construct-binary-tree-from-preorder-and-inorder-traversal', () => {
  it("buildTree([1], [1])", () => {
    const result = buildTree([1], [1]);
    expect(treeToArray(result)).toEqual([1]);
  });
});
