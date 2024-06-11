// https://leetcode.com/problems/find-duplicate-subtrees
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
 * @return {TreeNode[]}
 */
const findDuplicateSubtrees = function (root) {
  const duplicateMap = new Map()
  const result = []
  let s = ''
  const duplicateFinder = (root) => {
    if (!root) {
      return 'null'
    }

    s = root.val + ':' + duplicateFinder(root.left) + ':' + duplicateFinder(root.right)
    if (duplicateMap.get(s) == 1) {
      result.push(root)
    }
    duplicateMap.set(s, (duplicateMap.get(s) || 0) + 1)

    return s
  }

  duplicateFinder(root)
  return result
}
