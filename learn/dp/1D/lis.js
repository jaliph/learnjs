// https://leetcode.com/problems/longest-increasing-subsequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function (nums) {
  let max = 1
  const LIS = Array(nums.length).fill(1)

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        LIS[i] = Math.max(LIS[i], 1 + LIS[j])
        max = Math.max(max, LIS[i])
      }
    }
  }

  return max
}
