// https://leetcode.com/problems/check-completeness-of-a-binary-tree/
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
var isCompleteTree = function(root) {
  
  let q = [root]

  let k = 0
  let curr
  while (k < q.length) {
    curr = q[k++]
    if (curr) {
      q.push(curr.left)
      q.push(curr.right)
    } else {
      while (k < q.length) {
        if (q[k++]) {
          return false
        }
      }
    }
  }
  return true
};