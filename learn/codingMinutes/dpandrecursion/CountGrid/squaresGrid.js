// https://leetcode.com/problems/count-square-submatrices-with-all-ones/

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
  const r = matrix.length
  const c = matrix[0].length

  const dp = Array(r).fill().map(() => Array(c).fill(0))

  let result = 0
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (i == 0 || j == 0) {
        dp[i][j] = matrix[i][j]
      } else {
        if (matrix[i][j] == 1) {
          dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
        }
      }

      if (dp[i][j] > 0) {
        result += dp[i][j]
      }
    }
  }

  // let result = 0
  // for (let i = 0; i < r; i++) {
  //   for (let j = 0; j < c; j++) {
  //     if (dp[i][j] > 0) {
  //       result += dp[i][j]
  //     }
  //   }
  // }
  return result
};

const Print2D = arr => arr.forEach(o => console.log(...o))

const main = () => {
  matrix = [
    [0,1,1,1],
    [1,1,1,1],
    [0,1,1,1]
  ]

  console.log('Count of square matrices are ', countSquares(matrix))


  matrix = [
    [1,0,1],
    [1,1,0],
    [1,1,0]
  ]
  console.log('Count of square matrices are ', countSquares(matrix))
}

main()


