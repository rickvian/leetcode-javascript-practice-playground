import { hasCycle, ListNode } from '../0141-linked-list-cycle';

function buildList(arr, pos) {
    if (!arr || arr.length === 0) return null;
    const nodes = arr.map(val => new ListNode(val));
    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }
    if (pos >= 0) {
        nodes[nodes.length - 1].next = nodes[pos];
    }
    return nodes[0];
}

describe('0141-linked-list-cycle', () => {
    it('should return true for [3,2,0,-4] with tail connecting to index 1', () => {
        const head = buildList([3, 2, 0, -4], 1);
        expect(hasCycle(head)).toBe(true);
    });

    it('should return true for [1,2] with tail connecting to index 0', () => {
        const head = buildList([1, 2], 0);
        expect(hasCycle(head)).toBe(true);
    });

    it('should return false for [1] with no cycle', () => {
        const head = buildList([1], -1);
        expect(hasCycle(head)).toBe(false);
    });

    it('should return false for null', () => {
        expect(hasCycle(null)).toBe(false);
    });

    it('should return false for linear list', () => {
        const head = buildList([1, 2, 3, 4, 5], -1);
        expect(hasCycle(head)).toBe(false);
    });

    it('should return true for self-referencing node', () => {
        const node = new ListNode(1);
        node.next = node;
        expect(hasCycle(node)).toBe(true);
    });
});
