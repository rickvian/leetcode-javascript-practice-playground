import { ListNode, reverseKGroup } from '../0025-reverse-nodes-in-k-group';

// Helper: convert array to linked list
function arrayToList(arr) {
    if (!arr || arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper: convert linked list to array
function listToArray(head) {
    const result = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

describe('0025-reverse-nodes-in-k-group', () => {
    it('should handle official example 1: [1,2,3,4,5] with k=2', () => {
        const head = arrayToList([1, 2, 3, 4, 5]);
        const result = reverseKGroup(head, 2);
        if (result !== undefined) {
            expect(listToArray(result)).toEqual([2, 1, 4, 3, 5]);
        }
    });

    it('should handle official example 2: [1,2,3,4,5] with k=3', () => {
        const head = arrayToList([1, 2, 3, 4, 5]);
        const result = reverseKGroup(head, 3);
        if (result !== undefined) {
            expect(listToArray(result)).toEqual([3, 2, 1, 4, 5]);
        }
    });

    it('should handle k=1 (list unchanged)', () => {
        const head = arrayToList([1, 2, 3, 4, 5]);
        const result = reverseKGroup(head, 1);
        if (result !== undefined) {
            expect(listToArray(result)).toEqual([1, 2, 3, 4, 5]);
        }
    });

    it('should handle k equals list length (full reversal)', () => {
        const head = arrayToList([1, 2, 3, 4, 5]);
        const result = reverseKGroup(head, 5);
        if (result !== undefined) {
            expect(listToArray(result)).toEqual([5, 4, 3, 2, 1]);
        }
    });

    it('should handle k greater than list length (no reversal)', () => {
        const head = arrayToList([1, 2, 3]);
        const result = reverseKGroup(head, 5);
        if (result !== undefined) {
            expect(listToArray(result)).toEqual([1, 2, 3]);
        }
    });

    it('should handle single-node list', () => {
        const head = arrayToList([1]);
        const result = reverseKGroup(head, 1);
        if (result !== undefined) {
            expect(listToArray(result)).toEqual([1]);
        }
    });

    it('should handle single-node list with k=2 (no reversal)', () => {
        const head = arrayToList([1]);
        const result = reverseKGroup(head, 2);
        if (result !== undefined) {
            expect(listToArray(result)).toEqual([1]);
        }
    });

    it('should handle empty list', () => {
        const head = null;
        const result = reverseKGroup(head, 2);
        if (result !== undefined) {
            expect(listToArray(result)).toEqual([]);
        }
    });

    it('should handle two-node list with k=2 (reversal)', () => {
        const head = arrayToList([1, 2]);
        const result = reverseKGroup(head, 2);
        if (result !== undefined) {
            expect(listToArray(result)).toEqual([2, 1]);
        }
    });

    it('should handle two-node list with k=1 (unchanged)', () => {
        const head = arrayToList([1, 2]);
        const result = reverseKGroup(head, 1);
        if (result !== undefined) {
            expect(listToArray(result)).toEqual([1, 2]);
        }
    });

    it('should handle list length 6 with k=2 (three reversals)', () => {
        const head = arrayToList([1, 2, 3, 4, 5, 6]);
        const result = reverseKGroup(head, 2);
        if (result !== undefined) {
            expect(listToArray(result)).toEqual([2, 1, 4, 3, 6, 5]);
        }
    });

    it('should handle list length 7 with k=2 (three reversals + 1 leftover)', () => {
        const head = arrayToList([1, 2, 3, 4, 5, 6, 7]);
        const result = reverseKGroup(head, 2);
        if (result !== undefined) {
            expect(listToArray(result)).toEqual([2, 1, 4, 3, 6, 5, 7]);
        }
    });

    it('should handle list length 7 with k=3 (two reversals + 1 leftover)', () => {
        const head = arrayToList([1, 2, 3, 4, 5, 6, 7]);
        const result = reverseKGroup(head, 3);
        if (result !== undefined) {
            expect(listToArray(result)).toEqual([3, 2, 1, 6, 5, 4, 7]);
        }
    });

    it('should handle list with negative values', () => {
        const head = arrayToList([-1, -2, -3, -4]);
        const result = reverseKGroup(head, 2);
        if (result !== undefined) {
            expect(listToArray(result)).toEqual([-2, -1, -4, -3]);
        }
    });

    it('should handle list with mixed positive and negative values', () => {
        const head = arrayToList([1, -2, 3, -4, 5]);
        const result = reverseKGroup(head, 2);
        if (result !== undefined) {
            expect(listToArray(result)).toEqual([-2, 1, -4, 3, 5]);
        }
    });

    it('should handle list length 4 with k=4 (full reversal)', () => {
        const head = arrayToList([1, 2, 3, 4]);
        const result = reverseKGroup(head, 4);
        if (result !== undefined) {
            expect(listToArray(result)).toEqual([4, 3, 2, 1]);
        }
    });

    it('should handle list length 5 with k=2 (two complete + 1 leftover)', () => {
        const head = arrayToList([1, 2, 3, 4, 5]);
        const result = reverseKGroup(head, 2);
        if (result !== undefined) {
            expect(listToArray(result)).toEqual([2, 1, 4, 3, 5]);
        }
    });
});
