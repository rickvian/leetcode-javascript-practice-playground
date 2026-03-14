import { isValidBST, TreeNode } from '../0098-validate-binary-search-tree';

describe('0098-validate-binary-search-tree', () => {
    it('should return true for valid BST [2,1,3]', () => {
        const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));
        expect(isValidBST(root)).toBe(true);
    });

    it('should return false for invalid BST [5,1,4,null,null,3,6]', () => {
        const root = new TreeNode(5,
            new TreeNode(1),
            new TreeNode(4, new TreeNode(3), new TreeNode(6))
        );
        expect(isValidBST(root)).toBe(false);
    });

    it('should return true for single node [1]', () => {
        expect(isValidBST(new TreeNode(1))).toBe(true);
    });

    it('should return true for null root', () => {
        expect(isValidBST(null)).toBe(true);
    });

    it('should return false for [2,2,2] (equal values are not valid in BST)', () => {
        const root = new TreeNode(2, new TreeNode(2), new TreeNode(2));
        expect(isValidBST(root)).toBe(false);
    });

    it('should return false for [5,4,6,null,null,3,7] (3 < 5 but in right subtree)', () => {
        const root = new TreeNode(5,
            new TreeNode(4),
            new TreeNode(6, new TreeNode(3), new TreeNode(7))
        );
        expect(isValidBST(root)).toBe(false);
    });

    it('should return true for single node with minimum integer value [-2147483648]', () => {
        expect(isValidBST(new TreeNode(-2147483648))).toBe(true);
    });

    it('should return true for single node with maximum integer value [2147483647]', () => {
        expect(isValidBST(new TreeNode(2147483647))).toBe(true);
    });

    it('should return true for valid BST with negative values [-1, left=-2, right=0]', () => {
        const root = new TreeNode(-1, new TreeNode(-2), new TreeNode(0));
        expect(isValidBST(root)).toBe(true);
    });
});
