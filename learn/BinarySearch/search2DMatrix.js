// https://leetcode.com/problems/search-a-2d-matrix/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
  const row = matrix.length
  const col = matrix[0].length

  // find the row first
  let l = 0
  let r = row
  let mid
  while (l < r) {
    mid = l + ~~((r - l) / 2)

    if (target > matrix[mid][col - 1]) {
      l = mid + 1
    } else {
      r = mid
    }
  }

  if (l === row) {
    return false
  } else {
    // find the column
    const rowFound = l

    l = 0
    r = col
    let mid
    while (l < r) {
      mid = l + ~~((r - l) / 2)

      if (target > matrix[rowFound][mid]) {
        l = mid + 1
      } else {
        r = mid
      }
    }

    return matrix[rowFound][l] === target
  }
}

const main = () => {
  matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 13
  console.log('Found in matrix ', searchMatrix(matrix, target))

  matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 3
  console.log('Found in matrix ', searchMatrix(matrix, target))

  matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 60
  console.log('Found in matrix ', searchMatrix(matrix, target))
}

main()
