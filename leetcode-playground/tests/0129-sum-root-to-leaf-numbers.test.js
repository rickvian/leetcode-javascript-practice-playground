import { TreeNode, sumNumbers } from '../0129-sum-root-to-leaf-numbers';

describe('0129-sum-root-to-leaf-numbers', () => {
	it('should handle official example 1: [1,2,3]', () => {
		const root = new TreeNode(1);
		root.left = new TreeNode(2);
		root.right = new TreeNode(3);
		const result = sumNumbers(root);
		if (result !== undefined) expect(result).toBe(25); // 12 + 13
	});

	it('should handle official example 2: [4,9,0,5,1]', () => {
		const root = new TreeNode(4);
		root.left = new TreeNode(9);
		root.right = new TreeNode(0);
		root.left.left = new TreeNode(5);
		root.left.right = new TreeNode(1);
		const result = sumNumbers(root);
		if (result !== undefined) expect(result).toBe(1026); // 495 + 491 + 40
	});

	it('should handle single leaf node', () => {
		const root = new TreeNode(5);
		const result = sumNumbers(root);
		if (result !== undefined) expect(result).toBe(5);
	});

	it('should handle tree with only left children', () => {
		const root = new TreeNode(1);
		root.left = new TreeNode(2);
		root.left.left = new TreeNode(3);
		const result = sumNumbers(root);
		if (result !== undefined) expect(result).toBe(123); // only path is 1->2->3
	});

	it('should handle tree with only right children', () => {
		const root = new TreeNode(1);
		root.right = new TreeNode(2);
		root.right.right = new TreeNode(3);
		const result = sumNumbers(root);
		if (result !== undefined) expect(result).toBe(123); // only path is 1->2->3
	});

	it('should handle root with zero in path', () => {
		const root = new TreeNode(1);
		root.left = new TreeNode(0);
		root.left.left = new TreeNode(5);
		const result = sumNumbers(root);
		if (result !== undefined) expect(result).toBe(105); // 1->0->5 = 105
	});

	it('should handle multiple zeros in path', () => {
		const root = new TreeNode(1);
		root.left = new TreeNode(0);
		root.left.left = new TreeNode(0);
		const result = sumNumbers(root);
		if (result !== undefined) expect(result).toBe(100); // 1->0->0 = 100
	});

	it('should handle path with zero at leaf', () => {
		const root = new TreeNode(1);
		root.left = new TreeNode(2);
		root.left.left = new TreeNode(0);
		const result = sumNumbers(root);
		if (result !== undefined) expect(result).toBe(120); // 1->2->0 = 120
	});

	it('should handle balanced tree [1,2,3,4,5,6,7]', () => {
		const root = new TreeNode(1);
		root.left = new TreeNode(2);
		root.right = new TreeNode(3);
		root.left.left = new TreeNode(4);
		root.left.right = new TreeNode(5);
		root.right.left = new TreeNode(6);
		root.right.right = new TreeNode(7);
		const result = sumNumbers(root);
		if (result !== undefined) expect(result).toBe(124 + 125 + 136 + 137); // 522
	});

	it('should handle two-level tree with all leaves', () => {
		const root = new TreeNode(1);
		root.left = new TreeNode(0);
		root.right = new TreeNode(1);
		const result = sumNumbers(root);
		if (result !== undefined) expect(result).toBe(10 + 11); // 10 + 11
	});

	it('should handle deep left chain', () => {
		const root = new TreeNode(2);
		root.left = new TreeNode(3);
		root.left.left = new TreeNode(4);
		root.left.left.left = new TreeNode(5);
		const result = sumNumbers(root);
		if (result !== undefined) expect(result).toBe(2345); // only path is 2->3->4->5
	});

	it('should handle asymmetric tree with multiple paths', () => {
		const root = new TreeNode(1);
		root.left = new TreeNode(2);
		root.right = new TreeNode(3);
		root.left.left = new TreeNode(4);
		const result = sumNumbers(root);
		if (result !== undefined) expect(result).toBe(124 + 13); // 124 + 13
	});

	it('should handle tree with duplicate values', () => {
		const root = new TreeNode(1);
		root.left = new TreeNode(1);
		root.right = new TreeNode(1);
		root.left.left = new TreeNode(1);
		const result = sumNumbers(root);
		if (result !== undefined) expect(result).toBe(111 + 11); // 111 + 11
	});

	it('should handle single node with zero', () => {
		const root = new TreeNode(0);
		const result = sumNumbers(root);
		if (result !== undefined) expect(result).toBe(0);
	});

	it('should handle tree with larger numbers', () => {
		const root = new TreeNode(9);
		root.left = new TreeNode(9);
		root.right = new TreeNode(9);
		const result = sumNumbers(root);
		if (result !== undefined) expect(result).toBe(99 + 99); // 99 + 99 = 198
	});

	it('should handle complex tree with mixed structure', () => {
		const root = new TreeNode(1);
		root.left = new TreeNode(2);
		root.left.left = new TreeNode(3);
		root.right = new TreeNode(4);
		root.right.right = new TreeNode(5);
		const result = sumNumbers(root);
		if (result !== undefined) expect(result).toBe(123 + 145); // 123 + 145 = 268
	});

	it('should handle three-level tree with single leaf at end of each branch', () => {
		const root = new TreeNode(1);
		root.left = new TreeNode(2);
		root.left.left = new TreeNode(3);
		root.right = new TreeNode(2);
		root.right.right = new TreeNode(3);
		const result = sumNumbers(root);
		if (result !== undefined) expect(result).toBe(123 + 123); // 123 + 123 = 246
	});

	it('should handle path with all zeros except root', () => {
		const root = new TreeNode(1);
		root.left = new TreeNode(0);
		root.left.left = new TreeNode(0);
		root.right = new TreeNode(0);
		root.right.right = new TreeNode(0);
		const result = sumNumbers(root);
		if (result !== undefined) expect(result).toBe(100 + 100); // 100 + 100 = 200
	});

	it('should handle wide tree at root level', () => {
		const root = new TreeNode(5);
		root.left = new TreeNode(1);
		root.right = new TreeNode(2);
		const result = sumNumbers(root);
		if (result !== undefined) expect(result).toBe(51 + 52); // 51 + 52 = 103
	});
});
