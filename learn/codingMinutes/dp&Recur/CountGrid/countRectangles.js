// https://leetcode.com/problems/count-submatrices-with-all-ones/

/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSubmat = function(mat) {
  let r = mat.length
  let c = mat[0].length

  // Print2D(mat)

  // let dp = Array(r).fill().map(() => Array(c).fill(0))

  const prefixSum = (mat) => {
    for (let i = 0; i < r; i++) {
      for (let j = c - 2; j >= 0; j--) {
        if (mat[i][j]) {
          mat[i][j] += mat[i][j + 1]
        }
      }
    }
  }

  prefixSum(mat)
  
  let ans = 0
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      let min = Infinity
      for (let k = i; k < r; k++) {
        min = Math.min(min, mat[k][j])
        ans += min
      }
    }
  }
  
  return ans
};
const Print2D = arr => arr.forEach(o => console.log(...o))

const main = () => {
  mat = [[1,0,1],[1,1,0],[1,1,0]]
  console.log('the count of matrices are ', numSubmat(mat))

  mat = [[0,1,1,0],[0,1,1,1],[1,1,1,0]]
  console.log('the count of matrices are ', numSubmat(mat))

}

main()