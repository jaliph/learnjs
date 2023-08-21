// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let parent = new Map()
  let depth = new Map()
  

  const dfs = (curr, par) => {
    if (!curr) {
      return
    }
    parent.set(curr, par)
    depth.set(curr, depth.get(par) + 1)

    dfs(curr.left, curr)
    dfs(curr.right, curr)
  } 
  depth.set(null, -1)
  dfs(root, null)
  

  if (depth.get(p) > depth.get(q)) {
    [p, q] = [q, p]
  }

  let diff = depth.get(q) - depth.get(p)

  while (diff) {
    q = parent.get(q)
    diff--
  }

  while (p != q) {
    p = parent.get(p)
    q = parent.get(q)
  }

  return p
};
