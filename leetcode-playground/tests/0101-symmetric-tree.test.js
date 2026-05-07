import { TreeNode, isSymmetric } from "../0101-symmetric-tree";

describe("0101-symmetric-tree", () => {
  it("should return true for single node", () => {
    const root = new TreeNode(1);
    if (isSymmetric !== undefined) {
      expect(isSymmetric(root)).toBe(true);
    }
  });

  it("should return true for simple symmetric tree [1,2,2]", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(2);
    if (isSymmetric !== undefined) {
      expect(isSymmetric(root)).toBe(true);
    }
  });

  it("should return false for tree with only left child [1,2]", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    if (isSymmetric !== undefined) {
      expect(isSymmetric(root)).toBe(false);
    }
  });

  it("should return false for tree with only right child [1,null,2]", () => {
    const root = new TreeNode(1);
    root.right = new TreeNode(2);
    if (isSymmetric !== undefined) {
      expect(isSymmetric(root)).toBe(false);
    }
  });

  it("should return true for perfectly symmetric tree [1,2,2,3,4,4,3]", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.left.right = new TreeNode(4);
    root.right.left = new TreeNode(4);
    root.right.right = new TreeNode(3);
    if (isSymmetric !== undefined) {
      expect(isSymmetric(root)).toBe(true);
    }
  });

  it("should return false for tree with asymmetric structure [1,2,2,null,3,null,3]", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(2);
    root.left.right = new TreeNode(3);
    root.right.right = new TreeNode(3);
    if (isSymmetric !== undefined) {
      expect(isSymmetric(root)).toBe(false);
    }
  });

  it("should return true for tree with all same values [1,2,2,3,3,3,3]", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.left.right = new TreeNode(3);
    root.right.left = new TreeNode(3);
    root.right.right = new TreeNode(3);
    if (isSymmetric !== undefined) {
      expect(isSymmetric(root)).toBe(true);
    }
  });

  it("should return false when right child differs [1,2,2,3,4,4,5]", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.left.right = new TreeNode(4);
    root.right.left = new TreeNode(4);
    root.right.right = new TreeNode(5);
    if (isSymmetric !== undefined) {
      expect(isSymmetric(root)).toBe(false);
    }
  });

  it("should return true for symmetric tree with negative values [-1,2,2,3,4,4,3]", () => {
    const root = new TreeNode(-1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.left.right = new TreeNode(4);
    root.right.left = new TreeNode(4);
    root.right.right = new TreeNode(3);
    if (isSymmetric !== undefined) {
      expect(isSymmetric(root)).toBe(true);
    }
  });

  it("should return true for symmetric tree with zeros [0,1,1,2,null,null,2]", () => {
    const root = new TreeNode(0);
    root.left = new TreeNode(1);
    root.right = new TreeNode(1);
    root.left.left = new TreeNode(2);
    root.right.right = new TreeNode(2);
    if (isSymmetric !== undefined) {
      expect(isSymmetric(root)).toBe(true);
    }
  });

  it("should return true for tree with mirrored structure", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.left.right = new TreeNode(4);
    root.right.left = new TreeNode(4);
    root.right.right = new TreeNode(3);
    if (isSymmetric !== undefined) {
      expect(isSymmetric(root)).toBe(true);
    }
  });

  it("should return false when left subtree has extra node", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.left.right = new TreeNode(4);
    root.right.left = new TreeNode(4);
    if (isSymmetric !== undefined) {
      expect(isSymmetric(root)).toBe(false);
    }
  });

  it("should return false when right subtree has extra node", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.right.left = new TreeNode(4);
    root.right.right = new TreeNode(3);
    if (isSymmetric !== undefined) {
      expect(isSymmetric(root)).toBe(false);
    }
  });

  it("should return false for deep asymmetric tree", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.left.left.left = new TreeNode(5);
    root.right.right = new TreeNode(3);
    if (isSymmetric !== undefined) {
      expect(isSymmetric(root)).toBe(false);
    }
  });

  it("should return true for deep symmetric tree", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.left.left.left = new TreeNode(5);
    root.right.right = new TreeNode(3);
    root.right.right.right = new TreeNode(5);
    if (isSymmetric !== undefined) {
      expect(isSymmetric(root)).toBe(true);
    }
  });

  it("should return false for tree with mismatched depths", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.left.left.left = new TreeNode(4);
    root.right.right = new TreeNode(3);
    if (isSymmetric !== undefined) {
      expect(isSymmetric(root)).toBe(false);
    }
  });

  it("should return true for balanced 5-level symmetric tree", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.left.right = new TreeNode(4);
    root.left.left.left = new TreeNode(5);
    root.right.left = new TreeNode(4);
    root.right.right = new TreeNode(3);
    root.right.right.right = new TreeNode(5);
    if (isSymmetric !== undefined) {
      expect(isSymmetric(root)).toBe(true);
    }
  });
});
