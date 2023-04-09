



const NQueenSolver = (board, n) => {

  const prinBoard = (board) => {
    console.log('-'.repeat(10))
    board.forEach(ithRow => console.log(...ithRow))
    console.log('-'.repeat(10))
  }

  const isSafe = (board, n, i, j) => {
    // console.log('Lets check safety for ', i, j)
    // Column Check
    let x = i
    while(x >= 0) {
      // console.log('Checking column', x, j)
      if (board[x][j] === 1) return false
      x--
    }

    // left Diagonal
    x = i
    let y = j
    while(x >= 0 && y >= 0) {
      if (board[x][y] === 1) return false
      x--, y--
    }

    // right Diagonal
    x = i
    y = j
    while(x >= 0 && y < n) {
      if (board[x][y] === 1) return false
      x--, y++
    }
    return true
  }

  const NQueenSolverRecur = (board, n, i) => {
    
    if (i === n) {
      // prinBoard(board)
      // return true
      // or return count
      return 1
    }

    let count = 0
    // check if Queen can be placed in the i'th row
    for (let j = 0; j < n; j++) {
      if (isSafe(board, n, i, j)) {
        board[i][j] = 1
        // let sucess = NQueenSolverRecur(board, n, i + 1)
        // or return count
        count += NQueenSolverRecur(board, n, i + 1)
        board[i][j] = 0
        // remove the value
        // if (!sucess) {
        // board[i][j] = 0
        // }
      }
    }
    // return false
    return count
  }

  return NQueenSolverRecur(board, n, 0)
}


const main = () => {
  let n = 16
  let board = [...new Array(n)].map(() => Array(n).fill(0))

  let ways = NQueenSolver(board, board[0].length)
  console.log(ways)
}

main()