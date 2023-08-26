// https://leetcode.com/problems/longest-increasing-subsequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  let longestLIS = 0
  const dp = Array(nums.length + 1).fill(-1)
  dp[nums.length] = 0
  const dfs = (i) => {
    if (dp[i] != -1) {
      return dp[i]
    }
    
    dp[i] = 1
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        dp[i] = Math.max(dp[i], 1 + dfs(j))
      }
    }
    longestLIS = Math.max(longestLIS, dp[i])
    return dp[i]
  }
  for (let i = 0; i < nums.length; i++) {
    dfs(i)
  }
  return longestLIS
};
// [9,2,5,3,7,101,18]

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS3 = function(nums) {
  const dp = []
  let longestLIS = 0
  for (let i = nums.length - 1; i >= 0; i--) {
    let LIS = 1
    for (let j = i + 1; j < nums.length; j++) {
      if (arr[j] > arr[i]) {
        LIS = Math.max(LIS, 1 + dp[j])
      }
    }
    dp[i] = LIS
    longestLIS = Math.max(longestLIS, dp[i])
  }
  return longestLIS
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS2 = function(nums) {
  const LIS = Array(nums.length).fill(1)

  let max = 0
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        LIS[i] = Math.max(LIS[i], 1 + LIS[j])
        max = Math.max(max, LIS[i])
      }
    }
  }
  return max
};


const main = () => {
//   nums = [10,9,2,5,3,7,101,18]
//   console.log('the longest increasing subsequence is ', lengthOfLIS(nums))
//   console.log('the longest increasing subsequence is ', lengthOfLIS2(nums))

//   nums = [7,7,7,7,7,7,7]
//   console.log('the longest increasing subsequence is ', lengthOfLIS(nums))

//   nums = [1,3,6,7,9,4,10,5,6]
//   console.log('the longest increasing subsequence is ', lengthOfLIS(nums))

  nums = [9,2,5,3,7,101,18]
  console.log('the longest increasing subsequence is ', lengthOfLIS(nums))
  console.log('the longest increasing subsequence is ', lengthOfLIS2(nums))
}

main()