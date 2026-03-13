const { addTwoNumbers, ListNode } = require('../0002-add-two-numbers');

describe('0002-add-two-numbers', () => {
    it('should add two numbers correctly: l1 = [2,4,3], l2 = [5,6,4], result = [7,0,8]', () => {
        // Create list 1: 342
        const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
        // Create list 2: 465
        const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

        const result = addTwoNumbers(l1, l2);

        // Verify result: 807
        expect(result.val).toBe(7);
        expect(result.next.val).toBe(0);
        expect(result.next.next.val).toBe(8);
        expect(result.next.next.next).toBeNull();
    });

    it('should handle lists of different lengths', () => {
        // Create list 1: 9999999
        const l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))));
        // Create list 2: 9999
        const l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));

        const result = addTwoNumbers(l1, l2);

        // Result should be 10009998
        const values = [];
        let current = result;
        while (current) {
            values.push(current.val);
            current = current.next;
        }
        expect(values).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
    });

    it('should handle zero values', () => {
        // Create list 1: 0
        const l1 = new ListNode(0);
        // Create list 2: 0
        const l2 = new ListNode(0);

        const result = addTwoNumbers(l1, l2);

        expect(result.val).toBe(0);
        expect(result.next).toBeNull();
    });
});
