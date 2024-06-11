// https://leetcode.com/problems/binary-tree-right-side-view
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
const rightSideView = function (root) {
  const results = []

  if (!root) {
    return results
  }

  const q = [root]

  let k = 0
  while (k < q.length) {
    const length = q.length - k
    for (let i = 0; i < length; i++) {
      if (i == length - 1) {
        results.push(q[k].val)
      }
      if (q[k].left) {
        q.push(q[k].left)
      }
      if (q[k].right) {
        q.push(q[k].right)
      }
      k++
    }
  }

  return results
}
