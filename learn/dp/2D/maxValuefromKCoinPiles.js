/**
 * https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */
var maxValueOfCoins = function(piles, k) {
  const n = piles.length
  const dp = Array(piles.length + 1).fill().map(() => Array(k + 1).fill(-1))

  const maxValueRecur = (i, k) => {
    if (i == n) {
      return 0
    }
    if (dp[i][k] != -1) {
      return dp[i][k]
    }

    // i can skip ith pile
    dp[i][k] = maxValueRecur(i + 1, k)

    // use the ith pile
    let coins = 0
    for (let j = 0; j < Math.min(piles[i].length, k); j++) {
      coins += piles[i][j]
      dp[i][k] = Math.max(dp[i][k], coins + maxValueRecur(i + 1, k - j - 1))
    }
    
    return dp[i][k]
  }

  return maxValueRecur(0, k)
};

