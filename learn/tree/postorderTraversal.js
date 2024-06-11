// https://leetcode.com/problems/binary-tree-postorder-traversal/

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
const postorderTraversal = function (root) {
  const result = []
  const stack = [[root, false]]
  while (stack.length > 0) {
    const [curr, visited] = stack.pop()
    if (curr) {
      if (visited) {
        result.push(curr.val)
      } else {
        stack.push([curr, true])
        stack.push([curr.right, false])
        stack.push([curr.left, false])
      }
    }
  }

  return result
}
