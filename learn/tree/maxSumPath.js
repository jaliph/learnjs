// https://leetcode.com/problems/binary-tree-maximum-path-sum/

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
 * @return {number}
 */
const maxPathSum = function (root) {
  let maxSum = -Infinity
  const maxPathRecur = (node) => {
    if (!node) {
      return 0
    }

    let left = maxPathRecur(node.left)
    let right = maxPathRecur(node.right)

    left = Math.max(left, 0)
    right = Math.max(right, 0)

    maxSum = Math.max(maxSum, left + right + node.val)

    return node.val + Math.max(left, right)
  }
  maxPathRecur(root)
  return maxSum
}
