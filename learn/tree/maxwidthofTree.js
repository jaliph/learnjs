// https://leetcode.com/problems/maximum-width-of-binary-tree/
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
const widthOfBinaryTree = function (root) {
  const q = [[root, 1, 0]]
  let preLevel = 0
  let maxWidth = 1
  let firstNode = 1
  let k = 0
  while (k < q.length) {
    const [curr, level, num] = q[k++]

    if (preLevel < level) {
      firstNode = num
      preLevel = level
    }

    // console.log(firstNode, num)
    maxWidth = Math.max(maxWidth, num - firstNode + 1)
    // console.log(maxWidth, num)
    if (curr.left) {
      q.push([curr.left, level + 1, (num * 2) - 1])
    }

    if (curr.right) {
      q.push([curr.right, level + 1, (num * 2)])
    }
  }

  return maxWidth
}
