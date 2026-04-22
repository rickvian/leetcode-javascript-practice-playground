/**
 * Shared helpers for LeetCode test files.
 * Provides pointer-type builders and serializers so tests assert on
 * plain arrays rather than on linked-list / tree / graph node instances.
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

function GraphNode(val, neighbors) {
    this.val = (val === undefined ? 0 : val);
    this.neighbors = (neighbors === undefined ? [] : neighbors);
}

function arrayToList(arr) {
    if (!arr || arr.length === 0) return null;
    const dummy = new ListNode(0);
    let curr = dummy;
    for (const val of arr) {
        curr.next = new ListNode(val);
        curr = curr.next;
    }
    return dummy.next;
}

function listToArray(head) {
    const result = [];
    let curr = head;
    while (curr !== null && curr !== undefined) {
        result.push(curr.val);
        curr = curr.next;
    }
    return result;
}

function arrayToTree(arr) {
    if (!arr || arr.length === 0 || arr[0] === null || arr[0] === undefined) return null;
    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;
    while (queue.length > 0 && i < arr.length) {
        const node = queue.shift();
        if (i < arr.length) {
            if (arr[i] !== null && arr[i] !== undefined) {
                node.left = new TreeNode(arr[i]);
                queue.push(node.left);
            }
            i++;
        }
        if (i < arr.length) {
            if (arr[i] !== null && arr[i] !== undefined) {
                node.right = new TreeNode(arr[i]);
                queue.push(node.right);
            }
            i++;
        }
    }
    return root;
}

function treeToArray(root) {
    if (!root) return [];
    const result = [];
    const queue = [root];
    while (queue.length > 0) {
        const node = queue.shift();
        if (node === null || node === undefined) {
            result.push(null);
        } else {
            result.push(node.val);
            queue.push(node.left !== undefined ? node.left : null);
            queue.push(node.right !== undefined ? node.right : null);
        }
    }
    while (result.length > 0 && result[result.length - 1] === null) {
        result.pop();
    }
    return result;
}

function arrayToGraphNode(adjList) {
    if (!adjList || adjList.length === 0) return null;
    const nodes = adjList.map((_, i) => new GraphNode(i + 1));
    for (let i = 0; i < adjList.length; i++) {
        nodes[i].neighbors = adjList[i].map(j => nodes[j - 1]);
    }
    return nodes[0];
}

function graphToAdjList(node) {
    if (!node) return [];
    const visited = new Map();
    const queue = [node];
    while (queue.length > 0) {
        const curr = queue.shift();
        if (visited.has(curr.val)) continue;
        visited.set(curr.val, curr);
        for (const neighbor of curr.neighbors) {
            if (!visited.has(neighbor.val)) queue.push(neighbor);
        }
    }
    const result = new Array(visited.size);
    for (const [val, n] of visited) {
        result[val - 1] = n.neighbors.map(nb => nb.val);
    }
    return result;
}

export {
    ListNode, TreeNode, GraphNode,
    arrayToList, listToArray,
    arrayToTree, treeToArray,
    arrayToGraphNode, graphToAdjList,
};
