import { TreeNode, isSubtree } from '../0572-subtree-of-another-tree';

function buildTree(arr) {
    if (!arr || arr.length === 0) return null;
    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;
    while (i < arr.length) {
        const node = queue.shift();
        if (arr[i] !== null && arr[i] !== undefined) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        i++;
        if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
            node.right = new TreeNode(arr[i]);
            queue.push(node.right);
        }
        i++;
    }
    return root;
}

describe('0572-subtree-of-another-tree', () => {
    // LeetCode example 1: root=[3,4,5,1,2], subRoot=[4,1,2] => true
    it('should return true when subRoot is a subtree', () => {
        const root = buildTree([3,4,5,1,2]);
        const subRoot = buildTree([4,1,2]);
        const result = isSubtree(root, subRoot);
        if (result !== undefined) expect(result).toBe(true);
    });

    // LeetCode example 2: root=[3,4,5,1,2,null,null,null,null,0], subRoot=[4,1,2] => false
    it('should return false when subRoot structure does not match', () => {
        const root = buildTree([3,4,5,1,2,null,null,null,null,0]);
        const subRoot = buildTree([4,1,2]);
        const result = isSubtree(root, subRoot);
        if (result !== undefined) expect(result).toBe(false);
    });

    // Same tree is subtree of itself
    it('should return true when root and subRoot are identical', () => {
        const root = buildTree([1,2,3]);
        const subRoot = buildTree([1,2,3]);
        const result = isSubtree(root, subRoot);
        if (result !== undefined) expect(result).toBe(true);
    });

    // Single node subtree found
    it('should return true for single node subRoot that exists in root', () => {
        const root = buildTree([1,2,3]);
        const subRoot = buildTree([2]);
        const result = isSubtree(root, subRoot);
        if (result !== undefined) expect(result).toBe(true);
    });

    // Single node subtree not found
    it('should return false for single node subRoot not in root', () => {
        const root = buildTree([1,2,3]);
        const subRoot = buildTree([4]);
        const result = isSubtree(root, subRoot);
        if (result !== undefined) expect(result).toBe(false);
    });

    // SubRoot larger than root
    it('should return false when subRoot is larger than root', () => {
        const root = buildTree([1]);
        const subRoot = buildTree([1,2,3]);
        const result = isSubtree(root, subRoot);
        if (result !== undefined) expect(result).toBe(false);
    });

    // Subtree at right side
    it('should find subtree on right side of tree', () => {
        const root = buildTree([1,null,2,null,3]);
        const subRoot = buildTree([2,null,3]);
        const result = isSubtree(root, subRoot);
        if (result !== undefined) expect(result).toBe(true);
    });

    // Partial match but not complete subtree (extra child)
    it('should return false when node value matches but subtree has extra child', () => {
        const root = buildTree([3,4,5,1,null]);
        const subRoot = buildTree([4,1,2]);
        const result = isSubtree(root, subRoot);
        if (result !== undefined) expect(result).toBe(false);
    });
});
