// https://leetcode.com/problems/score-after-flipping-matrix

/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function(grid) {
  const ROW = grid.length
  const COL = grid[0].length
  const flipRow = (i) => {
    for (let c = 0; c < COL; c++) {
      grid[i][c] = 1 ^ grid[i][c]
    }
  }

  const flipCol = (j) => {
    for (let r = 0; r < ROW; r++) {
      grid[r][j] = 1 ^ grid[r][j]
    }
  }

  for (let r = 0; r < ROW; r++) {
    if (grid[r][0] === 0) {
      flipRow(r)
    }
  }

  // FOR EVERY COL
  let cnt1, cnt0
  for (let c = 0; c < COL; c++) {
    cnt0 = 0, cnt1 = 0
    for (let r = 0; r < ROW; r++) {
      if (grid[r][c] === 0) {
        cnt0++
      } else {
        cnt1++
      }
    }
    if (cnt1 < cnt0) {
      flipCol(c)
    }
  }

  let sum = 0
  for (let r = 0; r < ROW; r++) {
    for (let c = 0; c < COL; c++) {
      if (grid[r][c] === 1) {
        sum = sum + (1 << (COL - c - 1))
      }
    }
  }
  return sum
};

const Print2D = arr => arr.forEach(o => console.log(...o))

const main = () => {
  grid = [[0,0,1,1],[1,0,1,0],[1,1,0,0]]
  Print2D(grid)
  console.log('Grid max size after max flips is ', matrixScore(grid))
}

main()