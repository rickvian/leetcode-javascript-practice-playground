import { construct, Node } from '../0427-construct-quad-tree.js';

// Helper to compare quad tree structures
function areEqual(node1, node2) {
    if (node1 === null && node2 === null) return true;
    if (node1 === null || node2 === null) return false;
    if (node1.val !== node2.val || node1.isLeaf !== node2.isLeaf) return false;
    return (
        areEqual(node1.topLeft, node2.topLeft) &&
        areEqual(node1.topRight, node2.topRight) &&
        areEqual(node1.bottomLeft, node2.bottomLeft) &&
        areEqual(node1.bottomRight, node2.bottomRight)
    );
}

describe('0427-construct-quad-tree', () => {
    it('should handle 1x1 grid with value 1', () => {
        const grid = [[1]];
        const result = construct(grid);
        const expected = new Node(true, true);
        expect(areEqual(result, expected)).toBe(true);
    });

    it('should handle 1x1 grid with value 0', () => {
        const grid = [[0]];
        const result = construct(grid);
        const expected = new Node(false, true);
        expect(areEqual(result, expected)).toBe(true);
    });

    it('should handle 2x2 all-ones grid (single leaf node)', () => {
        const grid = [[1, 1], [1, 1]];
        const result = construct(grid);
        const expected = new Node(true, true);
        expect(areEqual(result, expected)).toBe(true);
    });

    it('should handle 2x2 all-zeros grid (single leaf node)', () => {
        const grid = [[0, 0], [0, 0]];
        const result = construct(grid);
        const expected = new Node(false, true);
        expect(areEqual(result, expected)).toBe(true);
    });

    it('should handle 2x2 mixed grid (requires subdivision)', () => {
        const grid = [[1, 1], [0, 0]];
        const result = construct(grid);
        // This requires subdivision; top-left and bottom-right are all same, mixed
        expect(result.isLeaf).toBe(false);
        expect(areEqual(result.topLeft, new Node(true, true))).toBe(true);
        expect(areEqual(result.bottomRight, new Node(false, true))).toBe(true);
    });

    it('LeetCode example 1: should construct tree for 2x2 all-ones', () => {
        const grid = [[1, 1], [1, 1]];
        const result = construct(grid);
        const expected = new Node(true, true);
        expect(areEqual(result, expected)).toBe(true);
    });

    it('LeetCode example 2: should construct tree for 2x2 mixed pattern', () => {
        const grid = [[1, 0], [0, 1]];
        const result = construct(grid);
        // Root is not a leaf, has 4 children, each is a leaf with value 0/1
        expect(result.isLeaf).toBe(false);
        expect(result.topLeft.val).toBe(true);
        expect(result.topLeft.isLeaf).toBe(true);
        expect(result.topRight.val).toBe(false);
        expect(result.bottomLeft.val).toBe(false);
        expect(result.bottomRight.val).toBe(true);
    });

    it('should handle 4x4 all-ones grid (single leaf node)', () => {
        const grid = [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]];
        const result = construct(grid);
        const expected = new Node(true, true);
        expect(areEqual(result, expected)).toBe(true);
    });

    it('should handle 4x4 all-zeros grid (single leaf node)', () => {
        const grid = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
        const result = construct(grid);
        const expected = new Node(false, true);
        expect(areEqual(result, expected)).toBe(true);
    });

    it('should handle 4x4 grid with top-left all ones, rest zeros', () => {
        const grid = [[1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
        const result = construct(grid);
        // Requires subdivision
        expect(result.isLeaf).toBe(false);
        expect(result.topLeft.val).toBe(true);
        expect(result.topLeft.isLeaf).toBe(true);
        expect(result.bottomRight.val).toBe(false);
        expect(result.bottomRight.isLeaf).toBe(true);
    });

    it('should handle 4x4 checkerboard pattern (requires full subdivision)', () => {
        const grid = [[1, 0, 1, 0], [0, 1, 0, 1], [1, 0, 1, 0], [0, 1, 0, 1]];
        const result = construct(grid);
        // All regions are mixed, requires deep recursion
        expect(result.isLeaf).toBe(false);
        expect(result.topLeft).not.toBeNull();
    });

    it('should handle 4x4 mostly ones with one corner zero', () => {
        const grid = [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 0]];
        const result = construct(grid);
        // Requires subdivision due to single 0 in bottom-right quadrant
        expect(result.isLeaf).toBe(false);
        expect(result.topLeft.val).toBe(true);
        expect(result.topLeft.isLeaf).toBe(true);
    });

    it('should handle 4x4 grid with two quadrants different', () => {
        const grid = [[1, 1, 0, 0], [1, 1, 0, 0], [1, 1, 0, 0], [1, 1, 0, 0]];
        const result = construct(grid);
        // Left half all ones, right half all zeros
        expect(result.isLeaf).toBe(false);
        expect(result.topLeft.val).toBe(true);
        expect(result.topRight.val).toBe(false);
    });

    it('should handle 4x4 top half ones, bottom half zeros', () => {
        const grid = [[1, 1, 1, 1], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]];
        const result = construct(grid);
        expect(result.isLeaf).toBe(false);
        expect(result.topLeft.val).toBe(true);
        expect(result.bottomLeft.val).toBe(false);
    });

    it('should handle 4x4 grid with complex mixed pattern', () => {
        const grid = [[1, 1, 1, 1], [0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0]];
        const result = construct(grid);
        // Alternating rows require multiple subdivisions
        expect(result.isLeaf).toBe(false);
        expect(result.topLeft).not.toBeNull();
        expect(result.bottomLeft).not.toBeNull();
    });
});
