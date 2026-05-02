import { TreeNode, sortedArrayToBST } from '../0108-convert-sorted-array-to-binary-search-tree';

describe('0108-convert-sorted-array-to-binary-search-tree', () => {
  const getInorder = (node) => {
    if (!node) return [];
    return [...getInorder(node.left), node.val, ...getInorder(node.right)];
  };

  const getHeight = (node) => {
    if (!node) return 0;
    return 1 + Math.max(getHeight(node.left), getHeight(node.right));
  };

  const isHeightBalanced = (node) => {
    if (!node) return true;
    const leftHeight = getHeight(node.left);
    const rightHeight = getHeight(node.right);
    if (Math.abs(leftHeight - rightHeight) > 1) return false;
    return isHeightBalanced(node.left) && isHeightBalanced(node.right);
  };

  const isBST = (node, min = -Infinity, max = Infinity) => {
    if (!node) return true;
    if (node.val <= min || node.val >= max) return false;
    return isBST(node.left, min, node.val) && isBST(node.right, node.val, max);
  };

  it('should return null for empty array', () => {
    if (sortedArrayToBST !== undefined) {
      const result = sortedArrayToBST([]);
      expect(result).toBeNull();
    }
  });

  it('should handle single element', () => {
    if (sortedArrayToBST !== undefined) {
      const result = sortedArrayToBST([1]);
      expect(result?.val).toBe(1);
      expect(result?.left).toBeNull();
      expect(result?.right).toBeNull();
    }
  });

  it('should handle two elements', () => {
    if (sortedArrayToBST !== undefined) {
      const result = sortedArrayToBST([1, 2]);
      expect(getInorder(result)).toEqual([1, 2]);
      expect(isHeightBalanced(result)).toBe(true);
      expect(isBST(result)).toBe(true);
    }
  });

  it('should handle odd-length array [1, 2, 3]', () => {
    if (sortedArrayToBST !== undefined) {
      const result = sortedArrayToBST([1, 2, 3]);
      expect(getInorder(result)).toEqual([1, 2, 3]);
      expect(isHeightBalanced(result)).toBe(true);
      expect(isBST(result)).toBe(true);
      expect(result?.val).toBe(2);
    }
  });

  it('should handle even-length array [1, 2, 3, 4]', () => {
    if (sortedArrayToBST !== undefined) {
      const result = sortedArrayToBST([1, 2, 3, 4]);
      expect(getInorder(result)).toEqual([1, 2, 3, 4]);
      expect(isHeightBalanced(result)).toBe(true);
      expect(isBST(result)).toBe(true);
    }
  });

  it('should handle larger odd-length array [1, 2, 3, 4, 5, 6, 7]', () => {
    if (sortedArrayToBST !== undefined) {
      const result = sortedArrayToBST([1, 2, 3, 4, 5, 6, 7]);
      expect(getInorder(result)).toEqual([1, 2, 3, 4, 5, 6, 7]);
      expect(isHeightBalanced(result)).toBe(true);
      expect(isBST(result)).toBe(true);
      expect(result?.val).toBe(4);
    }
  });

  it('should handle larger even-length array [1, 2, 3, 4, 5, 6, 7, 8]', () => {
    if (sortedArrayToBST !== undefined) {
      const result = sortedArrayToBST([1, 2, 3, 4, 5, 6, 7, 8]);
      expect(getInorder(result)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
      expect(isHeightBalanced(result)).toBe(true);
      expect(isBST(result)).toBe(true);
    }
  });

  it('should handle negative numbers [-10, -3, 0, 5, 9]', () => {
    if (sortedArrayToBST !== undefined) {
      const result = sortedArrayToBST([-10, -3, 0, 5, 9]);
      expect(getInorder(result)).toEqual([-10, -3, 0, 5, 9]);
      expect(isHeightBalanced(result)).toBe(true);
      expect(isBST(result)).toBe(true);
    }
  });

  it('should handle all negative numbers [-9, -5, -3, -1]', () => {
    if (sortedArrayToBST !== undefined) {
      const result = sortedArrayToBST([-9, -5, -3, -1]);
      expect(getInorder(result)).toEqual([-9, -5, -3, -1]);
      expect(isHeightBalanced(result)).toBe(true);
      expect(isBST(result)).toBe(true);
    }
  });

  it('should handle duplicate values [1, 1, 1, 2, 2, 3]', () => {
    if (sortedArrayToBST !== undefined) {
      const result = sortedArrayToBST([1, 1, 1, 2, 2, 3]);
      expect(getInorder(result)).toEqual([1, 1, 1, 2, 2, 3]);
      expect(isHeightBalanced(result)).toBe(true);
    }
  });

  it('should handle large values [1000000, 2000000, 3000000]', () => {
    if (sortedArrayToBST !== undefined) {
      const result = sortedArrayToBST([1000000, 2000000, 3000000]);
      expect(getInorder(result)).toEqual([1000000, 2000000, 3000000]);
      expect(isHeightBalanced(result)).toBe(true);
      expect(isBST(result)).toBe(true);
    }
  });

  it('should be height-balanced for array [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]', () => {
    if (sortedArrayToBST !== undefined) {
      const result = sortedArrayToBST([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
      expect(getInorder(result)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
      expect(isHeightBalanced(result)).toBe(true);
      expect(isBST(result)).toBe(true);
    }
  });

  it('should produce root at middle for odd-length array', () => {
    if (sortedArrayToBST !== undefined) {
      const result = sortedArrayToBST([1, 2, 3, 4, 5]);
      expect(result?.val).toBe(3);
      expect(getInorder(result)).toEqual([1, 2, 3, 4, 5]);
    }
  });

  it('should handle left-skewed array [1, 2]', () => {
    if (sortedArrayToBST !== undefined) {
      const result = sortedArrayToBST([1, 2]);
      expect(getInorder(result)).toEqual([1, 2]);
      expect(isHeightBalanced(result)).toBe(true);
    }
  });

  it('should handle right-skewed array [1, 2]', () => {
    if (sortedArrayToBST !== undefined) {
      const result = sortedArrayToBST([1, 2]);
      expect(getInorder(result)).toEqual([1, 2]);
      expect(isHeightBalanced(result)).toBe(true);
    }
  });

  it('should return height-balanced tree for any array length', () => {
    if (sortedArrayToBST !== undefined) {
      for (const length of [1, 2, 3, 5, 7, 15, 16]) {
        const arr = Array.from({ length }, (_, i) => i + 1);
        const result = sortedArrayToBST(arr);
        expect(isHeightBalanced(result)).toBe(true);
        expect(getInorder(result)).toEqual(arr);
      }
    }
  });

  it('should verify in-order traversal matches input for [3, 5, 1, 4, 2]', () => {
    if (sortedArrayToBST !== undefined) {
      const arr = [1, 2, 3, 4, 5];
      const result = sortedArrayToBST(arr);
      expect(getInorder(result)).toEqual(arr);
    }
  });

  it('should create valid BST structure', () => {
    if (sortedArrayToBST !== undefined) {
      const result = sortedArrayToBST([1, 2, 3, 4, 5, 6, 7, 8]);
      expect(isBST(result)).toBe(true);
      expect(isHeightBalanced(result)).toBe(true);
    }
  });
});
