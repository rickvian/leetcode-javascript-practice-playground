import { isBalanced } from '../0110-balanced-binary-tree.js';
import { buildTree } from './helpers/tree.js';
import { describe, it, expect } from '@jest/globals';

describe('0110-balanced-binary-tree', () => {
    it('should return true for a balanced tree', () => {
        const tree = buildTree([3, 9, 20, null, null, 15, 7]);
        expect(isBalanced(tree)).toBe(true);
    });

    it('should return false for an unbalanced tree', () => {
        const tree = buildTree([1, 2, 2, 3, 3, null, null, 4, 4]);
        expect(isBalanced(tree)).toBe(false);
    });

    it('should return true for a single node', () => {
        const tree = buildTree([1]);
        expect(isBalanced(tree)).toBe(true);
    });

    it('should return true for an empty tree', () => {
        expect(isBalanced(null)).toBe(true);
    });

    it('should return true for a two-node balanced tree', () => {
        const tree = buildTree([1, 2]);
        expect(isBalanced(tree)).toBe(true);
    });

    it('should return false for a right-skewed unbalanced tree', () => {
        const tree = buildTree([1, null, 2, null, 3, null, 4]);
        expect(isBalanced(tree)).toBe(false);
    });

    it('should return false for a left-skewed unbalanced tree', () => {
        const tree = buildTree([1, 2, null, 3, null, 4]);
        expect(isBalanced(tree)).toBe(false);
    });

    it('should handle a perfectly balanced complete binary tree', () => {
        const tree = buildTree([1, 2, 3, 4, 5, 6, 7]);
        expect(isBalanced(tree)).toBe(true);
    });

    it('should return true for a large balanced tree', () => {
        const tree = buildTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
        expect(isBalanced(tree)).toBe(true);
    });

    it('should return false when right subtree is deeper than left', () => {
        const tree = buildTree([1, 2, 3, null, null, 4, 5, null, null, 6, 7, null, null, 8]);
        expect(isBalanced(tree)).toBe(false);
    });
});
