// https://leetcode.com/problems/unique-paths

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let prev = Array(n).fill(1)
  let dp
  for (let i = 1; i < m; i++) {
    dp = Array(n).fill(0)
    for (let j = 0; j < n; j++) {
      if (j == 0) {
        dp[j] = 1
      } else {
        dp[j] = dp[j - 1] + prev[j]
      }
    }
    prev = dp
  }

  return prev[n - 1]
};