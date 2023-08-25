// https://leetcode.com/problems/n-queens/

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
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


  const results = []
  const solve = (i) => {
    if (i === n) {
      // console.log('called..')
      // Print2D(grid)
      let solutn = grid.map((x) => {
        return x.join('')
      })
      results.push(solutn)
      return
    }

    for (let y = 0; y < n; y++) {
      if (canPlaceQueen(i, y)) {
        grid[i][y] = 'Q'
        solve(i + 1)
        grid[i][y] = '.'
      }
    }
    return false
  }

  solve(0)

  return results
};