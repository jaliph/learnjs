// https://leetcode.com/problems/subtree-of-another-tree

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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
  
  const isSame = (r, t) => {
    if (!r && !t) {
      return true
    }
    if (!r || !t || r.val != t.val) {
      return false
    }

    return isSame(r.left, t.left) && isSame(r.right, t.right)
  }

  if (!subRoot) {
    return true
  }

  if (!root) {
    return false
  }

  if (isSame(root, subRoot)) {
    return true
  } else {
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
  }
};