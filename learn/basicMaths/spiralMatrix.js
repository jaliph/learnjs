/**
 * https://leetcode.com/problems/spiral-matrix/
 * @param {number[][]} matrix
 * @return {number[]}
 */
let spiralOrder = function (matrix) {
  const res = []

  let l = 0; let r = matrix[0].length
  let top = 0; let bottom = matrix.length

  while (l < r && top < bottom) {
    // top row
    for (let i = l; i < r; i++) {
      res.push(matrix[top][i])
    }
    top++

    // right column
    for (i = top; i < bottom; i++) {
      res.push(matrix[i][r - 1])
    }
    r--

    if (!(top < bottom && l < r)) {
      break
    }

    // bottom row
    for (let i = r - 1; i >= l; i--) {
      res.push(matrix[bottom - 1][i])
    }
    bottom--

    // left column
    for (let i = bottom - 1; i >= top; i--) {
      res.push(matrix[i][l])
    }
    l++
  }
  return res
}


const main = () => {
  matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  console.log('Spiral Order is .. ', spiralOrder(matrix))
}

main()
