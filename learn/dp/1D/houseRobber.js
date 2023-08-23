// https://leetcode.com/problems/house-robber

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 1) {
    return nums[0]
  }

  let prev2 = nums[0]
  let prev1 = Math.max(nums[0], nums[1])
  let temp
  for (let i = 2; i < nums.length; i++) {
    temp = prev1
    prev1 = Math.max(prev1, prev2 + nums[i])
    prev2 = temp
  }

  return prev1
};