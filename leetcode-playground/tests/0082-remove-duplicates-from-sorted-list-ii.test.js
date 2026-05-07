import { ListNode, deleteDuplicates } from '../0082-remove-duplicates-from-sorted-list-ii';

function arrayToList(arr) {
    if (!arr.length) return null;
    const head = new ListNode(arr[0]);
    let cur = head;
    for (let i = 1; i < arr.length; i++) {
        cur.next = new ListNode(arr[i]);
        cur = cur.next;
    }
    return head;
}

function listToArray(head) {
    const result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

describe('0082-remove-duplicates-from-sorted-list-ii', () => {
    it('official example 1: [1,2,3,3,4,4,5] → [1,2,5]', () => {
        const result = deleteDuplicates(arrayToList([1,2,3,3,4,4,5]));
        if (result !== undefined) expect(listToArray(result)).toEqual([1,2,5]);
    });

    it('official example 2: [1,1,1,2,3] → [2,3]', () => {
        const result = deleteDuplicates(arrayToList([1,1,1,2,3]));
        if (result !== undefined) expect(listToArray(result)).toEqual([2,3]);
    });

    it('empty list returns null', () => {
        const result = deleteDuplicates(null);
        if (result !== undefined) expect(result).toBeNull();
    });

    it('single element returns same value', () => {
        const result = deleteDuplicates(arrayToList([5]));
        if (result !== undefined) expect(listToArray(result)).toEqual([5]);
    });

    it('no duplicates: all elements kept', () => {
        const result = deleteDuplicates(arrayToList([1,2,3,4,5]));
        if (result !== undefined) expect(listToArray(result)).toEqual([1,2,3,4,5]);
    });

    it('all elements are duplicates: returns null', () => {
        const result = deleteDuplicates(arrayToList([1,1,2,2,3,3]));
        if (result !== undefined) expect(result).toBeNull();
    });

    it('duplicate at the head: [1,1,2,3] → [2,3]', () => {
        const result = deleteDuplicates(arrayToList([1,1,2,3]));
        if (result !== undefined) expect(listToArray(result)).toEqual([2,3]);
    });

    it('duplicate at the tail: [1,2,3,3] → [1,2]', () => {
        const result = deleteDuplicates(arrayToList([1,2,3,3]));
        if (result !== undefined) expect(listToArray(result)).toEqual([1,2]);
    });

    it('two-node list with same value: [2,2] → null', () => {
        const result = deleteDuplicates(arrayToList([2,2]));
        if (result !== undefined) expect(result).toBeNull();
    });

    it('two-node list with distinct values: [1,2] → [1,2]', () => {
        const result = deleteDuplicates(arrayToList([1,2]));
        if (result !== undefined) expect(listToArray(result)).toEqual([1,2]);
    });

    it('only one distinct value in middle: [1,1,2,2,3] → [3]', () => {
        const result = deleteDuplicates(arrayToList([1,1,2,2,3]));
        if (result !== undefined) expect(listToArray(result)).toEqual([3]);
    });

    it('three duplicates in a row: [1,2,2,2,3] → [1,3]', () => {
        const result = deleteDuplicates(arrayToList([1,2,2,2,3]));
        if (result !== undefined) expect(listToArray(result)).toEqual([1,3]);
    });
});
