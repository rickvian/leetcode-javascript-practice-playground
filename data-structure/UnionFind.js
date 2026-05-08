/**
 * UnionFind (a.k.a. Disjoint Set Union, DSU)
 *
 * Tracks which group each element belongs to. Two operations:
 *
 *   find(x)     → representative ("root") of x's group
 *   union(a, b) → merge a's group with b's group
 *
 * Two elements are in the same group iff they have the same root.
 *
 *   parent: [0, 0, 0, 3, 3, 5]
 *   rank:   [1, 0, 0, 1, 0, 0]
 *
 *      0       3      5
 *     / \      |
 *    1   2     4         ← three groups: {0,1,2}, {3,4}, {5}
 *
 * Two optimizations get find/union to nearly O(1):
 *
 *   1. Path compression — when finding root of x, point every node on the
 *      path directly at the root. Future finds become O(1).
 *
 *      Before find(2):  0 ← 1 ← 2          After: 0 ← 1
 *                                                  ↑
 *                                                  2
 *
 *   2. Union by rank — attach the shorter tree under the taller one. Keeps
 *      tree height ≤ log n even before compression kicks in.
 *
 * Combined complexity: O(α(n)) per operation, where α is the inverse Ackermann
 * function. For any practical n, α(n) ≤ 4. Effectively constant time.
 *
 * What you CAN'T do: split a group. UF only ever merges. If you need to undo
 * unions, you need a different structure (link-cut tree, or rebuild).
 *
 * Common uses:
 *   - Kruskal's MST (cycle detection on edge addition)
 *   - dynamic connectivity / number of islands variants
 *   - account merging, equation equality (LeetCode 952, 990)
 *
 * Space: O(n)
 *
 * find       O(α(n)) ≈ O(1)
 * union      O(α(n)) ≈ O(1)
 * connected  O(α(n)) ≈ O(1)
 * count      O(1)            — number of disjoint groups
 */
class UnionFind {
  #parent;
  #rank;
  #count;

  constructor(n) {
    // each element starts as its own group — parent[i] = i
    this.#parent = Array.from({ length: n }, (_, i) => i);
    this.#rank = new Array(n).fill(0);
    this.#count = n;
  }

  find(x) {
    // path compression — climb to root, then re-point everything on the path
    let root = x;
    while (this.#parent[root] !== root) root = this.#parent[root];
    while (this.#parent[x] !== root) {
      const next = this.#parent[x];
      this.#parent[x] = root;
      x = next;
    }
    return root;
  }

  /**
   * Returns true if a merge actually happened (a and b were in different groups).
   * Returning the merge status avoids re-checking afterwards in callers like
   * Kruskal's algorithm.
   */
  union(a, b) {
    const ra = this.find(a);
    const rb = this.find(b);
    if (ra === rb) return false;
    // attach shorter tree under taller — keeps height balanced
    if (this.#rank[ra] < this.#rank[rb]) {
      this.#parent[ra] = rb;
    } else if (this.#rank[ra] > this.#rank[rb]) {
      this.#parent[rb] = ra;
    } else {
      this.#parent[rb] = ra;
      this.#rank[ra]++;
    }
    this.#count--;
    return true;
  }

  connected(a, b) {
    return this.find(a) === this.find(b);
  }

  count() {
    return this.#count;
  }
}

export { UnionFind };
