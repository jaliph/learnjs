// https://leetcode.com/problems/minimum-path-sum/submissions/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const r = grid.length
  const c = grid[0].length
  const dp = Array(r).fill().map(() => Array(c).fill(0))

  dp[0][0] = grid[0][0]

  for (let i = 1; i < r; i++) {
    dp[i][0] = grid[i][0] + dp[i - 1][0]
  }

  for (let i = 1; i < c; i++) {
    dp[0][i] = grid[0][i] + dp[0][i - 1]
  }

  for (let i = 1; i < r; i++) {
    for (let j = 1; j < c; j++) {
      dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1])
    }
  }

  // console.log(dp)
  return dp[r - 1][c - 1]
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const r = grid.length
  const c = grid[0].length
  let prev = Array(c).fill(0)

  prev[0] = grid[0][0]

  for (let i = 1; i < c; i++) {
    prev[i] = grid[0][i] + prev[i - 1]
  }

  let dp
  for (let i = 1; i < r; i++) {
    dp = Array(c).fill(0)
    dp[0] = grid[i][0] + prev[0]

    for (let j = 1; j < c; j++) {
      dp[j] = grid[i][j] + Math.min(prev[j], dp[j - 1])
    }
    prev = dp
  }

  // console.log(dp)
  return prev[c - 1]
};