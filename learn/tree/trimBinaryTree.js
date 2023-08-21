// https://leetcode.com/problems/trim-a-binary-search-tree/

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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function(root, low, high) {
  const trim = (node, low, high) => {
    if (!node) {
      return null
    }

    if (node.val < low) {
      return trim(node.right, low, high)
    } else if (node.val > high) {
      return trim(node.left, low, high)
    } else {
      node.left = trim(node.left, low, high)
      node.right = trim(node.right, low, high)
      return node
    }
  }

  return trim(root, low, high) 
};