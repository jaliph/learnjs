
/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
  const r = board.length
  const c = board[0].length

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
        console.log('came here2', x, y)
        return true
      }
    }

    const sx = Math.floor(x / 3) * 3
    const sy = Math.floor(y / 3) * 3
    for (let nx = sx; nx < sx + 3; nx++) {
      for (let ny = sy; ny < sy + 3; ny++) {
        if (nx === x && ny === y) {
          continue
        }
        if (board[nx][ny] === val) {
          console.log('came here3')
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
        const result = isNotValidPos(board[i][j], i, j)
        if (result) {
          return false
        }
      }
    }
  }
  return true
}

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

  board = [['5', '3', '.', '.', '7', '.', '.', '.', '.'], ['6', '.', '.', '1', '9', '5', '.', '.', '.'], ['.', '9', '8', '.', '.', '.', '.', '6', '.'], ['8', '.', '.', '.', '6', '.', '.', '.', '3'], ['4', '.', '.', '8', '.', '3', '.', '.', '1'], ['7', '.', '.', '.', '2', '.', '.', '.', '6'], ['.', '6', '.', '.', '.', '.', '2', '8', '.'], ['.', '.', '.', '4', '1', '9', '.', '.', '5'], ['.', '.', '.', '.', '8', '.', '.', '7', '9']]

  // console.log('is the board valid', isValidSudoku(board))

  board = [
    ['.', '.', '.', '.', '5', '.', '.', '1', '.'],
    ['.', '4', '.', '3', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '3', '.', '.', '1'],
    ['8', '.', '.', '.', '.', '.', '.', '2', '.'],
    ['.', '.', '2', '.', '7', '.', '.', '.', '.'],
    ['.', '1', '5', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
    ['.', '2', '.', '9', '.', '.', '.', '.', '.'],
    ['.', '.', '4', '.', '.', '.', '.', '.', '.']]
  console.log('is the board valid', isValidSudoku(board))

  board = [
    [5, 3, 1, 2, 7, 3, 4, 5, 6],
    [6, 2, 3, 1, 9, 5, 1, 7, 8],
    [4, 9, 8, 1, 5, 6, 2, 6, 3],
    [8, 1, 2, 3, 6, 4, 5, 6, 3],
    [4, 3, 4, 8, 1, 3, 7, 2, 1],
    [7, 5, 6, 7, 2, 2, 3, 1, 6],
    [1, 6, 5, 4, 2, 7, 2, 8, 9],
    [2, 4, 7, 4, 1, 9, 6, 3, 5],
    [3, 6, 9, 5, 8, 1, 8, 7, 9]
  ]
  console.log('is the board valid', isValidSudoku(board))
}

main()
