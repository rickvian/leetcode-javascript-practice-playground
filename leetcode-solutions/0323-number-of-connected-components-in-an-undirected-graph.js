/**
 * 323. Number of Connected Components in an Undirected Graph
 * https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/
 * Difficulty: Medium
 *
 * You have a graph of n nodes. You are given an integer n and an array edges where
 * edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.
 *
 * Return the number of connected components in the graph.
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 *
 * @complexity
 * Time:
 *   - Array.from init: O(n) for parent + O(n) for rank
 *   - Each union call → two findRoot calls: O(α(n)) each with path compression + union by rank
 *   - E edges total: O(E · α(n))
 *   - Combined: O(n + E · α(n)) ≈ O(n + E)
 *   - α(n) = inverse Ackermann function — for any realistic input size,
 *     α(n) ≤ 4, so it's treated as O(1) constant in practice
 *   - Path compression alone: O(E · log n) amortized
 *   - Union by rank alone: O(E · log n) worst case
 *   - Both combined: O(E · α(n)) — provably optimal (Tarjan 1975)
 *   → O(n + E)
 *
 * Space:
 *   - parent array: O(n)
 *   - rank array: O(n)
 *   - findRoot call stack (recursion depth): O(α(n)) ≈ O(1) amortized
 *   → O(n)
 */
var countComponents = function (n, edges) {
  // Insight: treat each node as its own isolated group — n groups to start
  // Every node starts with parent pointed to itself. This means "each node is its own root / own component"
  // e.g. n=4 → parent = [0, 1, 2, 3], components = 4
  const parent = Array.from({ length: n }, (_, i) => i); // O(n)
  // rank = upper bound on tree height rooted at this node. All start at 0 (single-node trees)
  // Used to keep trees shallow: attach shorter tree under taller tree → height grows slowest
  const rank = new Array(n).fill(0);
  let components = n;

  // findRoot: walk up parent pointers until reaching the root (node where parent[node] === node)
  // root = representative/identity of the component
  // path compression: while walking up, rewrite each visited node's parent directly to root
  //   before: 3→2→1→1   after findRoot(3): 3→1, 2→1 (both skip directly to root)
  //   next findRoot(3) = 1 hop instead of 3 — tree flattens over time → O(α(n)) amortized ≈ O(1)
  function findRoot(node) {
    if (parent[node] !== node) {
      parent[node] = findRoot(parent[node]); // path compression: rewire to root on the way back up
    }
    return parent[node];
  }

  // union by rank: always attach the shorter tree UNDER the taller tree
  // keeps tree height ≤ log(n) even without path compression
  // e.g. rank[rootA]=2, rank[rootB]=1 → attach B under A (no height change)
  //      rank[rootA]=rank[rootB]=1 → attach B under A, bump rank[rootA] to 2
  function union(a, b) {
    const rootA = findRoot(a);
    const rootB = findRoot(b);

    if (rootA === rootB) return; // already same component — skip

    if (rank[rootA] < rank[rootB]) {
      parent[rootA] = rootB; // A shorter → hang under B
    } else if (rank[rootA] > rank[rootB]) {
      parent[rootB] = rootA; // B shorter → hang under A
    } else {
      parent[rootB] = rootA; // equal → pick A, bump its rank
      rank[rootA]++;
    }
    components--;
  }

  // process every edge — each merge reduces the component count by 1
  for (const [a, b] of edges) {
    // O(E · α(n))
    union(a, b);
  }

  return components;
};

/*
 * Component = group of nodes where every node reachable from every other node via edges.
 *
 * Example with n=5, edges=[[0,1],[1,2],[3,4]]:
 *
 *   0 - 1 - 2    3 - 4
 *   Group {0,1,2} → 1 component
 *   Group {3,4}   → 1 component
 *   Total: 2 components
 *
 * ---
 *
 * WHY IT'S CALLED "UNION-FIND"
 *
 * Two operations define the data structure:
 *   union(a, b)  — merge the groups that a and b belong to into one
 *   find(x)      — find which group x belongs to (returns the root/representative)
 *
 * Name comes directly from those two operations. Also called "Disjoint Set Union" (DSU).
 *
 * ---
 *
 * PRODUCTION USE CASES
 *
 * Any problem where you need to dynamically group things and quickly ask
 * "are these two things in the same group?" — Union-Find is the right tool.
 *
 * Network connectivity
 *   Are servers A and B in the same cluster? Union when a link goes up,
 *   find to check connectivity. Used in network topology managers.
 *
 * Percolation (physics/simulation)
 *   Does a grid of open/blocked cells have a path from top to bottom?
 *   Union adjacent open cells, check if top-row root === bottom-row root.
 *
 * Kruskal's Minimum Spanning Tree
 *   Build cheapest network connecting all nodes. For each edge (cheapest first),
 *   union its two nodes only if they're not already connected — skip if same root.
 *
 * Image segmentation / pixel labeling
 *   Group adjacent pixels of same color into regions. Union neighbors,
 *   find gives region ID per pixel.
 *
 * Duplicate detection / entity resolution
 *   "user_id 42 and user_id 99 are the same person" — union them.
 *   Later: find(42) === find(99) → same canonical entity.
 *
 * Common pattern: edges/relationships arrive one at a time (online/streaming).
 *   Union-Find handles incremental merges in near O(1) per operation,
 *   whereas re-running BFS/DFS on every new edge would be O(n + E) each time.
 */
