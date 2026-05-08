/**
 * BST — Binary Search Tree (unbalanced)
 *
 * Invariant: for every node, all values in the LEFT subtree are < node.val,
 * all values in the RIGHT subtree are > node.val.
 *
 *           5
 *          / \
 *         3   8
 *        / \   \
 *       1   4   9
 *
 * That invariant is what makes search work: at each step you can throw
 * away half the tree.
 *
 * Worst case: insertions in sorted order create a degenerate tree —
 * essentially a linked list, all operations O(n):
 *
 *     1
 *      \
 *       2
 *        \
 *         3 ...
 *
 * To guarantee O(log n) you need self-balancing variants (AVL, Red-Black).
 * Those rotate on insert/delete to keep height ≈ log n. They're outside this
 * file's scope — start here, level up later.
 *
 * Delete is the spicy operation. Three cases:
 *   1. Leaf            → null it out
 *   2. One child       → splice the child up
 *   3. Two children    → replace value with in-order successor (min of right
 *                        subtree), then delete that successor
 *
 * In-order traversal yields values in sorted order — useful for problems
 * that need a sorted view without re-sorting.
 *
 * Space: O(n)
 *
 * insert     O(log n) avg / O(n) worst (skewed)
 * search     O(log n) avg / O(n) worst
 * delete     O(log n) avg / O(n) worst
 * inOrder    O(n)
 */
class BSTNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  #root = null;
  #size = 0;

  insert(val) {
    if (this.#root === null) {
      this.#root = new BSTNode(val);
      this.#size++;
      return;
    }
    let node = this.#root;
    while (true) {
      if (val === node.val) return;       // duplicates ignored
      const goLeft = val < node.val;
      const child = goLeft ? node.left : node.right;
      if (child === null) {
        const created = new BSTNode(val);
        if (goLeft) node.left = created; else node.right = created;
        this.#size++;
        return;
      }
      node = child;
    }
  }

  search(val) {
    let node = this.#root;
    while (node !== null) {
      if (val === node.val) return true;
      node = val < node.val ? node.left : node.right;
    }
    return false;
  }

  delete(val) {
    const before = this.#size;
    this.#root = this.#deleteFrom(this.#root, val);
    return this.#size < before;
  }

  /**
   * Returns array of values in ascending order.
   * Iterative in-order traversal — avoids recursion depth issues on deep trees.
   */
  inOrder() {
    const out = [];
    const stack = [];
    let node = this.#root;
    while (node !== null || stack.length > 0) {
      // dive left as far as possible, recording the path
      while (node !== null) {
        stack.push(node);
        node = node.left;
      }
      node = stack.pop();
      out.push(node.val);
      node = node.right;
    }
    return out;
  }

  size() {
    return this.#size;
  }

  #deleteFrom(node, val) {
    if (node === null) return null;
    if (val < node.val) {
      node.left = this.#deleteFrom(node.left, val);
      return node;
    }
    if (val > node.val) {
      node.right = this.#deleteFrom(node.right, val);
      return node;
    }
    // found target — handle the three cases
    this.#size--;
    if (node.left === null) return node.right;   // 0 or 1 child (right only)
    if (node.right === null) return node.left;   // 1 child (left only)
    // 2 children: pull up the in-order successor's value, then delete it.
    // We re-increment #size to cancel the early decrement above; the recursive
    // call will decrement once when it actually removes the successor leaf.
    this.#size++;
    const succ = this.#minNode(node.right);
    node.val = succ.val;
    node.right = this.#deleteFrom(node.right, succ.val);
    return node;
  }

  #minNode(node) {
    while (node.left !== null) node = node.left;
    return node;
  }
}

export { BST, BSTNode };
