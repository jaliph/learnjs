

// https://leetcode.com/problems/combination-sum-iv/
var combinationSum4 = function(nums, target) {
  let dp = Array(target + 1).fill(0)
  dp[0] = 1
  for (let i = 1; i <= target; i++) {
    for (let n of nums) {
      if (n <= i) {
        dp[i] = dp[i] + dp[i - n]
      }
    }
  }
  return dp[target]
};


combinationSum4([1,2,3],4)