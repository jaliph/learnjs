// https://leetcode.com/problems/n-queens-ii/
/**
 * @param {number} n
 * @return {number}
 */
const totalNQueens = function (n) {
  const grid = Array(n).fill().map(() => Array(n).fill('.'))

  // Print2D(grid)

  const canPlaceQueen = (i, j) => {
    // check row
    for (let x = 0; x <= i; x++) {
      if (grid[x][j] === 'Q') {
        return false
      }
    }

    // check col
    for (let x = 0; x <= j; x++) {
      if (grid[i][x] === 'Q') {
        return false
      }
    }

    // check diaganals
    // left diagonal
    let x = i
    let y = j
    while (x >= 0 && y >= 0) {
      if (grid[x][y] === 'Q') {
        return false
      }
      x--
      y--
    }

    x = i
    y = j
    while (x >= 0 && y < n) {
      if (grid[x][y] === 'Q') {
        return false
      }
      x--
      y++
    }

    return true
  }

  const solve = (i) => {
    if (i === n) {
      return 1
    }

    let ans = 0
    for (let y = 0; y < n; y++) {
      if (canPlaceQueen(i, y)) {
        grid[i][y] = 'Q'
        ans += solve(i + 1)
        grid[i][y] = '.'
      }
    }
    return ans
  }

  return solve(0)
}
