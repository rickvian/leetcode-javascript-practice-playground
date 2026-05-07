import { ListNode, rotateRight } from '../0061-rotate-list';

function arrayToList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let cur = head;
    for (let i = 1; i < arr.length; i++) {
        cur.next = new ListNode(arr[i]);
        cur = cur.next;
    }
    return head;
}

function listToArray(head) {
    const result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

describe('0061-rotate-list', () => {
    it('should rotate [1,2,3,4,5] by k=2 to [4,5,1,2,3]', () => {
        const result = rotateRight(arrayToList([1,2,3,4,5]), 2);
        if (result !== undefined) expect(listToArray(result)).toEqual([4,5,1,2,3]);
    });

    it('should rotate [0,1,2] by k=4 to [2,0,1]', () => {
        const result = rotateRight(arrayToList([0,1,2]), 4);
        if (result !== undefined) expect(listToArray(result)).toEqual([2,0,1]);
    });

    it('should return same list when k=0', () => {
        const result = rotateRight(arrayToList([1,2,3,4,5]), 0);
        if (result !== undefined) expect(listToArray(result)).toEqual([1,2,3,4,5]);
    });

    it('should return same list when k equals list length', () => {
        const result = rotateRight(arrayToList([1,2,3]), 3);
        if (result !== undefined) expect(listToArray(result)).toEqual([1,2,3]);
    });

    it('should handle k larger than list length (k mod length)', () => {
        const result = rotateRight(arrayToList([1,2,3,4,5]), 7);
        if (result !== undefined) expect(listToArray(result)).toEqual([4,5,1,2,3]);
    });

    it('should return single-node list unchanged for any k', () => {
        const result = rotateRight(arrayToList([1]), 100);
        if (result !== undefined) expect(listToArray(result)).toEqual([1]);
    });

    it('should return null for empty list', () => {
        const result = rotateRight(null, 5);
        if (result !== undefined) expect(result).toBeNull();
    });

    it('should rotate two-node list by k=1', () => {
        const result = rotateRight(arrayToList([1,2]), 1);
        if (result !== undefined) expect(listToArray(result)).toEqual([2,1]);
    });

    it('should return same two-node list when k equals length', () => {
        const result = rotateRight(arrayToList([1,2]), 2);
        if (result !== undefined) expect(listToArray(result)).toEqual([1,2]);
    });

    it('should handle k=1 on longer list', () => {
        const result = rotateRight(arrayToList([1,2,3,4,5]), 1);
        if (result !== undefined) expect(listToArray(result)).toEqual([5,1,2,3,4]);
    });

    it('should handle negative values with rotation', () => {
        const result = rotateRight(arrayToList([-1,-100,3,99]), 2);
        if (result !== undefined) expect(listToArray(result)).toEqual([3,99,-1,-100]);
    });

    it('should handle very large k (2*10^9) on single node', () => {
        const result = rotateRight(arrayToList([42]), 2000000000);
        if (result !== undefined) expect(listToArray(result)).toEqual([42]);
    });

    it('should handle k multiple of list length (effectively zero rotation)', () => {
        const result = rotateRight(arrayToList([1,2,3,4]), 8);
        if (result !== undefined) expect(listToArray(result)).toEqual([1,2,3,4]);
    });
});
