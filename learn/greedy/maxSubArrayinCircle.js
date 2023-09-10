/**
 * https://leetcode.com/problems/maximum-sum-circular-subarray
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
  let currMax = nums[0], currMin = nums[0]
  let globalMax = nums[0], globalMin = nums[0]
  let sum = nums[0]
  for (let i = 1; i < nums.length; i++) {
    currMax = Math.max(nums[i], currMax + nums[i])
    globalMax = Math.max(globalMax, currMax)

    currMin = Math.min(nums[i], currMin + nums[i])
    globalMin = Math.min(globalMin, currMin)
    sum += nums[i]
  }

  if (globalMax <= 0) {
    return globalMax
  } else {
    nums.reduce((prev, curr) => prev + curr, 0)
    return Math.max(globalMax, sum - globalMin)
  }
};

