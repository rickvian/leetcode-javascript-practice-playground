/**
 * 572. Subtree of Another Tree
 * https://leetcode.com/problems/subtree-of-another-tree/
 * Difficulty: Easy
 *
 * Given the roots of two binary trees root and subRoot, return true if there is a subtree of
 * root with the same structure and node values of subRoot and false otherwise.
 *
 * A subtree of a binary tree tree is a tree that consists of a node in tree and all of this
 * node's descendants. The tree tree could also be considered as a subtree of itself.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  // Step 1: serialize each tree into a canonical string so subtree check becomes a substring check
  // e.g. [3,4,5,1,2] => ",3,,4,,1,#,#,,2,#,#,,5,#,#"  and [4,1,2] => ",4,,1,#,#,,2,#,#"
  return traverse(root).includes(traverse(subRoot));
  function traverse(node) {
    // Step 2: use "#" for nulls and comma-delimit values to prevent false matches like val=1 inside val=12
    // e.g. node=null => "#",  node=4 => ",4,<left>,<right>"
    return !node
      ? "#"
      : `,${node.val},${traverse(node.left)},${traverse(node.right)}`;
  }
};

var isSubtreeAlternative = function (root, subRoot) {
  // Step 1: empty subRoot matches everything — a null tree is a subtree of any tree by definition
  // e.g. subRoot=null, root=anything  =>  true
  if (subRoot === null) return true;

  // Step 2: non-null subRoot can't be a subtree of a missing node
  // e.g. root=null, subRoot=[1,2]  =>  false
  if (root === null) return false;

  // Step 3: check if the current node is the root of an identical subtree before going deeper
  // e.g. root=[4,1,2], subRoot=[4,1,2]  =>  isSameTree returns true, short-circuit
  if (isSameTree(root, subRoot)) return true;

  // Step 4: if not matched here, search left and right subtrees — subRoot could start at any node
  // e.g. root=[3,4,5], subRoot=[4,1,2]  =>  try root.left=[4,...] which matches
  return (
    isSubtreeAlternative(root.left, subRoot) ||
    isSubtreeAlternative(root.right, subRoot)
  );

  function isSameTree(tree1, tree2) {
    // Step 5: both null means identical structure at this position
    if (tree1 === null && tree2 === null) return true;

    // Step 6: one null, one not — shapes diverge, can't be the same
    // e.g. tree1=null, tree2=node(1)  =>  false
    if (tree1 === null || tree2 === null) return false;

    // Step 7: values must match and both subtrees must also match recursively
    // e.g. tree1.val=4, tree2.val=4 and children equal  =>  true
    return (
      tree1.val === tree2.val &&
      isSameTree(tree1.left, tree2.left) &&
      isSameTree(tree1.right, tree2.right)
    );
  }
};
