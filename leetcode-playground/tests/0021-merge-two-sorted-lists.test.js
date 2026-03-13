import { mergeTwoLists } from '../0021-merge-two-sorted-lists';

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

describe('0021-merge-two-sorted-lists', () => {
    it('should merge [1,3,5] and [2,4,6]', () => {
        const list1 = createList([1, 3, 5]);
        const list2 = createList([2, 4, 6]);
        const result = mergeTwoLists(list1, list2);
        expect(listToArray(result)).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('should handle empty lists', () => {
        const list1 = null;
        const list2 = null;
        const result = mergeTwoLists(list1, list2);
        expect(result).toBeNull();
    });

    it('should handle first list empty', () => {
        const list1 = null;
        const list2 = createList([0]);
        const result = mergeTwoLists(list1, list2);
        expect(listToArray(result)).toEqual([0]);
    });

    it('should handle lists with different lengths', () => {
        const list1 = createList([1, 2, 3, 4, 5]);
        const list2 = createList([2, 3]);
        const result = mergeTwoLists(list1, list2);
        expect(listToArray(result)).toEqual([1, 2, 2, 3, 3, 4, 5]);
    });

    it('should merge single element lists', () => {
        const list1 = createList([1]);
        const list2 = createList([2]);
        const result = mergeTwoLists(list1, list2);
        expect(listToArray(result)).toEqual([1, 2]);
    });

    it('should handle list2 empty', () => {
        const list1 = createList([1, 2, 3]);
        const list2 = null;
        const result = mergeTwoLists(list1, list2);
        expect(listToArray(result)).toEqual([1, 2, 3]);
    });

    it('should maintain order when merging sorted lists', () => {
        const list1 = createList([1, 3, 5, 7]);
        const list2 = createList([2, 4, 6, 8]);
        const result = mergeTwoLists(list1, list2);
        expect(listToArray(result)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });
});
