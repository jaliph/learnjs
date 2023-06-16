// https://leetcode.com/problems/count-submatrices-with-all-ones/

// /**
//  * @param {number[][]} mat
//  * @return {number}
//  */
// var numSubmat = function(mat) {
//   let r = mat.length
//   let c = mat[0].length

//   // Print2D(mat)

//   // let dp = Array(r).fill().map(() => Array(c).fill(0))

//   const prefixSum = (mat) => {
//     for (let i = 0; i < r; i++) {
//       for (let j = c - 2; j >= 0; j--) {
//         if (mat[i][j]) {
//           mat[i][j] += mat[i][j + 1]
//         }
//       }
//     }
//   }

//   prefixSum(mat)
  
//   let ans = 0
//   for (let i = 0; i < r; i++) {
//     for (let j = 0; j < c; j++) {
//       let min = Infinity
//       for (let k = i; k < r; k++) {
//         min = Math.min(min, mat[k][j])
//         ans += min
//       }
//     }
//   }
  
//   return ans
// };


/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSubmat = function(mat) {
  const r = mat.length
  const c = mat[0].length

  // Print2D(mat)
  for (let j = 0; j < c; j++) {
    for (let i = 1; i < r; i++) {
      if (mat[i][j]) {
        mat[i][j] = 1 + mat[i - 1][j]
      }
    }
  }


  // Print2D(mat)

  let ans = 0
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (mat[i][j]) {
        let rt = mat[i][j]
        for (let k = j + 1; j < c; k++) {
          if (mat[i][k] > 0) {
            rt = Math.min(rt, mat[i][k])
            mat[i][j] += rt
          } else {
            break
          }
        }
        ans += mat[i][j]
      }
    }
  }

  return ans
}

const Print2D = arr => arr.forEach(o => console.log(...o))

const main = () => {
  mat = [[1,0,1],[1,1,0],[1,1,0]]
  console.log('the count of matrices are ', numSubmat(mat))

  mat = [[0,1,1,0],[0,1,1,1],[1,1,1,0]]
  console.log('the count of matrices are ', numSubmat(mat))

}

main()