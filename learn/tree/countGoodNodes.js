// https://leetcode.com/problems/count-good-nodes-in-binary-tree/

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
const goodNodes = function (root) {
  const count = 0
  const countGoodTree = (node, maxSoFar) => {
    if (!node) return 0

    let count = 0
    if (node.val >= maxSoFar) {
      count++
    }
    maxSoFar = Math.max(maxSoFar, node.val)
    count += countGoodTree(node.left, maxSoFar)
    count += countGoodTree(node.right, maxSoFar)
    return count
  }

  return countGoodTree(root, root.val)
}
