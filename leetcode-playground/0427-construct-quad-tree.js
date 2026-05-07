/**
 * Given an n x n binary matrix grid, return a Quad-Tree representation.
 *
 * https://leetcode.com/problems/construct-quad-tree/description/
 */

class Node {
    constructor(val, isLeaf, topLeft, topRight, bottomLeft, bottomRight) {
        this.val = val;
        this.isLeaf = isLeaf;
        this.topLeft = topLeft === undefined ? null : topLeft;
        this.topRight = topRight === undefined ? null : topRight;
        this.bottomLeft = bottomLeft === undefined ? null : bottomLeft;
        this.bottomRight = bottomRight === undefined ? null : bottomRight;
    }
}

var construct = function(grid) {
    // implement
};

export { Node, construct }
