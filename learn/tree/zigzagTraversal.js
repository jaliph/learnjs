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
var zigzagLevelOrder = function(root) {
  let results = []

  if (!root) {
    return results
  }

  let q = [root]

  let k = 0
  let level
  let flag = 1
  while (k < q.length) {
    let length = q.length - k
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
};