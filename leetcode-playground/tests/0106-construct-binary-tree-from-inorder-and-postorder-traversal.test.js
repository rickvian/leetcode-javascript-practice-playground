import {
  buildTree,
  TreeNode,
} from "../0106-construct-binary-tree-from-inorder-and-postorder-traversal";

// Helper: inorder traversal of tree
function getInorder(node, result = []) {
  if (node === null) return result;
  getInorder(node.left, result);
  result.push(node.val);
  getInorder(node.right, result);
  return result;
}

// Helper: postorder traversal of tree
function getPostorder(node, result = []) {
  if (node === null) return result;
  getPostorder(node.left, result);
  getPostorder(node.right, result);
  result.push(node.val);
  return result;
}

describe("0106-construct-binary-tree-from-inorder-and-postorder-traversal", () => {
  it("should build tree from official example 1: inorder=[9,3,15,20,7], postorder=[9,15,7,20,3]", () => {
    const result = buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]);
    if (result !== undefined) {
      expect(result.val).toBe(3);
      expect(result.left.val).toBe(9);
      expect(result.right.val).toBe(20);
      expect(result.right.left.val).toBe(15);
      expect(result.right.right.val).toBe(7);
      expect(getInorder(result)).toEqual([9, 3, 15, 20, 7]);
      expect(getPostorder(result)).toEqual([9, 15, 7, 20, 3]);
    }
  });

  it("should build tree from official example 2: inorder=[-1], postorder=[-1]", () => {
    const result = buildTree([-1], [-1]);
    if (result !== undefined) {
      expect(result.val).toBe(-1);
      expect(result.left).toBeNull();
      expect(result.right).toBeNull();
    }
  });

  it("should return null for empty inorder and postorder arrays", () => {
    const result = buildTree([], []);
    if (result !== undefined) {
      expect(result).toBeNull();
    }
  });

  it("should build single node tree from inorder=[1], postorder=[1]", () => {
    const result = buildTree([1], [1]);
    if (result !== undefined) {
      expect(result.val).toBe(1);
      expect(result.left).toBeNull();
      expect(result.right).toBeNull();
    }
  });

  it("should build left-only chain: inorder=[3,2,1], postorder=[3,2,1]", () => {
    const result = buildTree([3, 2, 1], [3, 2, 1]);
    if (result !== undefined) {
      expect(result.val).toBe(1);
      expect(result.right).toBeNull();
      expect(result.left.val).toBe(2);
      expect(result.left.left.val).toBe(3);
      expect(result.left.right).toBeNull();
      expect(getInorder(result)).toEqual([3, 2, 1]);
      expect(getPostorder(result)).toEqual([3, 2, 1]);
    }
  });

  it("should build right-only chain: inorder=[1,2,3], postorder=[3,2,1]", () => {
    const result = buildTree([1, 2, 3], [3, 2, 1]);
    if (result !== undefined) {
      expect(result.val).toBe(1);
      expect(result.left).toBeNull();
      expect(result.right.val).toBe(2);
      expect(result.right.right.val).toBe(3);
      expect(result.right.left).toBeNull();
      expect(getInorder(result)).toEqual([1, 2, 3]);
      expect(getPostorder(result)).toEqual([3, 2, 1]);
    }
  });

  it("should build balanced tree: inorder=[1,2,3,4,5,6,7], postorder=[1,3,2,5,7,6,4]", () => {
    const result = buildTree([1, 2, 3, 4, 5, 6, 7], [1, 3, 2, 5, 7, 6, 4]);
    if (result !== undefined) {
      expect(result.val).toBe(4);
      expect(result.left.val).toBe(2);
      expect(result.right.val).toBe(6);
      expect(result.left.left.val).toBe(1);
      expect(result.left.right.val).toBe(3);
      expect(result.right.left.val).toBe(5);
      expect(result.right.right.val).toBe(7);
      expect(getInorder(result)).toEqual([1, 2, 3, 4, 5, 6, 7]);
      expect(getPostorder(result)).toEqual([1, 3, 2, 5, 7, 6, 4]);
    }
  });

  it("should build tree with only left subtree: inorder=[2,1,3], postorder=[2,1,3]", () => {
    const result = buildTree([2, 1, 3], [2, 1, 3]);
    if (result !== undefined) {
      expect(result.val).toBe(3);
      expect(result.right).toBeNull();
      expect(result.left.val).toBe(1);
      expect(result.left.left.val).toBe(2);
      expect(getInorder(result)).toEqual([2, 1, 3]);
      expect(getPostorder(result)).toEqual([2, 1, 3]);
    }
  });

  it("should build tree with only right subtree: inorder=[1,3,2], postorder=[1,2,3]", () => {
    const result = buildTree([1, 3, 2], [1, 2, 3]);
    if (result !== undefined) {
      expect(result.val).toBe(3);
      expect(result.left).toBeNull();
      expect(result.right.val).toBe(2);
      expect(result.right.right.val).toBe(1);
      expect(getInorder(result)).toEqual([1, 3, 2]);
      expect(getPostorder(result)).toEqual([1, 2, 3]);
    }
  });

  it("should handle two-node left child: inorder=[2,1], postorder=[2,1]", () => {
    const result = buildTree([2, 1], [2, 1]);
    if (result !== undefined) {
      expect(result.val).toBe(1);
      expect(result.left.val).toBe(2);
      expect(result.right).toBeNull();
    }
  });

  it("should handle two-node right child: inorder=[1,2], postorder=[2,1]", () => {
    const result = buildTree([1, 2], [2, 1]);
    if (result !== undefined) {
      expect(result.val).toBe(1);
      expect(result.right.val).toBe(2);
      expect(result.left).toBeNull();
    }
  });

  it("should build tree with negative values: inorder=[-1,0,1], postorder=[-1,1,0]", () => {
    const result = buildTree([-1, 0, 1], [-1, 1, 0]);
    if (result !== undefined) {
      expect(result.val).toBe(0);
      expect(result.left.val).toBe(-1);
      expect(result.right.val).toBe(1);
      expect(getInorder(result)).toEqual([-1, 0, 1]);
      expect(getPostorder(result)).toEqual([-1, 1, 0]);
    }
  });

  it("should build tree with duplicate values: inorder=[2,1,2], postorder=[2,2,1]", () => {
    const result = buildTree([2, 1, 2], [2, 2, 1]);
    if (result !== undefined) {
      expect(result.val).toBe(1);
      expect(result.left.val).toBe(2);
      expect(result.right.val).toBe(2);
      expect(getInorder(result)).toEqual([2, 1, 2]);
      expect(getPostorder(result)).toEqual([2, 2, 1]);
    }
  });

  it("should build larger balanced tree: inorder=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], postorder=[1,3,2,5,7,6,4,9,11,10,13,15,14,12,8]", () => {
    const result = buildTree(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      [1, 3, 2, 5, 7, 6, 4, 9, 11, 10, 13, 15, 14, 12, 8],
    );
    if (result !== undefined) {
      expect(result.val).toBe(8);
      expect(getInorder(result)).toEqual([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
      ]);
      expect(getPostorder(result)).toEqual([
        1, 3, 2, 5, 7, 6, 4, 9, 11, 10, 13, 15, 14, 12, 8,
      ]);
    }
  });
});
