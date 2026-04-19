import { isPalindrome, ListNode } from '../0234-palindrome-linked-list';

const toList = (arr) => {
    const dummy = new ListNode(0);
    let cur = dummy;
    for (const v of arr) {
        cur.next = new ListNode(v);
        cur = cur.next;
    }
    return dummy.next;
};

describe('0234-palindrome-linked-list', () => {
    it('should return true for empty list (null head)', () => {
        const result = isPalindrome(null);
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should return true for single-node list', () => {
        const result = isPalindrome(toList([1]));
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should return true for even-length palindrome [1,2,2,1]', () => {
        const result = isPalindrome(toList([1, 2, 2, 1]));
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should return false for [1,2] (smallest non-palindrome)', () => {
        const result = isPalindrome(toList([1, 2]));
        if (result !== undefined) expect(result).toBe(false);
    });

    it('should return true for odd-length palindrome [1,2,3,2,1]', () => {
        const result = isPalindrome(toList([1, 2, 3, 2, 1]));
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should return true for all-identical values (repetitive data)', () => {
        const result = isPalindrome(toList([7, 7, 7, 7, 7]));
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should return false for near-palindrome [1,2,3,4,1] (off-by-one)', () => {
        const result = isPalindrome(toList([1, 2, 3, 4, 1]));
        if (result !== undefined) expect(result).toBe(false);
    });
});
