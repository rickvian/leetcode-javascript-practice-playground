import { partition, ListNode } from '../0086-partition-list';

const toList = (arr) => {
    const dummy = new ListNode();
    let tail = dummy;
    for (const v of arr) {
        tail.next = new ListNode(v);
        tail = tail.next;
    }
    return dummy.next;
};

const toArr = (head) => {
    const out = [];
    let cur = head;
    while (cur) {
        out.push(cur.val);
        cur = cur.next;
    }
    return out;
};

describe('0086-partition-list', () => {
    it('should return null for empty list (min input)', () => {
        const result = partition(null, 3);
        if (result !== undefined) expect(result).toBeNull();
    });

    it('should preserve single-node list regardless of x', () => {
        const result = partition(toList([5]), 3);
        if (result !== undefined) expect(toArr(result)).toEqual([5]);
    });

    it('should partition [1,4,3,2,5,2] around x=3 preserving relative order', () => {
        const result = partition(toList([1, 4, 3, 2, 5, 2]), 3);
        if (result !== undefined) expect(toArr(result)).toEqual([1, 2, 2, 4, 3, 5]);
    });

    it('should keep list unchanged when x is smaller than all values', () => {
        const result = partition(toList([3, 4, 5]), 1);
        if (result !== undefined) expect(toArr(result)).toEqual([3, 4, 5]);
    });

    it('should keep list unchanged when x is larger than all values', () => {
        const result = partition(toList([1, 2, 3]), 100);
        if (result !== undefined) expect(toArr(result)).toEqual([1, 2, 3]);
    });

    it('should partition [2,1] around x=2 into [1,2]', () => {
        const result = partition(toList([2, 1]), 2);
        if (result !== undefined) expect(toArr(result)).toEqual([1, 2]);
    });

    it('should group repetitive equal values together when x matches', () => {
        const result = partition(toList([1, 4, 4, 1, 5]), 4);
        if (result !== undefined) expect(toArr(result)).toEqual([1, 1, 4, 4, 5]);
    });
});
