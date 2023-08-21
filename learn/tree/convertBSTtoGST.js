// https://leetcode.com/problems/convert-bst-to-greater-tree/

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
 * @return {TreeNode}
 */
var convertBST = function(root) {

  let sum = 0
  const dfs = (node) => {
    if (!node) {
      return null
    }

    dfs(node.right)
    // let tmp = node.val
    sum += node.val
    // console.log(sum, node.val)
    node.val = sum
    dfs(node.left)
  }

  dfs(root)
  return root
};