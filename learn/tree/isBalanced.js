// https://leetcode.com/problems/balanced-binary-tree/submissions/1022646218/
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
 * @return {boolean}
 */
const isBalanced = function (root) {
  let balance = true
  const findDepthRecur = (node) => {
    if (!node) {
      return 0
    }

    const left = findDepthRecur(node.left)
    const right = findDepthRecur(node.right)

    // console.log(left, right)
    balance = balance && Math.abs(left - right) <= 1

    return 1 + Math.max(left, right)
  }
  findDepthRecur(root)
  return balance
}
