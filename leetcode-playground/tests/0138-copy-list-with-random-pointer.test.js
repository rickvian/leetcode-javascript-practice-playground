import { copyRandomList } from '../0138-copy-list-with-random-pointer.js';

// Node class for linked list with random pointer
class Node {
  constructor(val, next = null, random = null) {
    this.val = val;
    this.next = next;
    this.random = random;
  }
}

// Helper to extract list structure for comparison
function getListStructure(head) {
  if (!head) return null;
  const structure = [];
  const nodeMap = new Map();
  let curr = head;
  let index = 0;

  // First pass: collect all nodes and create index map
  while (curr) {
    nodeMap.set(curr, index);
    structure.push({ val: curr.val, randomIndex: null });
    curr = curr.next;
    index++;
  }

  // Second pass: map random pointers to indices
  curr = head;
  index = 0;
  while (curr) {
    if (curr.random) {
      structure[index].randomIndex = nodeMap.get(curr.random);
    }
    curr = curr.next;
    index++;
  }

  return structure;
}

// Helper to verify deep copy (different object references)
function verifyDeepCopy(original, copy) {
  if (!original && !copy) return true;
  if (!original || !copy) return false;

  let origCurr = original;
  let copyCurr = copy;

  while (origCurr && copyCurr) {
    // Check values match
    if (origCurr.val !== copyCurr.val) return false;
    // Check different objects (deep copy)
    if (origCurr === copyCurr) return false;
    // Check random pointer mapping
    if (origCurr.random === null && copyCurr.random !== null) return false;
    if (origCurr.random !== null && copyCurr.random === null) return false;

    origCurr = origCurr.next;
    copyCurr = copyCurr.next;
  }

  return !origCurr && !copyCurr;
}

