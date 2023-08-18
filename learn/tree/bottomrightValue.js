// https://leetcode.com/problems/find-bottom-left-tree-value/

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
var findBottomLeftValue2 = function(root) {
  
  let prelevel = 0
  let q = [[root, 1]]
  let firstEntry
  let k = 0
  while (k < q.length) {
    let [curr, level] = q[k++]

    if (prelevel < level) {
      firstEntry = curr.val
      prelevel = level
      // console.log(firstEntry)
    }

    if (curr.left) {
      q.push([curr.left, level + 1])
    }

    if (curr.right) {
      q.push([curr.right, level + 1])
    }
  }
  return firstEntry
};


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
var findBottomLeftValue = function(root) {
  let q = [root]
  let leftEntry
  let k = 0
  while (k < q.length) {
    leftEntry = q[k]

    if (leftEntry.right) {
      q.push(leftEntry.right)
    }

    if (leftEntry.left) {
      q.push(leftEntry.left)
    }
    k++
  }
  return leftEntry.val
};