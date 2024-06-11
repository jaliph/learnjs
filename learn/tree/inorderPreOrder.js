// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = function (preorder, inorder) {
  const inMap = new Map()
  for (const [idx, n] of inorder.entries()) {
    inMap.set(n, idx)
  }
  let k = 0

  const nodeRecur = (l, r) => {
    if (l > r) {
      return null
    }

    const root = new TreeNode(preorder[k++])
    const idx = inMap.get(root.val)
    root.left = nodeRecur(l, idx - 1)
    root.right = nodeRecur(idx + 1, r)

    return root
  }

  return nodeRecur(0, inorder.length - 1)
}
