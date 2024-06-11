// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function (nums) {
  const createNodes = (l, r) => {
    if (l > r) {
      return null
    }

    const m = l + ~~((r - l) / 2)
    const root = new TreeNode(nums[m])
    root.left = createNodes(l, m - 1)
    root.right = createNodes(m + 1, r)
    return root
  }

  return createNodes(0, nums.length - 1)
}
