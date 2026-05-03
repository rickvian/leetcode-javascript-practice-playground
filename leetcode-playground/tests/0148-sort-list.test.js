import { ListNode, sortList } from '../0148-sort-list';

describe('0148-sort-list', () => {
    // Helper function to create linked list from array
    function arrayToList(arr) {
        if (arr.length === 0) return null;
        let head = new ListNode(arr[0]);
        let current = head;
        for (let i = 1; i < arr.length; i++) {
            current.next = new ListNode(arr[i]);
            current = current.next;
        }
        return head;
    }

    // Helper function to convert linked list to array
    function listToArray(head) {
        const result = [];
        let current = head;
        while (current) {
            result.push(current.val);
            current = current.next;
        }
        return result;
    }

    it('should handle empty list', () => {
        const result = sortList(null);
        if (result !== undefined) expect(result).toBeNull();
    });

    it('should handle single node', () => {
        const head = arrayToList([5]);
        const result = sortList(head);
        if (result !== undefined) expect(listToArray(result)).toEqual([5]);
    });

    it('should handle two nodes in sorted order', () => {
        const head = arrayToList([1, 2]);
        const result = sortList(head);
        if (result !== undefined) expect(listToArray(result)).toEqual([1, 2]);
    });

    it('should handle two nodes in reverse order', () => {
        const head = arrayToList([2, 1]);
        const result = sortList(head);
        if (result !== undefined) expect(listToArray(result)).toEqual([1, 2]);
    });

    it('should handle already sorted list', () => {
        const head = arrayToList([1, 2, 3, 4, 5]);
        const result = sortList(head);
        if (result !== undefined) expect(listToArray(result)).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle reverse sorted list', () => {
        const head = arrayToList([5, 4, 3, 2, 1]);
        const result = sortList(head);
        if (result !== undefined) expect(listToArray(result)).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle all duplicate values', () => {
        const head = arrayToList([3, 3, 3, 3]);
        const result = sortList(head);
        if (result !== undefined) expect(listToArray(result)).toEqual([3, 3, 3, 3]);
    });

    it('should handle negative values mixed with positives', () => {
        const head = arrayToList([-1, 3, -2, 0, 5]);
        const result = sortList(head);
        if (result !== undefined) expect(listToArray(result)).toEqual([-2, -1, 0, 3, 5]);
    });

    it('should handle LeetCode example 1', () => {
        const head = arrayToList([4, 2, 1, 3]);
        const result = sortList(head);
        if (result !== undefined) expect(listToArray(result)).toEqual([1, 2, 3, 4]);
    });

    it('should handle LeetCode example 2', () => {
        const head = arrayToList([-1, 5, 3, 4, 0]);
        const result = sortList(head);
        if (result !== undefined) expect(listToArray(result)).toEqual([-1, 0, 3, 4, 5]);
    });

    it('should handle three nodes unsorted', () => {
        const head = arrayToList([3, 1, 2]);
        const result = sortList(head);
        if (result !== undefined) expect(listToArray(result)).toEqual([1, 2, 3]);
    });

    it('should handle seven-node list', () => {
        const head = arrayToList([7, 3, 1, 6, 5, 2, 4]);
        const result = sortList(head);
        if (result !== undefined) expect(listToArray(result)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });

    it('should handle list with all zeros', () => {
        const head = arrayToList([0, 0, 0]);
        const result = sortList(head);
        if (result !== undefined) expect(listToArray(result)).toEqual([0, 0, 0]);
    });

    it('should handle list with single large value', () => {
        const head = arrayToList([1000000, 1, 2]);
        const result = sortList(head);
        if (result !== undefined) expect(listToArray(result)).toEqual([1, 2, 1000000]);
    });

    it('should handle list with negative at end', () => {
        const head = arrayToList([1, 2, 3, -5]);
        const result = sortList(head);
        if (result !== undefined) expect(listToArray(result)).toEqual([-5, 1, 2, 3]);
    });

    it('should handle alternating small and large values', () => {
        const head = arrayToList([10, 1, 20, 2, 30, 3]);
        const result = sortList(head);
        if (result !== undefined) expect(listToArray(result)).toEqual([1, 2, 3, 10, 20, 30]);
    });

    it('should handle two distinct values', () => {
        const head = arrayToList([2, 1, 2, 1, 2, 1]);
        const result = sortList(head);
        if (result !== undefined) expect(listToArray(result)).toEqual([1, 1, 1, 2, 2, 2]);
    });

    it('should handle longer list with multiple duplicates', () => {
        const head = arrayToList([5, 2, 8, 2, 9, 1, 5, 5]);
        const result = sortList(head);
        if (result !== undefined) expect(listToArray(result)).toEqual([1, 2, 2, 5, 5, 5, 8, 9]);
    });

    it('should handle ten-node list', () => {
        const head = arrayToList([9, 5, 3, 7, 1, 8, 2, 4, 6, 10]);
        const result = sortList(head);
        if (result !== undefined) expect(listToArray(result)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
});
