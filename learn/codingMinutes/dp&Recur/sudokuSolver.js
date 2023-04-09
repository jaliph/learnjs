
const Print2D = arr => arr.forEach(element => {
  console.log(...element)
});


const solveSudoku = (matrix) => {
  const isPossible = (mat, i, j, value) => {
    // check the row and column
    for (let x = 0; x < 9; x++) {
      if (mat[i][x] === value || mat[x][j] === value) {
        return false
      }
    }

    // check the subgrid
    let sx = Math.floor(i / 3) * 3
    let sy = Math.floor(j / 3) * 3
    for (let x = sx; x < sx + 3; x++) {
      for (let y = sy; y < sy + 3; y++) {
        if (mat[x][y] === value) return false
      }
    }

    return true
  }

  const solveSudokuRecur = (mat, i, j) => {
    // Base
    if (i === 9) {
      // Print2D(mat)
      return true
    }

    //Recursion

    // if j has reached its end, go for the next line, reset j to 0
    if (j == 9) {
      return solveSudokuRecur(mat, i + 1, 0)
    }

    // if matrix is already filled..
    if (mat[i][j] !== 0) {
      return solveSudokuRecur(mat, i, j + 1)
    }

    // Try to fill all the possible values
    for (let ans = 1; ans <= 9; ans++) {
      if (isPossible(mat, i, j, ans)) {
        // console.log('Solved ... ', i, j, ans)
        mat[i][j] = ans
        let subProbResult = solveSudokuRecur(mat, i, j + 1)
        if (subProbResult == true) return true
      }
    }
    mat[i][j] = 0
    return false
  }
  return solveSudokuRecur(matrix, 0, 0)
}


const main = () => {
  const sudokuPuzzle = [
    [3, 0, 6, 5, 0, 8, 4, 0, 0],
    [5, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 8, 7, 0, 0, 0, 0, 3, 1],
    [0, 0, 3, 0, 1, 0, 0, 8, 0],
    [9, 0, 0, 8, 6, 3, 0, 0, 5],
    [0, 5, 0, 0, 9, 0, 6, 0, 0], 
    [1, 3, 0, 0, 0, 0, 2, 5, 0],
    [0, 0, 0, 0, 0, 0, 0, 7, 4],
    [0, 0, 5, 2, 0, 6, 3, 0, 0] 
  ]
  let solved = solveSudoku(sudokuPuzzle)
  console.log('Sudoku is solved ', solved)
  Print2D(sudokuPuzzle)
}

main()