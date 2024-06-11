// https://leetcode.com/problems/binary-tree-preorder-traversal/

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
 * @return {number[]}
 */
const preorderTraversal = function (root) {
  const result = []

  let curr = root
  const stack = []
  while (curr || stack.length > 0) {
    if (curr) {
      stack.push(curr.right)
      curr = curr.left
    } else {
      curr = stack.pop()
      result.push(curr.val)
    }
  }

  return result
}
