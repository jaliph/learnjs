// https://leetcode.com/problems/binary-tree-level-order-traversal

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
 * @return {number[][]}
 */
const levelOrder = function (root) {
  const results = []

  if (!root) {
    return results
  }

  const q = [root]

  let k = 0
  let level
  while (k < q.length) {
    const length = q.length - k
    level = []
    for (let i = 0; i < length; i++) {
      level.push(q[k].val)
      if (q[k].left) {
        q.push(q[k].left)
      }
      if (q[k].right) {
        q.push(q[k].right)
      }
      k++
    }
    results.push(level)
  }

  return results
}
