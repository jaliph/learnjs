// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = function (root) {
  const res = []
  const preOrder = (node) => {
    if (!node) {
      res.push('N')
      return
    }

    res.push(node.val + '')
    preOrder(node.left)
    preOrder(node.right)
  }
  preOrder(root)
  // console.log(res)
  return res.join(',')
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = function (data) {
  const res = data.split(',')
  let i = 0
  // console.log(res)

  const dfs = () => {
    if (res[i] == 'N') {
      i++
      return null
    }

    const node = new TreeNode(parseInt(res[i]))
    i++
    node.left = dfs()
    node.right = dfs()
    // console.log(node)
    return node
  }

  return dfs()
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
