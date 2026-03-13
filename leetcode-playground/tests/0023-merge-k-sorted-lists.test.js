import { mergeKLists } from '../0023-merge-k-sorted-lists';

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

describe('0023-merge-k-sorted-lists', () => {
    it('should merge [[1,4,5],[1,3,4],[2,6]]', () => {
        const lists = [createList([1, 4, 5]), createList([1, 3, 4]), createList([2, 6])];
        const result = mergeKLists(lists);
        expect(listToArray(result)).toEqual([1, 1, 2, 3, 4, 4, 5, 6]);
    });

    it('should return null for empty lists array', () => {
        const lists = [];
        const result = mergeKLists(lists);
        expect(result).toBeNull();
    });

    it('should return null for lists with empty list', () => {
        const lists = [null];
        const result = mergeKLists(lists);
        expect(result).toBeNull();
    });

    it('should handle single list', () => {
        const lists = [createList([1, 2, 3])];
        const result = mergeKLists(lists);
        expect(listToArray(result)).toEqual([1, 2, 3]);
    });

    it('should handle lists with single elements', () => {
        const lists = [createList([1]), createList([2]), createList([3])];
        const result = mergeKLists(lists);
        expect(listToArray(result)).toEqual([1, 2, 3]);
    });

    it('should handle multiple empty lists', () => {
        const lists = [null, null, null];
        const result = mergeKLists(lists);
        expect(result).toBeNull();
    });

    it('should handle mix of empty and non-empty lists', () => {
        const lists = [null, createList([1, 2]), null, createList([3, 4])];
        const result = mergeKLists(lists);
        expect(listToArray(result)).toEqual([1, 2, 3, 4]);
    });

    it('should merge lists with duplicates', () => {
        const lists = [createList([1, 2, 4]), createList([1, 3, 4]), createList([2, 6])];
        const result = mergeKLists(lists);
        expect(listToArray(result)).toEqual([1, 1, 2, 2, 3, 4, 4, 6]);
    });
});
