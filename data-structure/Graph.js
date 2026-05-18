/**
 * Graph — adjacency list (undirected by default, supports directed)
 *
 * Storage: a Map from node → Set of neighbors.
 *
 *   A — B
 *   |   |
 *   C — D
 *
 *   adj = {
 *     A: {B, C},
 *     B: {A, D},
 *     C: {A, D},
 *     D: {B, C},
 *   }
 *
 * Adjacency list vs adjacency matrix:
 *   - matrix: V×V bits, edge lookup O(1), space O(V²) — wasteful for sparse graphs
 *   - list:   neighbors easy to iterate, space O(V + E) — wins when E ≪ V²
 *
 * Most real graphs (social, road, web) are sparse → list wins.
 *
 * Why a Set per node, not an Array? `addEdge(a, b)` becomes idempotent in O(1)
 * — no duplicate edges from re-adding. Removal is also O(1) instead of O(deg).
 *
 * Directedness: pass `{ directed: true }` to skip the reverse-edge insert.
 *
 * BFS = "spread one ring at a time" — finds shortest path in unweighted graphs.
 * DFS = "go deep, backtrack" — natural for cycle detection, topo sort, components.
 *
 * V = vertex count, E = edge count, deg(v) = neighbor count of v.
 *
 * Space: O(V + E)
 *
 * addNode    O(1)
 * addEdge    O(1)
 * removeEdge O(1)
 * removeNode O(deg(v))
 * neighbors  O(1)         — returns the Set
 * bfs / dfs  O(V + E)
 */
class Graph {
  #adj = new Map();
  #directed;

  constructor({ directed = false } = {}) {
    this.#directed = directed;
  }

  addNode(v) {
    if (!this.#adj.has(v)) this.#adj.set(v, new Set());
  }

  addEdge(u, v) {
    this.addNode(u);
    this.addNode(v);
    this.#adj.get(u).add(v);
    if (!this.#directed) this.#adj.get(v).add(u);
  }

  removeEdge(u, v) {
    this.#adj.get(u)?.delete(v);
    if (!this.#directed) this.#adj.get(v)?.delete(u);
  }

  removeNode(v) {
    if (!this.#adj.has(v)) return;
    // remove every incoming edge — costs O(deg) for undirected,
    // O(V) worst case for directed (must scan everyone)
    if (this.#directed) {
      for (const set of this.#adj.values()) set.delete(v);
    } else {
      for (const u of this.#adj.get(v)) this.#adj.get(u).delete(v);
    }
    this.#adj.delete(v);
  }

  hasNode(v) {
    return this.#adj.has(v);
  }

  hasEdge(u, v) {
    return this.#adj.get(u)?.has(v) ?? false;
  }

  neighbors(v) {
    return this.#adj.get(v) ?? new Set();
  }

  nodes() {
    return [...this.#adj.keys()];
  }

  /**
   * BFS from `start`. Returns nodes in visit order.
   * Uses a plain array as a queue with a head index — avoids `shift()` O(n).
   */
  bfs(start) {
    if (!this.#adj.has(start)) return [];
    const visited = new Set([start]);
    const order = [];
    const queue = [start];
    let head = 0;
    while (head < queue.length) {
      const node = queue[head++];
      order.push(node);
      for (const next of this.#adj.get(node)) {
        if (!visited.has(next)) {
          visited.add(next);
          queue.push(next);
        }
      }
    }
    return order;
  }

  /**
   * Iterative DFS using an explicit stack — avoids JS call-stack overflow on
   * deep graphs. Visit order matches recursive DFS only if neighbor iteration
   * is reversed when pushing (so the first neighbor is popped first).
   */
  dfs(start) {
    if (!this.#adj.has(start)) return [];
    const visited = new Set();
    const order = [];
    const stack = [start];
    while (stack.length > 0) {
      const node = stack.pop();
      if (visited.has(node)) continue;
      visited.add(node);
      order.push(node);
      // reverse so iteration order matches a recursive `for (n of neighbors)`
      const ns = [...this.#adj.get(node)].reverse();
      for (const next of ns) if (!visited.has(next)) stack.push(next);
    }
    return order;
  }
}

export { Graph };
