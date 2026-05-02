/**
 * Given a binary tree, determine if it is height-balanced.
 *
 * A height-balanced binary tree is a binary tree in which the left and right subtrees of
 * every node differ in height by at most one.
 *
 * https://leetcode.com/problems/balanced-binary-tree/description/
 *
 * @param {TreeNode} root - The root of the binary tree
 * @return {boolean} True if the tree is height-balanced, false otherwise
 */
var isBalanced = function (root) {
  // implement
  /*
              1
        2          3
     4                 5   
  8                        9

    4: difference is 1
    2: difference is left 2 and right 0, violated, return false
    */
  //    1
  // 2
  // this ok

  function dfs(node) {
    if (!node) {
      return {
        isBalanced: true,
        height: 0,
      };
    }

    const leftHeightInfo = dfs(node.left);
    const rightHeightInfo = dfs(node.right);

    const isBalanced =
      leftHeightInfo.isBalanced &&
      rightHeightInfo.isBalanced &&
      Math.abs(leftHeightInfo.height - rightHeightInfo.height) <= 1;

    return {
      isBalanced: isBalanced,
      height: 1 + Math.max(leftHeightInfo.height, rightHeightInfo.height),
    };
  }

  const rootBalance = dfs(root);

  return rootBalance.isBalanced;
};

export { isBalanced };
