// https://leetcode.com/problems/insert-into-a-binary-search-tree/

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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
  if (!root) {
    return new TreeNode(val)
  }

  if (val < root.val) {
    root.left = insertIntoBST(root.left, val)
  } else {
    root.right = insertIntoBST(root.right, val)
  }

  return root
};


var insertIntoBST2 = function(root, val) {
  if (!root) {
    return new TreeNode(val)
  }

  let curr = root
  while (true) {
    if (val < curr.val) {
      if (!curr.left) {
        curr.left = new TreeNode(val)
        return root
      }
      curr = curr.left
    } else {
      if (!curr.right) {
        curr.right = new TreeNode(val)
        return root
      }
      curr = curr.right
    }
  }
};