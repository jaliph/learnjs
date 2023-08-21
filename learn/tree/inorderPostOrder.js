// https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  let inMap = new Map()
  for (let [idx, n] of inorder.entries()) {
    inMap.set(n, idx)
  }

  const nodeRecur = (l, r) => {
    if (l > r) {
      return null
    }

    let root = new TreeNode(postorder.pop())
    let idx = inMap.get(root.val)
    root.right = nodeRecur(idx + 1, r)
    root.left = nodeRecur(l, idx - 1)
      
    return root
  }

  return nodeRecur(0, inorder.length - 1)
};


const main = () => {
  inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
  console.log('Tree is ', buildTree(inorder, postorder))
}

main()

function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }