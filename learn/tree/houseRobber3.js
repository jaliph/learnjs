// https://leetcode.com/problems/house-robber-iii/

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
var rob = function(root) {

  // returns [with root, without root]
  const robRecur = (node) => {
    if (!node) {
      return [0, 0]
    }

    let left = robRecur(node.left)
    let right = robRecur(node.right)

    // console.log(node.val)
    // console.log([node.val + left[1] + right[1], Math.max(...left) + Math.max(...right)])
    return [node.val + left[1] + right[1], Math.max(...left) + Math.max(...right)]
  }

  return Math.max(...robRecur(root))
};

