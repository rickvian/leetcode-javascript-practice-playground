import { constructFromPrePost } from '../0889-construct-binary-tree-from-preorder-and-postorder-traversal.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0889-construct-binary-tree-from-preorder-and-postorder-traversal', () => {
  it("constructFromPrePost([1, 2, 3], [4, 5, 6])", () => {
    const result = constructFromPrePost([1, 2, 3], [4, 5, 6]);
    expect(treeToArray(result)).toEqual([1, null, 2, null, 3]);
  });

  it("constructFromPrePost([1], [1])", () => {
    const result = constructFromPrePost([1], [1]);
    expect(treeToArray(result)).toEqual([1]);
  });

  it("constructFromPrePost([1, 3], [2])", () => {
    const result = constructFromPrePost([1, 3], [2]);
    expect(treeToArray(result)).toEqual([1, null, 3]);
  });

  it("constructFromPrePost([1, 2], [3, 4])", () => {
    const result = constructFromPrePost([1, 2], [3, 4]);
    expect(treeToArray(result)).toEqual([1, null, 2]);
  });
});
