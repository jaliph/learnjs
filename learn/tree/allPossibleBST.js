// https://leetcode.com/problems/all-possible-full-binary-trees

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
const allPossibleFBT = function (n) {
  const treeHash = new Map()

  treeHash.set(0, [])
  treeHash.set(1, [new TreeNode()])
  const populateBSTs = (n) => {
    if (treeHash.has(n)) {
      return treeHash.get(n)
    }

    const res = []
    for (let i = 0; i < n; i++) {
      const j = n - i - 1
      const left = populateBSTs(i)
      const right = populateBSTs(j)
      // console.log(left, right)
      for (const x of left) {
        for (const y of right) {
          res.push(new TreeNode(0, x, y))
        }
      }
    }
    treeHash.set(n, res)
    return treeHash.get(n)
  }

  return populateBSTs(n)
}
