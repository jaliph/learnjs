


/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let r = board.length
    let c = board[0].length

    const isNotValidPos = (val, x, y) => {
      console.log('checking ', val, ' at ', x, y)
      for (let i = 0; i < r; i++) {
        if (i == x) {
          continue
        }
        if (board[i][y] === val) {
          console.log('came here')
          return true
        }
      }

      for (let j = 0; j < c; j++) {
        if (j == y) {
          continue
        }
        if (board[x][j] === val) {
          console.log('came here2')
          return true
        }
      }

      let sx = Math.floor(x / 3) * 3
      let sy = Math.floor(y / 3) * 3
      for (let nx = sx; nx < sx + 3; nx++) {
        for (let ny = sy; ny < sy + 3; ny++) {
          if (nx === x && ny === y) {
            continue
          }
          if (board[nx][ny] === val) {
            return true
          }
        } 
      }

      return false
    }

    for (let i = 0; i < r; i++) {
      for (let j = 0; j < c; j++) {
        if (board[i][j] === '.') {
          continue
        } else {
          let result = isNotValidPos(board[i][j], i, j)
          if (result) {
            return false
          }
        }
      }
    }
    return true
};


const main = () => {
  let board = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
  ]
  
  // console.log('is the board valid', isValidSudoku(board))

  board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]

  // console.log('is the board valid', isValidSudoku(board))


  board = [
    [".",".",".",".","5",".",".","1","."],
    [".","4",".","3",".",".",".",".","."],
    [".",".",".",".",".","3",".",".","1"],
    ["8",".",".",".",".",".",".","2","."],
    [".",".","2",".","7",".",".",".","."],
    [".","1","5",".",".",".",".",".","."],
    [".",".",".",".",".","2",".",".","."],
    [".","2",".","9",".",".",".",".","."],
    [".",".","4",".",".",".",".",".","."]]
  console.log('is the board valid', isValidSudoku(board))
}

main()

