// https://leetcode.com/problems/longest-common-subsequence/
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  

  let prev = Array(text2.length + 1).fill(0)
  let dp
  for (let i = 0; i < text1.length; i++) {
    dp = Array(text2.length + 1).fill(0)
    for (let j = 0; j < text2.length; j++) {
      if (text1[i] === text2[j]) {
        dp[j + 1] = 1 + prev[j]
      } else {
        dp[j + 1] = Math.max(dp[j], prev[j + 1])
      }
    }
    prev = dp
  }

  return dp[text2.length]
};