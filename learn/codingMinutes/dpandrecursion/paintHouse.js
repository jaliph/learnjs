
/*
There are a row of n houses, each house can be painted with one of the three colors: red, blue or green. The cost of painting each house with a certain color is different. You have to paint all the houses such that no two adjacent houses have the same color.

̉̉̉̉̉The cost of painting each house with a certain color is represented by a n x 3 cost matrix. For example, costs[0][0] is the cost of painting house 0 with color red; costs[1][2] is the cost of painting house 1 with color green, and so on… Find the minimum cost to paint all houses.

Input: [[17,2,17],[16,16,5],[14,3,19]]
Output: 10
Explanation: Paint house 0 into blue, paint house 1 into green, paint house 2 into blue.
Minimum cost: 2 + 5 + 3 = 10.
*/

const paintHouseSolver = (mat) => {
  const dp = Array(mat.length).fill(0).map(() => Array(mat[0].length).fill(Infinity))

  /// left to right
  // for (let i = 0; i < mat.length; i++) {
  //   dp[i][0] = mat[i][0]
  // }
  // for (let j = 1; j < mat[0].length; j++) {
  //   for (let i = 0; i < mat.length; i++) {
  //     // console.log(i, j)
  //     for (let _i = 0; _i < mat.length; _i++) {
  //       if (_i != i) {
  //         // console.log(_i, j)
  //         dp[i][j] = Math.min(dp[i][j], dp[_i][j - 1] + mat[i][j])
  //       }
  //     }
  //     // process.exit(1)
  //   }
  // }

  // top to dowm
  for (let j = 0; j < mat[0].length; j++) {
    dp[0][j] = mat[0][j]
  }

  for (let i = 1; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      for (let _j = 0; _j < mat[0].length; _j++) {
        if (j != _j) { dp[i][j] = Math.min(dp[i][j], dp[i - 1][_j] + mat[i][j]) }
      }
    }
  }

  Print2D(mat)
  Print2D(dp)

  let ans = Infinity
  for (let j = 0; j < mat[0].length; j++) {
    ans = Math.min(ans, dp[mat.length - 1][j])
  }
  return ans
}

const Print2D = arr => arr.forEach(o => console.log(...o))

const main = () => {
  const matrix = [[17, 2, 17], [16, 16, 5], [14, 3, 19]]
  console.log('The min cost painting all the houses is', paintHouseSolver(matrix))
}

main()
