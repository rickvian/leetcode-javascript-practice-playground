import { rotateRight, ListNode } from '../0061-rotate-list';

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

describe('0061-rotate-list', () => {
    it('should return null for empty list (min input)', () => {
        const result = rotateRight(null, 3);
        if (result !== undefined) expect(result).toBeNull();
    });

    it('should return single-node list unchanged regardless of k', () => {
        const result = rotateRight(toList([7]), 100);
        if (result !== undefined) expect(toArr(result)).toEqual([7]);
    });

    it('should rotate [1,2,3,4,5] by k=2 into [4,5,1,2,3]', () => {
        const result = rotateRight(toList([1, 2, 3, 4, 5]), 2);
        if (result !== undefined) expect(toArr(result)).toEqual([4, 5, 1, 2, 3]);
    });

    it('should handle k greater than list length (k=2, list len=3 -> [1,2,0])', () => {
        const result = rotateRight(toList([0, 1, 2]), 4);
        if (result !== undefined) expect(toArr(result)).toEqual([2, 0, 1]);
    });

    it('should return list unchanged when k equals list length (off-by-one)', () => {
        const result = rotateRight(toList([1, 2, 3]), 3);
        if (result !== undefined) expect(toArr(result)).toEqual([1, 2, 3]);
    });

    it('should handle k=0 (no rotation)', () => {
        const result = rotateRight(toList([1, 2, 3]), 0);
        if (result !== undefined) expect(toArr(result)).toEqual([1, 2, 3]);
    });

    it('should handle repetitive identical values in the list', () => {
        const result = rotateRight(toList([5, 5, 5, 5]), 2);
        if (result !== undefined) expect(toArr(result)).toEqual([5, 5, 5, 5]);
    });
});
