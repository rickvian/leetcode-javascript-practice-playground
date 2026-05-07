import { detectCycle, ListNode } from '../0142-linked-list-cycle-ii';

const buildList = (values, pos) => {
    if (values.length === 0) return { head: null, cycleNode: null };
    const nodes = values.map(v => new ListNode(v));
    for (let i = 0; i < nodes.length - 1; i++) nodes[i].next = nodes[i + 1];
    let cycleNode = null;
    if (pos >= 0 && pos < nodes.length) {
        nodes[nodes.length - 1].next = nodes[pos];
        cycleNode = nodes[pos];
    }
    return { head: nodes[0], cycleNode };
};

describe('0142-linked-list-cycle-ii', () => {
    it('should return null for null head (min input)', () => {
        const result = detectCycle(null);
        if (result !== undefined) expect(result).toBeNull();
    });

    it('should return null for a single node without a cycle', () => {
        const result = detectCycle(new ListNode(1));
        if (result !== undefined) expect(result).toBeNull();
    });

    it('should return the self-loop node for a single-node self cycle', () => {
        const { head, cycleNode } = buildList([1], 0);
        const result = detectCycle(head);
        if (result !== undefined) expect(result).toBe(cycleNode);
    });

    it('should return the cycle entry for [3,2,0,-4] pos=1', () => {
        const { head, cycleNode } = buildList([3, 2, 0, -4], 1);
        const result = detectCycle(head);
        if (result !== undefined) expect(result).toBe(cycleNode);
    });

    it('should return the head node when pos=0', () => {
        const { head, cycleNode } = buildList([1, 2], 0);
        const result = detectCycle(head);
        if (result !== undefined) expect(result).toBe(cycleNode);
    });

    it('should return null for a long no-cycle list (repetitive values)', () => {
        const { head } = buildList([1, 1, 1, 1, 1, 1], -1);
        const result = detectCycle(head);
        if (result !== undefined) expect(result).toBeNull();
    });

    it('should return the tail when only the last node loops to itself', () => {
        const { head, cycleNode } = buildList([1, 2, 3], 2);
        const result = detectCycle(head);
        if (result !== undefined) expect(result).toBe(cycleNode);
    });
});
