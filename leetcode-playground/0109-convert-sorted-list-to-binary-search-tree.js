/**
 * Given the head of a singly linked list where elements are sorted in ascending order,
 * convert it to a height-balanced binary search tree.
 *
 * https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/description/
 *
 * @param {ListNode} head
 * @return {TreeNode}
 */
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

var sortedListToBST = function(head) {
    // implement
};

export { sortedListToBST, ListNode, TreeNode }
