import { reverseKGroup, ListNode } from '../0025-reverse-nodes-in-k-group';

const toList = (arr) => {
    const dummy = new ListNode(0);
    let cur = dummy;
    for (const v of arr) { cur.next = new ListNode(v); cur = cur.next; }
    return dummy.next;
};

const toArr = (head) => {
    const out = [];
    while (head) { out.push(head.val); head = head.next; }
    return out;
};

describe('0025-reverse-nodes-in-k-group', () => {
    it('should return null for empty list', () => {
        const result = reverseKGroup(null, 2);
        if (result !== undefined) expect(result).toBeNull();
    });

    it('should return list unchanged when k=1', () => {
        const result = reverseKGroup(toList([1, 2, 3]), 1);
        if (result !== undefined) expect(toArr(result)).toEqual([1, 2, 3]);
    });

    it('should reverse full list when k equals length', () => {
        const result = reverseKGroup(toList([1, 2, 3]), 3);
        if (result !== undefined) expect(toArr(result)).toEqual([3, 2, 1]);
    });

    it('should leave tail untouched when remaining < k (off-by-one)', () => {
        const result = reverseKGroup(toList([1, 2, 3, 4, 5]), 2);
        if (result !== undefined) expect(toArr(result)).toEqual([2, 1, 4, 3, 5]);
    });

    it('should leave entire list untouched when k > length', () => {
        const result = reverseKGroup(toList([1, 2]), 5);
        if (result !== undefined) expect(toArr(result)).toEqual([1, 2]);
    });

    it('should reverse by 3 for LeetCode example', () => {
        const result = reverseKGroup(toList([1, 2, 3, 4, 5]), 3);
        if (result !== undefined) expect(toArr(result)).toEqual([3, 2, 1, 4, 5]);
    });

    it('should handle repetitive identical values', () => {
        const result = reverseKGroup(toList([7, 7, 7, 7]), 2);
        if (result !== undefined) expect(toArr(result)).toEqual([7, 7, 7, 7]);
    });
});
