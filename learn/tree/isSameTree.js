// https://leetcode.com/problems/same-tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = function (p, q) {
  const checkIsSame = (root1, root2) => {
    if (!root1 && !root2) {
      return true
    }
    if (!root1 || !root2 || root1.val != root2.val) {
      return false
    }
    const left = checkIsSame(root1.left, root2.left)
    const right = checkIsSame(root1.right, root2.right)
    return left && right
  }

  return checkIsSame(p, q)
}
