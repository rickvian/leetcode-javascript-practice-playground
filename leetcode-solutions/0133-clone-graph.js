/**
 * 133. Clone Graph
 * https://leetcode.com/problems/clone-graph/
 * Difficulty: Medium
 *
 * Given a reference of a node in a connected undirected graph.
 * Return a deep copy (clone) of the graph.
 * Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.
 *
 * Test case format:
 * - For simplicity, each node's value is the same as the node's index (1-indexed).
 *   For example, the first node with val == 1, the second node with val == 2, and so on.
 *   The graph is represented in the test case using an adjacency list.
 *
 * - An adjacency list is a collection of unordered lists used to represent a finite graph.
 *   Each list describes the set of neighbors of a node in the graph.
 *
 * - The given node will always be the first node with val = 1. You must return the copy of
 *   the given node as a reference to the cloned graph.
 */

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * Approach 1: Recursive DFS keyed by node value
 *
 * @param {Node} node
 * @return {Node}
 *
 * @complexity
 * Time: O(V + E)
 *   - cloneNode called once per unique value (V nodes)
 *   - inside, .map iterates neighbors; across all nodes this sums to 2E (undirected)
 *   - V + 2E => drop constant => O(V + E)
 * Space: O(V)
 *   - map stores V entries
 *   - recursion stack up to O(V) deep in worst case (linear chain)
 *   - V + V = 2V => O(V)
 */
var cloneGraph = function (node) {
  // Guard: empty graph returns falsy as-is. Map tracks val -> cloned node to dedupe visits.
  // e.g. node=null => returns null; node={val:1,...} => kicks off recursion
  const map = new Map();
  return node && cloneNode(node, map);
};

function cloneNode(node, map) {
  // Create clone first and register it BEFORE recursing into neighbors.
  // Why: cycles. If we recurse first, A->B->A loops forever. Registering early lets
  // the neighbor lookup short-circuit when it sees A again.
  // e.g. visiting node 1: map = { 1: Clone(1) } before touching neighbors [2,4]
  const cloned = new Node(node.val, node.neighbors);
  map.set(node.val, cloned);

  // Rebuild neighbors: for each original neighbor, reuse the cloned one from map
  // if already seen, otherwise recurse to build it. This is the cycle-breaker.
  // e.g. node 1 neighbors [2,4] => [map.get(2) || clone(2), map.get(4) || clone(4)]
  cloned.neighbors =
    node.neighbors &&
    node.neighbors.map((n) => {
      return map.get(n.val) || cloneNode(n, map);
    });

  return cloned;
}

/**
 * Approach 2: Recursive DFS keyed by node reference (cleaner variant)
 *
 * @complexity
 * Time: O(V + E)
 *   - dfs runs once per node (V), each visit iterates that node's neighbors
 *   - sum of neighbor lists across all nodes = 2E for undirected graph
 *   - V + 2E => O(V + E)
 * Space: O(V) — map holds V entries + recursion stack up to V deep
 */
function cloneGraph(node) {
  if (!node) return null;

  // Key by the original Node reference (not val). Avoids assuming vals are unique
  // and is more idiomatic — the original node IS the natural identity.
  let map = new Map();

  function dfs(root) {
    // Memo check: if we've already cloned this node, return the existing clone.
    // This is what terminates cycles and prevents duplicate work.
    // e.g. A->B->A: when dfs hits A second time, map.has(A) is true, returns Clone(A)
    if (map.has(root)) return map.get(root);

    // Register BEFORE recursing — same cycle-break trick as Approach 1.
    // Empty neighbors array filled in the loop below.
    let copy = new Node(root.val);
    map.set(root, copy);

    // Recurse into each neighbor; dfs returns either the existing clone or a fresh one.
    // e.g. root=1 with neighbors [2,4] => copy.neighbors becomes [Clone(2), Clone(4)]
    for (let ngb of root.neighbors) {
      copy.neighbors.push(dfs(ngb));
    }

    return copy;
  }

  return dfs(node);
}

/**
 * Approach 3: Iterative two-pass — DFS with explicit stack to clone, then second pass to wire edges
 *
 * @complexity
 * Time: O(V + E)
 *   - Pass 1 (stack DFS): each node pushed/popped O(V); total pushes bounded by sum of
 *     neighbor lists = 2E. So pass 1 is O(V + E).
 *   - Pass 2 (wire edges): iterates V map entries, inner loop sums to 2E total => O(V + E).
 *   - O(V + E) + O(V + E) = O(2(V + E)) => drop constant => O(V + E)
 * Space: O(V)
 *   - oldToNew map: V, visited set: V, stack: up to V
 *   - 3V => O(V). No recursion stack — iterative wins on deep graphs.
 */
var cloneGraph = function (node) {
  if (!node) return null;

  // Strategy: split cloning into 2 phases.
  //   Phase 1: create all clone nodes (vals only, empty neighbors).
  //   Phase 2: walk old graph again, translate old-neighbor refs to new-neighbor refs.
  // Why split: avoids the "recurse-into-cycle" problem without needing the
  //   register-before-recurse trick. Simpler to reason about iteratively.
  let oldToNew = new Map(); // reminder use .set / .get instead of []

  // Phase 1: iterative DFS using explicit stack. visited set prevents re-processing
  // and prevents infinite loop on cycles.
  // e.g. graph 1-2-3-1: stack pops 1, clones it, pushes [2]; pops 2, clones, pushes [1,3];
  //      pops 3, clones, pushes [2]; pops 2 (visited, skip); pops 1 (visited, skip). Done.
  let stack = [node]; // []
  let visited = new Set(); // { OldNode(1) }

  while (stack.length > 0) {
    const currentNode = stack.pop(); // OldNode(1)

    if (!visited.has(currentNode)) {
      // Clone with empty neighbors — we'll fill them in phase 2.
      oldToNew.set(currentNode, new Node(currentNode.val));
      visited.add(currentNode);

      for (let nei of currentNode.neighbors) {
        stack.push(nei);
      }
    }
  }

  // Phase 2: wire up edges. For each (oldNode -> newNode) pair, walk oldNode's
  // neighbors and translate each old-neighbor into its corresponding new-neighbor
  // via the map. Map lookup is guaranteed because phase 1 visited every reachable node.
  // e.g. oldNode(1).neighbors = [old(2), old(4)] => newNode(1).neighbors = [new(2), new(4)]
  for (let [oldNode, newNode] of oldToNew) {
    for (let oldNeighNode of oldNode.neighbors) {
      // [OldNode(2), oldNode(3)]

      const newNeighNode = oldToNew.get(oldNeighNode); // OldNode(2)
      //newNeigh is NewNode(2)
      newNode.neighbors.push(newNeighNode);
      // newNode(1).neighbors.push(NewNode(2))
      // same goes with 3
    }
  }

  // Return clone of the entry node — caller passed old node, expects new one.
  return oldToNew.get(node);
};