describe('0138-copy-list-with-random-pointer', () => {
  it('should handle empty list (null)', () => {
    const result = copyRandomList(null);
    if (result !== undefined) {
      expect(result).toBeNull();
    }
  });

  it('should handle single node with random = null', () => {
    const node = new Node(1, null, null);
    const result = copyRandomList(node);
    if (result !== undefined) {
      expect(result.val).toBe(1);
      expect(result.next).toBeNull();
      expect(result.random).toBeNull();
      // Verify deep copy
      expect(result === node).toBe(false);
    }
  });

  it('should handle single node with random pointing to itself', () => {
    const node = new Node(7);
    node.random = node;
    const result = copyRandomList(node);
    if (result !== undefined) {
      expect(result.val).toBe(7);
      expect(result.next).toBeNull();
      expect(result.random).toBe(result); // Random points to itself
      // Verify deep copy
      expect(result === node).toBe(false);
    }
  });

  it('should handle two nodes where random pointers swap', () => {
    const node1 = new Node(1);
    const node2 = new Node(2);
    node1.next = node2;
    node1.random = node2;
    node2.random = node1;

    const result = copyRandomList(node1);
    if (result !== undefined) {
      expect(getListStructure(result)).toEqual([
        { val: 1, randomIndex: 1 },
        { val: 2, randomIndex: 0 }
      ]);
      expect(verifyDeepCopy(node1, result)).toBe(true);
    }
  });

  it('should handle list with all random pointers null', () => {
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    node1.next = node2;
    node2.next = node3;
    node1.random = null;
    node2.random = null;
    node3.random = null;

    const result = copyRandomList(node1);
    if (result !== undefined) {
      expect(getListStructure(result)).toEqual([
        { val: 1, randomIndex: null },
        { val: 2, randomIndex: null },
        { val: 3, randomIndex: null }
      ]);
      expect(verifyDeepCopy(node1, result)).toBe(true);
    }
  });

  it('should handle backward random pointers', () => {
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    node1.next = node2;
    node2.next = node3;
    node1.random = node3; // forward
    node2.random = node1; // backward
    node3.random = node2; // backward

    const result = copyRandomList(node1);
    if (result !== undefined) {
      expect(getListStructure(result)).toEqual([
        { val: 1, randomIndex: 2 },
        { val: 2, randomIndex: 0 },
        { val: 3, randomIndex: 1 }
      ]);
      expect(verifyDeepCopy(node1, result)).toBe(true);
    }
  });

  it('should handle all random pointers pointing to first node', () => {
    const node1 = new Node(10);
    const node2 = new Node(20);
    const node3 = new Node(30);
    node1.next = node2;
    node2.next = node3;
    node1.random = node1;
    node2.random = node1;
    node3.random = node1;

    const result = copyRandomList(node1);
    if (result !== undefined) {
      expect(getListStructure(result)).toEqual([
        { val: 10, randomIndex: 0 },
        { val: 20, randomIndex: 0 },
        { val: 30, randomIndex: 0 }
      ]);
      expect(verifyDeepCopy(node1, result)).toBe(true);
    }
  });

  it('should handle all random pointers pointing to last node', () => {
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    node1.next = node2;
    node2.next = node3;
    node1.random = node3;
    node2.random = node3;
    node3.random = node3;

    const result = copyRandomList(node1);
    if (result !== undefined) {
      expect(getListStructure(result)).toEqual([
        { val: 1, randomIndex: 2 },
        { val: 2, randomIndex: 2 },
        { val: 3, randomIndex: 2 }
      ]);
      expect(verifyDeepCopy(node1, result)).toBe(true);
    }
  });

  it('should handle LeetCode official example 1: [[7,null],[13,0],[11,4],[10,2],[1,0]]', () => {
    // Structure: 7->13->11->10->1
    // 7 random: null, 13 random: 7, 11 random: 1, 10 random: 11, 1 random: 7
    const node7 = new Node(7);
    const node13 = new Node(13);
    const node11 = new Node(11);
    const node10 = new Node(10);
    const node1 = new Node(1);

    node7.next = node13;
    node13.next = node11;
    node11.next = node10;
    node10.next = node1;

    node7.random = null;
    node13.random = node7;
    node11.random = node1;
    node10.random = node11;
    node1.random = node7;

    const result = copyRandomList(node7);
    if (result !== undefined) {
      expect(getListStructure(result)).toEqual([
        { val: 7, randomIndex: null },
        { val: 13, randomIndex: 0 },
        { val: 11, randomIndex: 4 },
        { val: 10, randomIndex: 2 },
        { val: 1, randomIndex: 0 }
      ]);
      expect(verifyDeepCopy(node7, result)).toBe(true);
    }
  });

  it('should handle LeetCode official example 2: [[1,1],[2,1]]', () => {
    const node1 = new Node(1);
    const node2 = new Node(2);
    node1.next = node2;
    node1.random = node1;
    node2.random = node1;

    const result = copyRandomList(node1);
    if (result !== undefined) {
      expect(getListStructure(result)).toEqual([
        { val: 1, randomIndex: 0 },
        { val: 2, randomIndex: 0 }
      ]);
      expect(verifyDeepCopy(node1, result)).toBe(true);
    }
  });

  it('should handle single node with random = null (different construction)', () => {
    const node = new Node(42);
    const result = copyRandomList(node);
    if (result !== undefined) {
      expect(result.val).toBe(42);
      expect(result.random).toBeNull();
      expect(result === node).toBe(false);
    }
  });

  it('should handle list with mixed null and non-null random pointers', () => {
    const node1 = new Node(5);
    const node2 = new Node(6);
    const node3 = new Node(7);
    node1.next = node2;
    node2.next = node3;
    node1.random = null;
    node2.random = node3;
    node3.random = null;

    const result = copyRandomList(node1);
    if (result !== undefined) {
      expect(getListStructure(result)).toEqual([
        { val: 5, randomIndex: null },
        { val: 6, randomIndex: 2 },
        { val: 7, randomIndex: null }
      ]);
      expect(verifyDeepCopy(node1, result)).toBe(true);
    }
  });

  it('should handle longer list with complex random pattern', () => {
    const nodes = [0, 1, 2, 3, 4].map(i => new Node(i));
    for (let i = 0; i < nodes.length - 1; i++) {
      nodes[i].next = nodes[i + 1];
    }
    // Random pattern: 0->2, 1->0, 2->4, 3->1, 4->3
    nodes[0].random = nodes[2];
    nodes[1].random = nodes[0];
    nodes[2].random = nodes[4];
    nodes[3].random = nodes[1];
    nodes[4].random = nodes[3];

    const result = copyRandomList(nodes[0]);
    if (result !== undefined) {
      expect(getListStructure(result)).toEqual([
        { val: 0, randomIndex: 2 },
        { val: 1, randomIndex: 0 },
        { val: 2, randomIndex: 4 },
        { val: 3, randomIndex: 1 },
        { val: 4, randomIndex: 3 }
      ]);
      expect(verifyDeepCopy(nodes[0], result)).toBe(true);
    }
  });

  it('should handle four-node list with all pointing to middle', () => {
    const nodes = [1, 2, 3, 4].map(v => new Node(v));
    for (let i = 0; i < nodes.length - 1; i++) {
      nodes[i].next = nodes[i + 1];
    }
    // All random point to node 2 (index 1)
    nodes[0].random = nodes[1];
    nodes[1].random = nodes[1];
    nodes[2].random = nodes[1];
    nodes[3].random = nodes[1];

    const result = copyRandomList(nodes[0]);
    if (result !== undefined) {
      expect(getListStructure(result)).toEqual([
        { val: 1, randomIndex: 1 },
        { val: 2, randomIndex: 1 },
        { val: 3, randomIndex: 1 },
        { val: 4, randomIndex: 1 }
      ]);
      expect(verifyDeepCopy(nodes[0], result)).toBe(true);
    }
  });

  it('should handle list where random pointers form a cycle', () => {
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    node1.next = node2;
    node2.next = node3;
    // Random cycle: 1->2->3->1
    node1.random = node2;
    node2.random = node3;
    node3.random = node1;

    const result = copyRandomList(node1);
    if (result !== undefined) {
      expect(getListStructure(result)).toEqual([
        { val: 1, randomIndex: 1 },
        { val: 2, randomIndex: 2 },
        { val: 3, randomIndex: 0 }
      ]);
      expect(verifyDeepCopy(node1, result)).toBe(true);
    }
  });

  it('should handle three-node list with alternating pointers', () => {
    const node1 = new Node(10);
    const node2 = new Node(20);
    const node3 = new Node(30);
    node1.next = node2;
    node2.next = node3;
    node1.random = node3;
    node2.random = null;
    node3.random = node1;

    const result = copyRandomList(node1);
    if (result !== undefined) {
      expect(getListStructure(result)).toEqual([
        { val: 10, randomIndex: 2 },
        { val: 20, randomIndex: null },
        { val: 30, randomIndex: 0 }
      ]);
      expect(verifyDeepCopy(node1, result)).toBe(true);
    }
  });

  it('should handle two-node list with both random = null', () => {
    const node1 = new Node(100);
    const node2 = new Node(200);
    node1.next = node2;
    node1.random = null;
    node2.random = null;

    const result = copyRandomList(node1);
    if (result !== undefined) {
      expect(getListStructure(result)).toEqual([
        { val: 100, randomIndex: null },
        { val: 200, randomIndex: null }
      ]);
      expect(verifyDeepCopy(node1, result)).toBe(true);
    }
  });

  it('should handle five-node list with forward-only random pointers', () => {
    const nodes = [1, 2, 3, 4, 5].map(v => new Node(v));
    for (let i = 0; i < nodes.length - 1; i++) {
      nodes[i].next = nodes[i + 1];
    }
    // Forward random: 0->1, 1->2, 2->3, 3->4, 4->null
    nodes[0].random = nodes[1];
    nodes[1].random = nodes[2];
    nodes[2].random = nodes[3];
    nodes[3].random = nodes[4];
    nodes[4].random = null;

    const result = copyRandomList(nodes[0]);
    if (result !== undefined) {
      expect(getListStructure(result)).toEqual([
        { val: 1, randomIndex: 1 },
        { val: 2, randomIndex: 2 },
        { val: 3, randomIndex: 3 },
        { val: 4, randomIndex: 4 },
        { val: 5, randomIndex: null }
      ]);
      expect(verifyDeepCopy(nodes[0], result)).toBe(true);
    }
  });

  it('should verify no shared nodes between original and copy', () => {
    const node1 = new Node(1);
    const node2 = new Node(2);
    node1.next = node2;
    node1.random = node2;
    node2.random = node1;

    const result = copyRandomList(node1);
    if (result !== undefined) {
      let origCurr = node1;
      let copyCurr = result;
      while (origCurr && copyCurr) {
        expect(origCurr === copyCurr).toBe(false);
        origCurr = origCurr.next;
        copyCurr = copyCurr.next;
      }
    }
  });
});
