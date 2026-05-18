# Data Structures (JavaScript)

Hand-rolled implementations for learning. Each file has:

- Concept explanation with ASCII diagram
- Time/space complexity table at the top
- Inline comments explaining *why* (not *what*) — design tradeoffs, alternatives ruled out, common pitfalls
- Private fields (`#`) for true encapsulation

These are NOT meant to replace `Map`/`Set`/`Array` in production. They exist to make the underlying machinery visible.

## When to use what

| Structure | Use when | Avoid when | File |
|---|---|---|---|
| **Stack** | LIFO order — undo, parens matching, DFS stack | FIFO order needed | [`Stack.js`](./Stack.js) |
| **Queue** | FIFO order — BFS, scheduling, buffers | LIFO or random access | [`Queue.js`](./Queue.js) |
| **LinkedList** | Frequent insert/remove at head; size unknown | Random access by index | [`LinkedList.js`](./LinkedList.js) |
| **DoublyLinkedList** | O(1) remove given a node ref (LRU cache, deque) | Memory tight (2× pointer overhead) | [`DoublyLinkedList.js`](./DoublyLinkedList.js) |
| **HashMap** | Key→value lookups in O(1) avg; learning hashing | Native `Map` does this in prod | [`HashMap.js`](./HashMap.js) |
| **MaxPriorityQueue** | Always pop the largest — Dijkstra (negated), top-K, schedulers | Need sorted iteration of all elements | [`MaxPriorityQueue.js`](./MaxPriorityQueue.js) |
| **MinPriorityQueue** | Always pop the smallest — Dijkstra, A\*, merge-K-sorted | Need sorted iteration of all elements | [`MinPriorityQueue.js`](./MinPriorityQueue.js) |
| **Trie** | Prefix queries, autocomplete, word-search grids | Only need exact-match lookup (use HashMap) | [`Trie.js`](./Trie.js) |
| **BST** | Sorted in-order traversal + dynamic inserts | Worst-case O(n) skew without balancing | [`BST.js`](./BST.js) |
| **Graph** | Edges between entities — BFS/DFS, shortest path, topo sort | Tree-shaped data (use a tree) | [`Graph.js`](./Graph.js) |
| **UnionFind** | Connectivity / grouping — Kruskal's MST, dynamic islands | Need to *split* groups (UF only merges) | [`UnionFind.js`](./UnionFind.js) |

## Complexity cheat sheet

| Structure | Insert | Delete | Search | Access by key/index | Notes |
|---|---|---|---|---|---|
| Stack | O(1) | O(1) (top) | O(n) | — | `push`/`pop` only |
| Queue | O(1) | O(1) (front) | O(n) | — | linked-list backed |
| LinkedList | O(1) head / O(n) middle | O(1) head / O(n) middle | O(n) | O(n) | no random access |
| DoublyLinkedList | O(1) head/tail | O(1) given node | O(n) | O(n) | O(1) remove given ref |
| HashMap | O(1) avg | O(1) avg | O(1) avg | O(1) avg | O(n) worst (collisions) |
| MaxPQ / MinPQ | O(log n) | O(log n) (root) | O(n) | — | front O(1) |
| Trie | O(L) | O(L) | O(L) | — | L = key length |
| BST | O(log n) avg / O(n) worst | O(log n) avg / O(n) worst | O(log n) avg / O(n) worst | — | unbalanced; AVL/RB needed for guarantee |
| Graph (adj. list) | O(1) edge | O(deg) edge | O(1) node | — | BFS/DFS O(V+E) |
| UnionFind | O(α(n)) | — | O(α(n)) | — | α = inverse Ackermann ≈ constant |

## Run tests

```bash
npm run test -- data-structure
```

## Style guide for adding new structures

1. Top-of-file JSDoc with ASCII diagram + complexity table
2. Explain *why* this representation beats alternatives (e.g. heap-as-array vs node-pointers)
3. Use `#privateFields` — encapsulation matters for teaching invariants
4. Comments explain reasoning, not syntax
5. Test file in `tests/` covers happy path + edge cases (empty, single-element, duplicates where relevant)
