https://leetcode.com/problems/sudoku-solver/description/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  const r = board.length
  const c = board[0].length

  const isValidPos = (val, x, y) => {
    // console.log('checking ', val, ' at ', x, y)
    for (let i = 0; i < r; i++) {
      if (board[i][y] == val || board[x][i] == val) {
        return false
      }
    }

    let sx = Math.floor(x / 3) * 3
    let sy = Math.floor(y / 3) * 3
    for (let nx = sx; nx < sx + 3; nx++) {
      for (let ny = sy; ny < sy + 3; ny++) {
        if (board[nx][ny] == val) {
          return false
        }
      } 
    }

    return true
  }

  let solve = (i, j) => {
    // base
    if (i == r) {
      return true /// solved it
    }

    // recur

    // reached column end
    if (j == c) {
      return solve(i + 1, 0) // start from the next line
    }

    // if already filled
    if (board[i][j] !== '.') {
      return solve(i, j + 1)
    }

    for (let ans = 1; ans <= 9; ans++) {
      if (isValidPos(ans, i, j)) {
        board[i][j] = ans
        let subSolve = solve(i, j + 1)
        if (subSolve) {
          return true
        }
      }
    }
    board[i][j] = '.'
    return false
  }
  solve(0, 0)
  return board
};

const Print2D = arr => arr.forEach(o => console.log(...o))

const main = () => {
  board = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ]

  Print2D(solveSudoku(board))
}

main()