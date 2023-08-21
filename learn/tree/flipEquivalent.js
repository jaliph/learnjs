// https://leetcode.com/problems/flip-equivalent-binary-trees

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function(root1, root2) {
    
  const flipRecur = (r1, r2) => {
    if (!r1 && !r2) {
      return true
    }

    if (!r1 || !r2) {
      return false
    }

    return r1.val == r2.val && 
      ((flipRecur(r1.left, r2.left) && flipRecur(r1.right , r2.right)) ||
      (flipRecur(r1.left, r2.right) && flipRecur(r1.right , r2.left)))
  } 

  return flipRecur(root1, root2)
};