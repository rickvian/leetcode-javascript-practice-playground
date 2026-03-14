/**
 * Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph.
 * Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.
 *
 * https://leetcode.com/problems/clone-graph/description/
 *
 * @param {Node} node
 * @return {Node}
 */
class Node {
    constructor(val, neighbors) {
        this.val = val === undefined ? 0 : val;
        this.neighbors = neighbors === undefined ? [] : neighbors;
    }
}

var cloneGraph = function(node) {
};

export { cloneGraph, Node };
