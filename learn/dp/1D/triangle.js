// https://leetcode.com/problems/triangle/

/**
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = function (triangle) {
  const dp = Array(triangle.length + 1).fill(0)

  for (let j = triangle.length - 1; j >= 0; j--) {
    // console.log(triangle[j])
    for (const [i, n] of triangle[j].entries()) {
      // console.log(n)
      dp[i] = n + Math.min(dp[i], dp[i + 1])
    }
    // console.log(dp)
  }

  return dp[0]
}
