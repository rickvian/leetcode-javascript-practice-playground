import { removeNthFromEnd } from '../0019-remove-nth-node-from-end-of-list';

// ListNode definition for testing
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Helper function to create a linked list from array
function createList(arr) {
    if (arr.length === 0) return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to convert linked list to array
function listToArray(head) {
    const arr = [];
    let current = head;
    while (current) {
        arr.push(current.val);
        current = current.next;
    }
    return arr;
}

describe('0019-remove-nth-node-from-end-of-list', () => {
    it('should remove second node from end [1,2,3,4,5], n=2', () => {
        const head = createList([1, 2, 3, 4, 5]);
        const result = removeNthFromEnd(head, 2);
        expect(listToArray(result)).toEqual([1, 2, 3, 5]);
    });

    it('should remove single node [1], n=1', () => {
        const head = createList([1]);
        const result = removeNthFromEnd(head, 1);
        expect(result).toBeNull();
    });

    it('should remove first node [1,2], n=2', () => {
        const head = createList([1, 2]);
        const result = removeNthFromEnd(head, 2);
        expect(listToArray(result)).toEqual([2]);
    });

    it('should remove last node [1,2], n=1', () => {
        const head = createList([1, 2]);
        const result = removeNthFromEnd(head, 1);
        expect(listToArray(result)).toEqual([1]);
    });

    it('should handle removing from larger list', () => {
        const head = createList([1, 2, 3, 4, 5, 6, 7]);
        const result = removeNthFromEnd(head, 3);
        expect(listToArray(result)).toEqual([1, 2, 3, 4, 5, 7]);
    });

    it('should handle removing first element in larger list', () => {
        const head = createList([1, 2, 3, 4, 5]);
        const result = removeNthFromEnd(head, 5);
        expect(listToArray(result)).toEqual([2, 3, 4, 5]);
    });

    it('should handle removing last element', () => {
        const head = createList([1, 2, 3, 4, 5]);
        const result = removeNthFromEnd(head, 1);
        expect(listToArray(result)).toEqual([1, 2, 3, 4]);
    });
});
