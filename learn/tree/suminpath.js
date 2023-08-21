// https://leetcode.com/problems/sum-root-to-leaf-numbers/
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
var sumNumbers = function(root) {
  const calcSums = (node, sumsofar) => {
    if (!node) {
      return 0
    }

    let newSum = (sumsofar * 10) + node.val
    if (!node.left && !node.right) {
      return newSum
    }

    return calcSums(node.left, newSum) + calcSums(node.right, newSum)
  }
  
  
  return calcSums(root, 0)
};