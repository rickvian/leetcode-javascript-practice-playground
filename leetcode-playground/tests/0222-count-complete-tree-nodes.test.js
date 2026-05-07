import { TreeNode, countNodes } from "../0222-count-complete-tree-nodes";

describe("0222-count-complete-tree-nodes", () => {
  it("should return 0 for empty tree", () => {
    expect(countNodes(null)).toEqual(0);
  });

  it("should return 1 for single node", () => {
    const root = new TreeNode(1);
    expect(countNodes(root)).toEqual(1);
  });

  it("should handle LeetCode example 1 - complete tree with 6 nodes", () => {
    // Tree: [1,2,3,4,5,6]
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4), new TreeNode(5)),
      new TreeNode(3, new TreeNode(6), null),
    );
    expect(countNodes(root)).toEqual(6);
  });

  it("should handle complete last level fully filled", () => {
    // Perfect binary tree with 7 nodes
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4), new TreeNode(5)),
      new TreeNode(3, new TreeNode(6), new TreeNode(7)),
    );
    expect(countNodes(root)).toEqual(7);
  });

  it("should handle complete last level partially filled", () => {
    // [1,2,3,4,5] - last level has 2 of possible 4 nodes
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4), new TreeNode(5)),
      new TreeNode(3),
    );
    expect(countNodes(root)).toEqual(5);
  });

  it("should handle large balanced tree", () => {
    // Perfect tree with 15 nodes (4 levels)
    const root = new TreeNode(
      1,
      new TreeNode(
        2,
        new TreeNode(4, new TreeNode(8), new TreeNode(9)),
        new TreeNode(5, new TreeNode(10), new TreeNode(11)),
      ),
      new TreeNode(
        3,
        new TreeNode(6, new TreeNode(12), new TreeNode(13)),
        new TreeNode(7, new TreeNode(14), new TreeNode(15)),
      ),
    );
    expect(countNodes(root)).toEqual(15);
  });
});
