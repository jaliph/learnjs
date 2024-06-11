/**
 * https://leetcode.com/problems/rotate-image/
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function (matrix) {
  let l = 0; let r = matrix.length - 1
  let temp, top, bottom
  while (l < r) {
    for (let i = 0; i < (r - l); i++) {
      top = l
      bottom = r

      // save the top left
      temp = matrix[top][l + i]

      // update the top left from bottom left
      matrix[top][l + i] = matrix[bottom - i][l]

      // update bottom left from bottom right
      matrix[bottom - i][l] = matrix[bottom][r - i]

      // update bottom right from top right
      matrix[bottom][r - i] = matrix[top + i][r]

      // update top right from temp
      matrix[top + i][r] = temp
    }
    l++
    r--
  }
}

const Print2D = arr => arr.forEach(o => console.log(...o))

const main = () => {
  matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  Print2D(matrix)
  rotate(matrix)
  Print2D(matrix)
}

main()
