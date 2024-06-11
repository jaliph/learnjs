/**
 * https://leetcode.com/problems/spiral-matrix-ii/
 * @param {number} n
 * @return {number[][]}
 */
const generateMatrix = function (n) {
  const mat = Array(n).fill().map(() => Array(n).fill(0))
  let val = 1
  let l = 0; let r = n - 1
  while (l <= r) {
    let top = l
    let bottom = r

    // fill top row
    for (let i = l; i <= r; i++) {
      mat[top][i] = val++
    }
    top++

    // fill right column
    for (let i = top; i <= bottom; i++) {
      mat[i][r] = val++
    }
    r--

    // bottom row
    for (let i = r; i >= l; i--) {
      mat[bottom][i] = val++
    }
    bottom--

    // fill left column
    for (let i = bottom; i >= top; i--) {
      mat[i][l] = val++
    }
    l++
  }

  return mat
}
