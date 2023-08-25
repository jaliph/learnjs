// https://leetcode.com/problems/house-robber

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob2 = function(nums) {
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

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let prev1 = 0, prev2 = 0

  for (n of nums) {
    let tempMax = Math.max(n + prev2, prev1)
    prev2 = prev1
    prev1 = tempMax
  }

  return tempMax
};