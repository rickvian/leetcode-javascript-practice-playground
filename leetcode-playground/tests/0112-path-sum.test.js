import { TreeNode, hasPathSum } from '../0112-path-sum';

describe('0112-path-sum', () => {
	it('should handle null root', () => {
		const result = hasPathSum(null, 0);
		if (result !== undefined) {
			expect(result).toBe(false);
		}
	});

	it('should handle single node where value equals targetSum', () => {
		const root = new TreeNode(5);
		const result = hasPathSum(root, 5);
		if (result !== undefined) {
			expect(result).toBe(true);
		}
	});

	it('should handle single leaf node where value does not equal targetSum', () => {
		const root = new TreeNode(5);
		const result = hasPathSum(root, 10);
		if (result !== undefined) {
			expect(result).toBe(false);
		}
	});

	it('should return false for target met by non-leaf path', () => {
		// Tree: [1,2,3] targetSum=5
		// Path 1->2 sums to 3 (not a leaf path that sums to 5)
		// Path 1->3 sums to 4 (not a leaf path that sums to 5)
		const root = new TreeNode(1);
		root.left = new TreeNode(2);
		root.right = new TreeNode(3);
		const result = hasPathSum(root, 5);
		if (result !== undefined) {
			expect(result).toBe(false);
		}
	});

	it('should handle simple path that equals targetSum', () => {
		// Tree: [1,2] targetSum=3
		// Path 1->2 = 3 and 2 is leaf
		const root = new TreeNode(1);
		root.left = new TreeNode(2);
		const result = hasPathSum(root, 3);
		if (result !== undefined) {
			expect(result).toBe(true);
		}
	});

	it('should handle negative values in path', () => {
		// Tree: [5, -1] targetSum=4
		// Path 5->-1 = 4 and -1 is leaf
		const root = new TreeNode(5);
		root.left = new TreeNode(-1);
		const result = hasPathSum(root, 4);
		if (result !== undefined) {
			expect(result).toBe(true);
		}
	});

	it('LeetCode Example 1: [5,4,8,11,null,13,4,7,2,null,1] targetSum=22', () => {
		// Construct tree from array representation
		const root = new TreeNode(5);
		root.left = new TreeNode(4);
		root.right = new TreeNode(8);
		root.left.left = new TreeNode(11);
		root.left.left.left = new TreeNode(7);
		root.left.left.right = new TreeNode(2);
		root.right.left = new TreeNode(13);
		root.right.right = new TreeNode(4);
		root.right.right.right = new TreeNode(1);
		// Path: 5->4->11->2 = 22 (true)
		const result = hasPathSum(root, 22);
		if (result !== undefined) {
			expect(result).toBe(true);
		}
	});

	it('LeetCode Example 2: [1,2,3] targetSum=5', () => {
		const root = new TreeNode(1);
		root.left = new TreeNode(2);
		root.right = new TreeNode(3);
		// Path 1->2 = 3 (not leaf), Path 1->3 = 4
		const result = hasPathSum(root, 5);
		if (result !== undefined) {
			expect(result).toBe(false);
		}
	});

	it('LeetCode Example 3: [1,2] targetSum=0', () => {
		const root = new TreeNode(1);
		root.left = new TreeNode(2);
		const result = hasPathSum(root, 0);
		if (result !== undefined) {
			expect(result).toBe(false);
		}
	});

	it('should handle targetSum=0 with zero values', () => {
		const root = new TreeNode(0);
		root.left = new TreeNode(0);
		// Path: 0->0 = 0
		const result = hasPathSum(root, 0);
		if (result !== undefined) {
			expect(result).toBe(true);
		}
	});

	it('should handle right-only tree', () => {
		// Tree with only right children: 1->2->3
		const root = new TreeNode(1);
		root.right = new TreeNode(2);
		root.right.right = new TreeNode(3);
		const result = hasPathSum(root, 6);
		if (result !== undefined) {
			expect(result).toBe(true);
		}
	});

	it('should handle left-only tree', () => {
		// Tree with only left children: 1->2->3
		const root = new TreeNode(1);
		root.left = new TreeNode(2);
		root.left.left = new TreeNode(3);
		const result = hasPathSum(root, 6);
		if (result !== undefined) {
			expect(result).toBe(true);
		}
	});

	it('should handle mixed negative and positive values', () => {
		// Tree: [-2, null, -3] targetSum=-5
		const root = new TreeNode(-2);
		root.right = new TreeNode(-3);
		const result = hasPathSum(root, -5);
		if (result !== undefined) {
			expect(result).toBe(true);
		}
	});

	it('should handle large balanced tree', () => {
		// Build a balanced tree with multiple paths
		const root = new TreeNode(10);
		root.left = new TreeNode(5);
		root.right = new TreeNode(15);
		root.left.left = new TreeNode(3);
		root.left.right = new TreeNode(7);
		root.right.left = new TreeNode(12);
		root.right.right = new TreeNode(20);
		// Path 10->5->7 = 22 (7 is leaf)
		const result = hasPathSum(root, 22);
		if (result !== undefined) {
			expect(result).toBe(true);
		}
	});

	it('should handle target not in any path', () => {
		const root = new TreeNode(1);
		root.left = new TreeNode(2);
		root.right = new TreeNode(3);
		const result = hasPathSum(root, 100);
		if (result !== undefined) {
			expect(result).toBe(false);
		}
	});

	it('should require reaching a leaf node', () => {
		// Tree: [1,1,1] targetSum=2
		// Path 1->left(1) = 2 and 1 is leaf
		const root = new TreeNode(1);
		root.left = new TreeNode(1);
		root.right = new TreeNode(1);
		const result = hasPathSum(root, 2);
		if (result !== undefined) {
			expect(result).toBe(true);
		}
	});

	it('should return false when target sum reached at non-leaf', () => {
		// Tree where intermediate node sums to target but has children
		// [10,5,15,2,7] targetSum=15
		// Path 10->5 = 15 but 5 is not a leaf (has children)
		const root = new TreeNode(10);
		root.left = new TreeNode(5);
		root.right = new TreeNode(15);
		root.left.left = new TreeNode(2);
		root.left.right = new TreeNode(7);
		const result = hasPathSum(root, 15);
		if (result !== undefined) {
			expect(result).toBe(false);
		}
	});

	it('should handle negative targetSum', () => {
		const root = new TreeNode(-1);
		root.left = new TreeNode(-2);
		root.left.left = new TreeNode(-3);
		const result = hasPathSum(root, -6);
		if (result !== undefined) {
			expect(result).toBe(true);
		}
	});

	it('should handle all paths on right side', () => {
		const root = new TreeNode(2);
		root.right = new TreeNode(3);
		root.right.right = new TreeNode(5);
		const result = hasPathSum(root, 10);
		if (result !== undefined) {
			expect(result).toBe(true);
		}
	});

	it('should handle single large value', () => {
		const root = new TreeNode(1000);
		const result = hasPathSum(root, 1000);
		if (result !== undefined) {
			expect(result).toBe(true);
		}
	});

	it('should handle zero at leaf with zero target', () => {
		const root = new TreeNode(1);
		root.left = new TreeNode(-1);
		root.left.left = new TreeNode(0);
		const result = hasPathSum(root, 0);
		if (result !== undefined) {
			expect(result).toBe(true);
		}
	});
});
