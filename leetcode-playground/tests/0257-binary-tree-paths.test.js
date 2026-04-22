import { binaryTreePaths } from '../0257-binary-tree-paths.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0257-binary-tree-paths', () => {
  it("binaryTreePaths([3, 9, 20, null, null, 15, 7])", () => {
    const result = binaryTreePaths(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual(["3->9", "3->20->15", "3->20->7"]);
  });

  it("binaryTreePaths([1])", () => {
    const result = binaryTreePaths(arrayToTree([1]));
    expect(result).toEqual(["1"]);
  });

  it("binaryTreePaths([1, 2, 3, 4, 5])", () => {
    const result = binaryTreePaths(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual(["1->2->4", "1->2->5", "1->3"]);
  });

  it("binaryTreePaths([1, null, 2, 3])", () => {
    const result = binaryTreePaths(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual(["1->2->3"]);
  });

  it("binaryTreePaths([1, 2])", () => {
    const result = binaryTreePaths(arrayToTree([1, 2]));
    expect(result).toEqual(["1->2"]);
  });
});
