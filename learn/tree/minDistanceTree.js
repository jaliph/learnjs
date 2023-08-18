// https://leetcode.com/problems/minimum-distance-between-bst-nodes

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
var minDiffInBST = function(root) {
  let res = []
  let curr = root
  let stack = []
  while (curr || stack.length > 0) {
    while(curr) {
      stack.push(curr)
      curr = curr.left
    }
    curr = stack.pop()
    res.push(curr.val)
    curr = curr.right
  }

  let min = Infinity
  for (let i = 1; i < res.length; i++) {
    min = Math.min(min, res[i] - res[i - 1])
  }

  return min
};