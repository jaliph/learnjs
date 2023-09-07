/**
 * https://leetcode.com/problems/longest-increasing-path-in-a-matrix/
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
  const r = matrix.length
  const c = matrix[0].length

  const dp = new Map()
  const dfs = (i, j, prev) => {
    if (i < 0 || j < 0 || i >= r || j >= c) {
      return 0
    }

    if (matrix[i][j] <= prev) {
      return 0
    }

    const key = `${i}#${j}`
    if (dp.has(key)) {
      return dp.get(key)
    }

    let res = 1
    res = Math.max(res, 1 + dfs(i + 1, j, matrix[i][j]))
    res = Math.max(res, 1 + dfs(i, j + 1, matrix[i][j]))
    res = Math.max(res, 1 + dfs(i - 1, j, matrix[i][j]))
    res = Math.max(res, 1 + dfs(i, j - 1, matrix[i][j]))

    dp.set(key, res)
    return res
  }

  let max = 0
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      max = Math.max(max, dfs(i, j, -1))
    }
  }

  return max
};