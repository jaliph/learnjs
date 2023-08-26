// https://leetcode.com/problems/integer-break
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  
  const dp = {1 : 1}

  for (let num = 2; num <= n; num++) {
    dp[num] = num == n ? 0 : num
    for (let i = 1; i < num; i++) {
      let val = dp[i] * dp[num - i]
      dp[num] = Math.max(dp[num], val)
    }
  }

  return dp[n]
};