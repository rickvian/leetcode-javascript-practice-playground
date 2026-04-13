/**
 * Binary Tree Zigzag Level Order Traversal
 *
 * Given the root of a binary tree, return the zigzag level order traversal of its nodes' values.
 * (i.e., from left to right, then right to left for the next level and alternate between).
 *
 * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/
 *
 * @param {TreeNode} root - Root node of the binary tree
 * @return {number[][]} - 2D array with zigzag level order traversal
 */
var zigzagLevelOrder = function (root) {

    //         3
    //   9         10
    // 1         15    17

    // processing per level.

    // left, right

    // [3] [9, 10] [1, 15, 17]

    // performing breath first search, normally using queue 

    // queue: [ 1, 15, 17] // process 2nd layer

    // processing:  [1, 15, 17] 
    // each process gather the result.

    // for the zig zag logic, each level we check if its leftToRight level or not, 
    // if not then we have to reverse the layer before pushing to result.

    // result is array of values, not nodes.


    if (!root) return []
    // prepare values

    let result = []
    let queue = [root]
    let leftToRight = true


    while (queue.length > 0) {
        // process all queue item in this level 
        let levelSize = queue.length;
        let currentLevelVal = new Array(levelSize);
        let nextQueue = []

        for (let i = 0; i < levelSize; i++) {
            // process each nodes in queue

            let node = queue[i]

            // placing items based on the direction for this level.
            let placementIndex = leftToRight ? i : levelSize - 1 - i
            currentLevelVal[placementIndex] = node.val

            if (node.left) nextQueue.push(node.left)
            if (node.right) nextQueue.push(node.right)
            // [4,5,6,7] // collected in order..

            // why not push to queue? we want to avoid shift items from queue to clear for next round, we can just use another memory.
        }

        result.push(currentLevelVal)
        queue = nextQueue // update queue with next queue, effectively prepare next items, without shifts.
        leftToRight = !leftToRight // prepare ltr direction for next level
    }

    return result;

};

export { zigzagLevelOrder };