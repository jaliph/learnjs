// https://leetcode.com/problems/path-sum

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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  const hasSumRecur = (node, target) => {
    // console.log(node.val, target)
    if (!node.left && !node.right && target === node.val) {
      return true
    }

    if (!node.left && !node.right) {
      return false
    }

    let left = false, right = false 
    if (node.left) {
     left = hasSumRecur(node.left, target - node.val)
    }
    if (node.right) {
     right = hasSumRecur(node.right, target - node.val)
    }
    // console.log(left, right)
    return left || right
  }

  if (!root) return false 
  return hasSumRecur(root, targetSum)
};

