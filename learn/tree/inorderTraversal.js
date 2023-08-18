// https://leetcode.com/problems/binary-tree-inorder-traversal

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
var inorderTraversal = function(root) {
  let result = []
  const inorderRecur = (root) => {
    if (!root) {
      return
    } 
    inorderRecur(root.left)
    result.push(root.val)
    inorderRecur(root.right)
  }

  inorderRecur(root)
  return result
};



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
var inorderTraversalIterative = function(root) {
  let result = []
  let curr = root
  let stack = []
  while (curr || stack.length > 0) {
    while(curr) {
      stack.push(curr)
      curr = curr.left
    }
    curr = stack.pop()
    result.push(curr.val)
    curr = curr.right
  }

  return result
};