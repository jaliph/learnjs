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
let widthOfBinaryTree = function (root) {
  if (!root) {
    return 0
  }
  const q = [[root, 0]]
  let maxWidth = 0; let l = 0; let r = 0
  while (q.length) {
    const size = q.length
    const startIdx = q[0][1]
    for (let i = 0; i < size; ++i) {
      const [node, idx] = q.shift()
      if (i === 0) {
        l = idx
      }
      if (i === size - 1) {
        r = idx
      }
      // Basically, just subtracting the initial node index value with each node index, so after subtraction, the width will still be the same and we won't get NaN as a result.
      const subIdx = idx - startIdx
      if (node.left !== null) {
        q.push([node.left, 2 * subIdx + 1])
      }
      if (node.right !== null) {
        q.push([node.right, 2 * subIdx + 2])
      }
    }
    maxWidth = Math.max(maxWidth, r - l + 1)
  }
  return maxWidth
};

const widthOfBinaryTree2 = function (root) {
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
