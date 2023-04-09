// https://leetcode.com/problems/trapping-rain-water/

/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function (height) {
  console.log(' Calculating for ', height)
  const n = height.length
  let maxWater = 0
  const dp = [...new Array(2)].map(() => Array(n).fill(0))

  dp[0][0] = height[0]
  dp[1][n - 1] = height[n - 1]

  // Find the max heights from left and rights
  for (let i = 1; i < n; i++) {
    dp[0][i] = Math.max(dp[0][i - 1], height[i])
    dp[1][n - i - 1] = Math.max(dp[1][n - i], height[n - i - 1])
  }

  // for each i -- Min(LeftMax , RightMax) - Height
  for (let i = 0; i < n; i++) {
    maxWater += (Math.min(dp[0][i], dp[1][i]) - height[i] > 0) ? Math.min(dp[0][i], dp[1][i]) - height[i] : 0
  }
  return maxWater
}

console.log('Trapped water is -> ', trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
