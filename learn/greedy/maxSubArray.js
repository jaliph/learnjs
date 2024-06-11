/**
 * https://leetcode.com/problems/maximum-subarray/
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  let currSum = nums[0]
  let maxSum = nums[0]

  for (let i = 1; i < nums.length; i++) {
    currSum = Math.max(nums[i], currSum + nums[i])
    maxSum = Math.max(maxSum, currSum)
  }

  return maxSum
}
