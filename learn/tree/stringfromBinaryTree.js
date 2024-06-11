// https://leetcode.com/problems/construct-string-from-binary-tree/
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
 * @return {string}
 */
const tree2str = function (root) {
  const results = []
  const stringRecur = (root) => {
    if (!root) {
      return
    }

    results.push('(')
    results.push(root.val)
    if (!root.left && root.right) {
      [
        results.push('()')
      ]
    }
    stringRecur(root.left)
    stringRecur(root.right)
    results.push(')')
  }

  stringRecur(root)
  return results.join('').slice(1, -1)
}
