// https://leetcode.com/problems/maximum-depth-of-binary-tree/

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
const maxDepth = function (root) {
  const calcDepth = (root) => {
    if (!root) return 0

    const left = calcDepth(root.left)
    const right = calcDepth(root.right)

    return 1 + Math.max(left, right)
  }
  return calcDepth(root)
}
