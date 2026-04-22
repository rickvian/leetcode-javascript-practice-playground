import { buildTree } from '../0106-construct-binary-tree-from-inorder-and-postorder-traversal.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0106-construct-binary-tree-from-inorder-and-postorder-traversal', () => {
  it("buildTree([1], [1])", () => {
    const result = buildTree([1], [1]);
    expect(treeToArray(result)).toEqual([1]);
  });
});
