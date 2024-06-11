// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/

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
const zigzagLevelOrder = function (root) {
  const results = []

  if (!root) {
    return results
  }

  const q = [root]

  let k = 0
  let level
  let flag = 1
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
    if (flag > 0) {
      results.push(level)
    } else {
      results.push(level.reverse())
    }
    flag = flag * -1
  }

  return results
}
