// https://leetcode.com/problems/symmetric-tree/submissions/

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
var isSymmetric = function(root) {
  const isSymmetricRecur = (l, r) => {
    if (!l && !r) {
      return true
    }
    if (!l || !r) {
      return false
    }

    return (l.val === r.val && 
      isSymmetricRecur(l.left, r.right) && 
      isSymmetricRecur(l.right, r.left))
  }

  return isSymmetricRecur(root.left, root.right)
};