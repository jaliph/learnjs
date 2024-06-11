/**
 * https://leetcode.com/problems/minimize-maximum-of-array/
 * @param {number[]} nums
 * @return {number}
 */
const minimizeArrayValue = function (nums) {
  let res = nums[0]; let total = nums[0]

  for (let i = 1; i < nums.length; i++) {
    total = total + nums[i]
    res = Math.max(res, Math.ceil(total / (i + 1)))
  }

  return res
}
